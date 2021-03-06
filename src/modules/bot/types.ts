import { Candle } from '../api/types';

/**
 * Only used for internal calculations for the react-stockcharts library
 * e.g. for ema
 */
export interface CandleReactStockCharts
  extends Omit<Candle, 'startsAt' | 'quoteVolume'> {
  date: Date;
  ema9: number;
  ema26: number;
}
