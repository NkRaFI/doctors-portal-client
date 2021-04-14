import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const Blogs = () => {
    const blogData = [
        {
            key: 1,
            title: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            key: 2,
            title: 'Two time brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            key: 3,
            title: 'The tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ];

    return (
        <section className="container blog-container">
            <div className="my-5 text-center">
                <h5 className="my-3" style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row ms-auto">
                {
                    blogData.map(blog => <BlogPost blog={blog} key={blog.key}></BlogPost>)
                }
            </div>
        </section>
    );
};

export default Blogs;