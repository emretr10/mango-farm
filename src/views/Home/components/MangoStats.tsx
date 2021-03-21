import React from 'react'
import { Card, CardBody, Heading, Text } from '@lemonfarm/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getLemonAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceLemonBusd } from '../../../state/hooks'

const StyledLemonStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const LemonStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getLemonAddress())
  const farms = useFarms()
  const lemonPrice = usePriceLemonBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const lemonSupply = getBalanceNumber(circSupply)
  const marketCap = lemonPrice.times(circSupply)

  let lemonPerBlock = 0
  if (farms && farms[0] && farms[0].lemonPerBlock) {
    lemonPerBlock = new BigNumber(farms[0].lemonPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledLemonStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Lemon Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {lemonSupply && <CardValue fontSize="14px" value={lemonSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New LEMON/block')}</Text>
          <Text bold fontSize="14px">
            {lemonPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledLemonStats>
  )
}

export default LemonStats
