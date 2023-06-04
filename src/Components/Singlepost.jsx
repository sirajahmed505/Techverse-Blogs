import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "./Singlepost.css";
import Header from './Header';

const API_URL = 'http://localhost:3000/posts';

export default function Singlepost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, body, imgUrl, category } = post;

  return (
 
    <div className="singlePost">
      <Header styles={{width:'100%'}} />
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={imgUrl}
          alt=""
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {body}
        </p>
      </div>
    </div>
  );
}


// import react from 'react';
// import { Link } from "react-router-dom";
// import "./Singlepost.css";

// export default function Singlepost() {
//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img
//           className="singlePostImg"
//           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <h1 className="singlePostTitle">
//           Lorem ipsum dolor
//           <div className="singlePostEdit">
//             <i className="singlePostIcon far fa-edit"></i>
//             <i className="singlePostIcon far fa-trash-alt"></i>
//           </div>
//         </h1>
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to="/posts?username=Safak">
//                 Safak
//               </Link>
//             </b>
//           </span>
//           <span>1 day ago</span>
//         </div>
//         <p className="singlePostDesc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos!
//           <br />
//           <br />
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
//         </p>
//       </div>
//     </div>
//   );
// }