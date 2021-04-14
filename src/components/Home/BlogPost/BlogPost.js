import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div className="col-12 col-md-4 my-3">
            <div className="card-shadow px-3 py-5 mb-2">
                <div className="d-flex justify-content-start">
                    <img style={{ height: '50px' }} src={blog.authorImg} alt="" className="img-fluid ms-3" />
                    <div className="ms-3">
                        <h5>{blog.author}</h5>
                        <small className="text-secondary">{blog.date}</small>
                    </div>
                </div>
                <h5 className="my-4">{blog.title}</h5>
                <p className="text-secondary">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;