import { ApolloError } from '@apollo/client/errors'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import { GET_ALL_ANIME } from '~/src/queries/anime'
import client from '~libs/apollo-client'
import { AnimeDataTypes } from '~types/anime-types'
import Image from '~components/Image'
import Card from '~components/Card'
import Texts from '~components/Text'

type HomeProps = {
  data: AnimeDataTypes
  error: ApolloError | undefined
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      {data.Page.media.map((i) => (
        <Card key={i.id}>
          <Image alt="image" src={i.coverImage.large} w={200} h={200} />
          <div>
            <Texts fontWeight="bold" fontSize="1.1em">
              {i.title.romaji}
            </Texts>
            <Texts>{i.title.native}</Texts>
            {/* <Texts>{i.description}</Texts> */}
          </div>
        </Card>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const variables = {
    page: 1,
    perPage: 20,
  }

  const { data } = await client.query<AnimeDataTypes>({
    query: GET_ALL_ANIME,
    variables: variables,
  })

  return {
    props: {
      data,
    },
  }
}

export default Home
