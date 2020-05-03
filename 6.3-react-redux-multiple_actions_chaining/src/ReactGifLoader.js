import React from "react";
import GifLoader from "react-gif-loader";
import { connect } from "react-redux";

const imageStyle = {
  position: "absolute",
  left: "0px",
  top: "0px",
  zindex: "99",
};
class ReactGifLoader extends React.Component {
  render() {
    return (
      <GifLoader
        loading={this.props.isLoading}
        imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
        imageStyle={imageStyle}
        overlayBackground="rgba(0,0,0,0.5)"
      />
    );
  }
}

const mapStateToProps = (rootState) => {
  console.log(rootState);
  return {
    isLoading:
      rootState.Comp1Reducer.isUpdating || rootState.Comp2Reducer.isUpdating,
  };
};

const ConnectedReactGifLoader = connect(mapStateToProps, {})(ReactGifLoader);
export default ConnectedReactGifLoader;
