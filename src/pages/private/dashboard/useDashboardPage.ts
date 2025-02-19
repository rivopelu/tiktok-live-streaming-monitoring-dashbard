import { useEffect, useState } from 'react';

export function useDashboardPage() {
  const [chartSeries, setChartSeries] = useState([
    {
      name: 'series-1',
      data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartSeries([
        {
          name: 'series-1',
          data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartOption = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003],
    },
  };

  return { chartOption, chartSeries };
}
