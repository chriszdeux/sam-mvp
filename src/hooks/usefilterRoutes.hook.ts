
import { openSnackbar } from "@/redux/slices/snackbar/snackbarSlice.slice";
import { menuRoutes, RoutesInterface } from "@/routes/routes_";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFilterRoutes = (): RoutesInterface[] => {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();
  const [routes, setRoutes] = useState<RoutesInterface[]>([]);

  useEffect(() => {
    try {
      const filtered = menuRoutes
        .filter((route) => {
          if (route.auth && isLogin) return false;
          return true;
        })
        .map((route) => {
          if (route.subPath && route.subPath.length > 0) {
            const filteredSubPaths = route.subPath.filter(sub => {
              if (sub.auth && !isLogin) return false;
              return true;
            });
            return { ...route, subPath: filteredSubPaths };
          }
          return route;
        });

      setRoutes(filtered);
    } catch (error) {
      dispatch(openSnackbar(error));
    }
  }, [isLogin]);

  return routes;
};
