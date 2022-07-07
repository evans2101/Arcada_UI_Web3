import React, { useState } from 'react'
import { useTheme } from '@mui/material'

import { BoxLayout, ChartTable } from './charts-style'
import { CustomButton as Button } from '../../components/button/button'
import {
  videosChartsData,
  artistChartsData,
  collectorsChartsData,
} from '../../data/data'
import { previewDynamicImage } from '../../tools'

const Charts = () => {
  const theme = useTheme()

  const [tableType, setTableType] = useState('artist')
  return (
    <BoxLayout theme={theme}>
      <h2 className="box__title">Charts</h2>
      <div className="box__action_btns">
        <span>
          <Button
            buttonText="Artists"
            type={tableType === 'artist' ? 'primary' : 'gray'}
            onClick={() => setTableType('artist')}
          />
          <Button
            buttonText="Collectors"
            type={tableType === 'collectors' ? 'primary' : 'gray'}
            onClick={() => setTableType('collectors')}
          />
          <Button
            buttonText="Videos"
            type={tableType === 'videos' ? 'primary' : 'gray'}
            onClick={() => setTableType('videos')}
          />
        </span>

        <span>
          <Button buttonText="All Time" type="primary" />
          <Button buttonText="7D" type="gray" />
          <Button buttonText="30D" type="gray" />
        </span>
      </div>
      {tableType === 'artist' && (
        <ChartTable>
          <div className="chart_table__header">
            <p>#</p>
            <p>Rank</p>
            <p>Total Streams</p>
            <p>Unique Collectors</p>
            <p>Edition Sold</p>
            <p>Primary Sales</p>
            <p>Secondary Sales</p>
            <p>Total Sales</p>
          </div>

          {artistChartsData?.map((_, idx) => (
            <div key={idx} className="chart_table__rows">
              <p>{_?.id}</p>

              <span className="row_info">
                <img
                  src={previewDynamicImage(_?.profileImg)}
                  alt="profile_img"
                />
                <span>
                  <p>{_?.artistName}</p>
                  <p>{_?.artistId}</p>
                </span>
              </span>
              <p>{_?.totalStream}</p>
              <p>{_?.uniqueCollectors}</p>
              <p>{_?.editionSold}</p>

              <span className="double__deck">
                <p>
                  {_?.primarySales?.crypto} {_?.primarySales?.unit}{' '}
                </p>
                <p>${_?.primarySales?.dollar} </p>
              </span>
              <span className="double__deck">
                <p>
                  {_?.secondarySales?.crypto} {_?.secondarySales?.unit}{' '}
                </p>
                <p>${_?.secondarySales?.dollar} </p>
              </span>
              <span className="double__deck">
                <p>
                  {_?.totalySales?.crypto} {_?.totalySales?.unit}{' '}
                </p>
                <p>${_?.totalySales?.dollar} </p>
              </span>
            </div>
          ))}
        </ChartTable>
      )}
      {tableType === 'collectors' && (
        <ChartTable>
          <div className="chart_table__header">
            <p>#</p>
            <p>Rank</p>
            <p>Editions Collected</p>
            <p>Artist Supported</p>
            <p>Total Spent</p>
          </div>

          {collectorsChartsData?.map((_, idx) => (
            <div key={idx} className="chart_table__rows">
              <p>{_?.id}</p>

              <span className="row_info">
                <img
                  src={previewDynamicImage(_?.collectorProfileImg)}
                  alt="profile_img"
                />
                <span>
                  <p>{_?.collectorName}</p>
                  <p>{_?.collectorId}</p>
                </span>
              </span>
              <p>{_?.editionsCollected}</p>
              <p>{_?.artistSupported}</p>

              <span className="double__deck">
                <p>
                  {_?.totalSpent?.crypto} {_?.totalSpent?.unit}{' '}
                </p>
                <p>${_?.totalSpent?.dollar} </p>
              </span>
            </div>
          ))}
        </ChartTable>
      )}

      {tableType === 'videos' && (
        <ChartTable>
          <div className="chart_table__header">
            <p>#</p>
            <p>Rank</p>
            <p>Total Streams</p>
            <p>Unique Collectors</p>
            <p>Edition Sold</p>
            <p>Primary Sales</p>
            <p>Secondary Sales</p>
            <p>Total Sales</p>
          </div>

          {videosChartsData?.map((_, idx) => (
            <div key={idx} className="chart_table__rows">
              <p>{_?.id}</p>

              <span className="row_info">
                <img
                  src={previewDynamicImage(_?.profileImg)}
                  alt="profile_img"
                />
                <span>
                  <p>{_?.artistName}</p>
                  <p>{_?.artistId}</p>
                </span>
              </span>
              <p>{_?.totalStream}</p>
              <p>{_?.uniqueCollectors}</p>
              <p>{_?.editionSold}</p>

              <span className="double__deck">
                <p>
                  {_?.primarySales?.crypto} {_?.primarySales?.unit}{' '}
                </p>
                <p>${_?.primarySales?.dollar} </p>
              </span>
              <span className="double__deck">
                <p>
                  {_?.secondarySales?.crypto} {_?.secondarySales?.unit}{' '}
                </p>
                <p>${_?.secondarySales?.dollar} </p>
              </span>
              <span className="double__deck">
                <p>
                  {_?.totalySales?.crypto} {_?.totalySales?.unit}{' '}
                </p>
                <p>${_?.totalySales?.dollar} </p>
              </span>
            </div>
          ))}
        </ChartTable>
      )}
    </BoxLayout>
  )
}

export default Charts
