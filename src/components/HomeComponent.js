import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponene";
import { baseUrl } from "../shared/baseUrl";
import {FadeTransform} from 'react-animation-components'

const RenderCard = ({ item}) => {
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.item}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dessert}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.coffee}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
