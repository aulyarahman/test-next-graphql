import { gql } from '@apollo/client'

const GET_ALL_ANIME = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
          english
          native
        }
        hashtag
        description
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        genres
        startDate {
          year
          month
          day
        }
      }
    }
  }
`

export { GET_ALL_ANIME }
