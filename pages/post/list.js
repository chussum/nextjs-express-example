import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import axios from 'axios'

class PostList extends React.Component {
    static async getInitialProps () {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return {
            posts: response.data
        }
    }

    render() {
        const { posts } = this.props;
        const postList = posts.map(
            post => (
                <li key={post.id}>
                    <Link prefetch
                          href={`/post/view?id=${post.id}`}
                          as={`/post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        )

        return (
            <Layout>
                <ul>
                    {postList}
                </ul>
            </Layout>
        )
    }
}

export default PostList