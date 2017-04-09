import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

class PostView extends React.Component {
    static async getInitialProps ({ query }) {
        let response;
        try {
            response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + query.id);
        } catch (err) {
            err.code = 'ENOENT'
            throw err
        }

        return {
            post: response.data
        }
    }

    render() {
        const { post: {title, body} } = this.props;

        return (
            <Layout>
                <div>{title}</div>
                <div>{body}</div>
            </Layout>
        )
    }
}

export default PostView