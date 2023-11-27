import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://www.instyle.com/thmb/yWuauci9vsNCxmE-VMVk6SBjKR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/042817-vetements-collab-ideas-bounty-lead-2000-281ebac415484a86b5b486809d36f71f.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="	https://i.pinimg.com/originals/a8/bb/b7/a8bbb7a10f95c65a6cedd691c4c71369.jpg"
            alt=""
          />
          <button>
            <Link to="/products" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://www.highsnobiety.com/static-assets/dato/1673971337-bape-101-main2.jpg"
            alt=""
          />
          <button>
            <Link to="/products" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.pinimg.com/564x/18/df/7f/18df7f9fc737cdc8e7338e6a000d4f0b.jpg"
                alt=""
              />
              <button>
                <Link to="/products" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://www.malemodelscene.net/wp-content/uploads/2018/06/JADEN-2-620x770.jpg"
                alt=""
              />
              <button>
                <Link to="/products" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/supreme-model-dafronjise-ellington.jpg"
            alt=""
          />
          <button>
            <Link to="/products" className="link">
              Fashion
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
