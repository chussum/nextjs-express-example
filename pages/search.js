import Layout from '../components/Layout'

const Search = ({url}) => {
    return (
        <Layout>
            Search keyword is "{url.query.keyword}".
        </Layout>
    )
}

export default Search