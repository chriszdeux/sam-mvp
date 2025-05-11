import dayjs from 'dayjs';

interface DateConf {
  date?: string;
  split?: string;
  diffDays?: number;
  monthType?: boolean;
}

export const newDate = (conf: DateConf = {}) => {
  const { date = "", split = '-', diffDays = 0, monthType = false } = conf;

  let nDate = date ? dayjs(date) : dayjs();

  if (diffDays !== 0) {
    nDate = nDate.add(diffDays, 'day');
  }

  const format = monthType ? `YYYY${split}MM` : `YYYY${split}MM${split}DD`;

  return nDate.format(format);
};
