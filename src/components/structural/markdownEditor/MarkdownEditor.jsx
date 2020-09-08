import React from 'react';
import styles from 'components/structural/markdownEditor/MarkdownEditor.module.scss';
import ButtonArea from 'components/structural/buttonArea/ButtonArea';
import PreviewArea from 'components/structural/previewArea/PreviewArea';
import TextArea from 'components/structural/textArea/TextArea';

const placeholder = 
`#  🎉 Welcome To The Markdown Previewer! 🎉

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to GitHub](https://github.com/roderickdevelopers)

# Headers

# This is a Heading h1
## This is a Heading h2 
### This is a Heading h3


# Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__
~~This will be crossed out~~

_You **can** ~~combine~~ them_

# Lists

## Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

## Ordered

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

# Images

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

# Links

[MyGitHub](https://github.com/roderickdevelopers)

# Blockquotes

As Jacob Lett said:

> Learning HTML and CSS is a lot more challenging 
> then it used to be. Responsive web design adds more layers 
> of complexity to design and develop websites.

# Task Lists

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

# Tables

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

# Inline code

I think you should use an \`<form>\` element instead

# Code Snippets

\`\`\`
const aboutMe = {
  name: 'matthew roderick',
  email: 'roderickdevelopers@gmail.com',
  position: 'Jr.Developer',
  website: 'roderickdevelopers.com'
};  
\`\`\`

For more Markdown tips, check out this <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Cheat Sheet</a>
`



class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateMarkdown = this.updateMarkdown.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
    this.resetMarkdown = this.resetMarkdown.bind(this);
    this.copyButton = this.copyButton.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.state = {
      markdown: placeholder,
      message: "Welcome!"
    };
  }

  copyToClipBoard (id) {
    document.getElementById(id).select();
    document.execCommand("copy");
  }

  copyButton() {
    const currentMarkdownState = this.state.markdown;
    const currentMessageState = this.state.message;
    const copied = "COPIED!";
    const alreadyCopied = "You're already copied!"
    const notCopied = "Not copied.  There wasn't anything there!"
    const emptyField = "There isn't anything to clear!";
    const cleared = "CLEARED!";
    if (currentMarkdownState.length > 0 && currentMarkdownState !== copied && currentMarkdownState !== notCopied) {
      this.copyToClipBoard("textarea");
      this.setState({
        message: copied
      })
    } else if (currentMessageState == copied) {
      this.setState({
        message: alreadyCopied
      })
    } else if (currentMessageState.length <= 0 || currentMessageState == notCopied || currentMessageState == cleared) {
      this.setState({
        message: notCopied
      })   
    } else if (currentMessageState == emptyField) {
      this.setState({
        message: notCopied
      })   
    }
  }
  
  updateMarkdown(markdown) {
    this.setState({ 
      markdown,
      message: "You are typing..."
    });
  }
  
  clearMarkdown() {
    const currentMarkdownState = this.state.markdown;
    const emptyField = "Nothing to clear!";
    const cleared = "CLEARED!";
    if (currentMarkdownState.length == 0) {
      this.setState({
        message: emptyField
      })
    } else if (currentMarkdownState == placeholder || currentMarkdownState.length > 0) {
      this.setState({
        message: cleared
      })
    }
    return this.setState({ 
      markdown: "" 
    });
  }
  
  resetMarkdown() {
    const resetStateMessage = "State is Reset";
    this.setState({ 
      markdown: placeholder,
      message: resetStateMessage 
    });
  }
  
    render() {
    const markdown = this.state.markdown;
    const message = this.state.message;
    return (
      <>
        <div className={styles.markdown_editor_button_area}>
          <ButtonArea 
            clearMarkdown={this.clearMarkdown}
            resetMarkdown={this.resetMarkdown}
            message={message}
            copyButton={this.copyButton} />
        </div>
      <div className={styles.markdown_editor_field_container}>
        <div className={styles.markdown_editor_text_area}>
          <TextArea 
            updateMarkdown={this.updateMarkdown}
            markdown={markdown} />
        </div>
        <div className={styles.markdown_editor_preview_area}>
          <PreviewArea 
            markdown={markdown} /> 
        </div>
      </div>
      </>
    );
  }
}
export default MarkdownEditor;