"use client";
import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import LoadingModal from "@/components/modal/LoadingModal";

export default function LoadingTransition() {
  const pathname = usePathname();
  const [showLoading, setShowLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setShowLoading(true);
    const timer = setTimeout(() => setShowLoading(false), 1000); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return showLoading ? <LoadingModal open text="Cargando..." /> : null;
}
