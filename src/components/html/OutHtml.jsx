import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { markdown } from 'markdown';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';

class OutHtml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            html: ''
        }
    }

    outText = (e) => {
        console.log(e.target)
        this.setState({ text: e.target.value });
    }

    outhTml = (text) => {
        const html = markdown.toHTML(text);
        this.setState({ html });
    }

    render() {
        const { text, html } = this.state;
        const highlightedCode = hljs.highlightAuto('<span>Hello World!</span>').value;

        return (
            <div className="outhtml">
                {/* <div className="out-text">{text}</div> */}
                <div className="in-text">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Input makdwon text</Form.Label>
                        <Form.Control as="textarea" value={text} rows={5} onChange={this.outText} onBlur={() => this.outhTml(text)} />
                    </Form.Group>
                </div>
                <div className="out-html" dangerouslySetInnerHTML={{ __html: html }} ></div>
                <div dangerouslySetInnerHTML={{ __html: highlightedCode }} ></div>
            </div>
        )
    }
}

export default OutHtml;