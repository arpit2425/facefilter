import React from "react";
import Particles from "react-particles-js";
import axios from "axios";
import "./App.css";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import Rank from "./components/Rank/Rank";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Clarifai from "clarifai";
const app = new Clarifai.App({
  apiKey: "0c444fa12958427a9996fa48b7cf6c4f",
});
const paramsoption = {
  detectRetina: true,
  fpsLimit: 30,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: [],
      },
      onHover: {
        enable: true,
        mode: "slow",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      slow: {
        factor: 3,
        radius: 100,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    lineLinked: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "lime",
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      collisions: false,
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 20,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 0.5,
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      random: false,
      value: 0,
    },
    shape: {
      character: {
        fill: true,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
        close: true,
      },
      image: {
        height: 100,
        replaceColor: true,
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        fill: true,
        close: true,
      },
      polygon: {
        close: true,
        fill: true,
        sides: 5,
      },
      type: "circle",
      custom: {},
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 5,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    stroke: {
      color: {
        value: "#000000",
      },
      width: 0,
      opacity: 1,
    },
  },
  polygon: {
    draw: {
      enable: false,
      stroke: {
        color: {
          value: "#fff",
        },
        width: 0.5,
        opacity: 1,
      },
    },
    enable: false,
    inline: {
      arrangement: "one-per-point",
    },
    move: {
      radius: 10,
      type: "path",
    },
    scale: 1,
    type: "none",
    url: "",
  },
  backgroundMask: {
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  pauseOnBlur: true,
  background: {},
};
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignedin: false,
      user: {
        email: "",
        name: "",
        id: "",
        entries: "",
      },
    };
  }
  onLoad = (data) => {
    this.setState({
      user: {
        email: data.email,
        name: data.name,
        id: data._id,
        entries: data.entries,
      },
    });
  };
  calculateFaceLocation = (data) => {
    const clarifaiData =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("imageResult");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiData.left_col * width,
      topRow: clarifaiData.top_row * height,
      rightCol: width - clarifaiData.right_col * width,
      bottomRow: height - clarifaiData.bottom_row * height,
    };
  };
  onroutechange = (route) => {
    if (route === "home") {
      this.setState({ isSignedin: true });
    }
    if (route === "signin") {
      this.setState({ isSignedin: false });
    }
    this.setState({ route });
  };
  displayFace = (box) => {
    this.setState({ box });
  };
  onChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmitHandler = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      // .predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      // .then((res) => console.log(res))
      .then((res) => {
        axios
          .get(`http://localhost:5000/image/${this.state.user.id}`)
          .then((res) => {
            this.setState({ user: { entries: res.data.entries } });
            console.log(this.state.user);
          })
          .catch((err) => console.log(err));

        this.displayFace(this.calculateFaceLocation(res));
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={paramsoption} />

        <Navigation
          onroutechange={this.onroutechange}
          isSignedin={this.state.isSignedin}
        />
        <Logo />
        {this.state.route === "home" ? (
          <div>
            <Rank />
            <ImageLinkForm
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
            />
            <FaceDetection box={this.state.box} url={this.state.imageURL} />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onLoad={this.onLoad} onroutechange={this.onroutechange} />
        ) : (
          <Register onLoad={this.onLoad} onroutechange={this.onroutechange} />
        )}
      </div>
    );
  }
}

export default App;
