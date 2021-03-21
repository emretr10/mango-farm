import { usePriceLemonBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalLemon = getBalanceNumber(totalRewards)
  const lemonPriceBusd = usePriceLemonBusd()

  return totalLemon * lemonPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
