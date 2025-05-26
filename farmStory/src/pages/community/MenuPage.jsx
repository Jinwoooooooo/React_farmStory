import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { SubLayout } from '../../layouts/SubLayout'

export const MenuPage = () => {
  return (
    <MainLayout>
        <SubLayout>
            <h3>오늘의 식단</h3>
        </SubLayout>
    </MainLayout>
  )
}
