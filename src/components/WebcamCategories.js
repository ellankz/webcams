import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../actions";
import { connect, useDispatch } from "react-redux";
import "./WebcamCategories.css";

const WebcamCategories = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const renderList = () => {
    return props.categories.map(cat => {
      return (
        <Link
          className={
            props.activeCategory === cat.id ? "item teal active" : "item"
          }
          key={cat.id}
          to={`/category/${cat.id}`}
        >
          {cat.name}
          <div
            className={
              props.activeCategory === cat.id
                ? "ui teal left pointing label"
                : "ui label"
            }
          >
            {cat.count}
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="ui vertical menu categories-menu">
      <Link
        className={props.activeCategory === null ? "item teal active" : "item"}
        key={"all"}
        to="/"
      >
        All Webcams
      </Link>
      {renderList()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    activeCategory: state.activeCategory
  };
};

export default connect(
  mapStateToProps,
  {}
)(WebcamCategories);
