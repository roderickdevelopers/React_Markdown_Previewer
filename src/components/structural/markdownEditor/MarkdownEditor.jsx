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
`



    class MarkdownEditor extends React.Component {
        constructor(props) {
          super(props);
          this.updateMarkdown = this.updateMarkdown.bind(this);
          this.clearMarkdown = this.clearMarkdown.bind(this);
          this.resetMarkdown = this.resetMarkdown.bind(this);
          this.state = {
            markdown: placeholder
          };
        }
        
        updateMarkdown(markdown) {
          this.setState({ 
            markdown 
          });
        }
        
        clearMarkdown() {
          this.setState({ 
            markdown: "" 
          });
        }
        
          resetMarkdown() {
          this.setState({ 
            markdown: placeholder 
          });
        }
        
          render() {
          const markdown = this.state.markdown;
          return (
            <>
              <div className={styles.markdown_editor_button_area}>
                <ButtonArea 
                  clearMarkdown={this.clearMarkdown}
                  resetMarkdown={this.resetMarkdown} />
              </div>
              <div className={styles.markdown_editor_text_area}>
                <TextArea 
                  updateMarkdown={this.updateMarkdown}
                  markdown={markdown} />
              </div>
              <div className={styles.markdown_editor_preview_area}>
                <PreviewArea 
                  markdown={markdown}  
                />
              </div>
            </>
          );
        }
      }
    
    
       
      

export default MarkdownEditor;