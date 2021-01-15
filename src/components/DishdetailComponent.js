import React,{useEffect, useRef} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Col,
  ModalHeader,
  ModalBody,
  Row,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import {FadeTransform, Fade, Stagger} from 'react-animation-components'

function DishDetail(props) {

if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            postcomment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDish(props) {

  const ref = useRef()

  useEffect(()=>{
    ref.current.scrollIntoView()
  },[])

  return (
    <React.Fragment>
      <div className="col-12 col-md-5 m-1" id='dish' ref={ref}>
        <FadeTransform
          in
          transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
        >
          <Card>
            <CardImg
              width="100%"
              src={props.dish.image}
              alt={props.dish.name}
            />
            <CardImgOverlay></CardImgOverlay>
            <CardBody>
              <CardTitle heading>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    </React.Fragment>
  );
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleSubmit = (values) => {
    this.toggleModal();
    this.props.postcomment(
      this.props.dishId,
      values.rating,
      values.username,
      values.comment
    );
  };

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
          >
            Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    id="rating"
                    model=".rating"
                    className="form-control"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="username" md={5}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    id="username"
                    name="username"
                    model=".username"
                    className="form-control"
                    placeholder="Your Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 character",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={5}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    id="comment"
                    name="comment"
                    model=".comment"
                    className="form-control"
                    rows={8}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderComments(props) {
    const comments = props.comments.map((comment) => {
      return (
        <ul className="list-unstyled" key={comment.id}>
          <Stagger in>
            <Fade in>
              <div>{comment.comment}</div>
              <div>
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </div>
            </Fade>
          </Stagger>
        </ul>
      );
    });
    return (
      <div className="col-12 col-md-5">
        <div>
          <h4>Comments</h4>
        </div>
        <div>{comments}</div>
        <div>
            <CommentForm
              dishId={props.dishId}
              postcomment={props.postcomment}
            />
        </div>
      </div>
    )
}

export default DishDetail
