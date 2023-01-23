import { Component } from 'react';
import s from './Modal.module.css';
export default class Modal extends Component {
  hendleCklickOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown',this.hendleKeyEscaep);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown',this.hendleKeyEscaep);
  }
  hendleKeyEscaep=(e)=> {
    console.log(e);
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  }
  render() {
    const { largeImageURL, tags } = this.props.card;
    return (
      <div className={s.Overlay} onClick={this.hendleCklickOverlay}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
