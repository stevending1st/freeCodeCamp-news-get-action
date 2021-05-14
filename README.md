# freeCodeCamp-news-get-action

Language: English | [简体中文](./README-zh-cn.md)

### Introduction

Automatically generate Markdown files based on the webpages of articles on freeCodeCamp's news site. You can [submit an issue on GitHub](#submit-an-issue) to automatically generate a Markdown file.

#### Project structure

```
news-translate
│  package.json
│  README.md
│
|-.github
│  |-ISSUE_TEMPLATE
│  │   AutoGenerateMarkdown.md  /** Automatically generate Markdown issue template **/
│
|-chinese
│  │
│  |-articles  /** The folder where the generated markdown files are stored **/
│
|-node_modules
│
|-script
   |-toMarkdown
      |  index.js  /** Entry file of the script **/
      |  README.md
      |  toMarkdownConstant.js  /** Configuration file **/
      |  utilities.js  /** Function library file **/
      |
      |-__tests__
         utilities.test.js  /** test file **/
```

---

<h3 id="Usage">Usage</h3>

Add the following step your job.

```yml
- uses: stevending1st/freeCodeCamp-news-get-action@main
  with:
    newsLink: '${{ github.event.issue.Body }}'
```

The following is an extended example with all possible options available for this Action.

```yml
- uses: stevending1st/freeCodeCamp-news-get-action@main
  with:
    # A string in a specific format that contains a link to freeCodeCamp News
    # format: "原文网址：[原文标题](https://www.freecodecamp.org/news/xxxxxxx/"
    newsLink: '${{ github.event.issue.Body }}'
    # Path of the generated MarkDown file
    # Relative path relative to the root folder
    markDownFilePath: './chinese/articles/'
```

<h4 id="submit-an-issue">Run the script by the issue of GitHub</h4>

**Issues** >> **New issue** >> Fill in the title and description of the issue >> **Submit new issue**

#### Description:
```
- 原文网址：[原文标题](https://www.freecodecamp.org/news/路由/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/文章文件名称.md
```
Replace `原文标题` with the original title. And replace `路由` and `文章文件名称` with the route of the article.

#### e.g.
If the URL of an article is `https://www.freecodecamp.org/news/Example/`, and its title is `Example Title`.

*Description:*
```
- 原文网址：[Example Title](https://www.freecodecamp.org/news/Example/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/Example.md
```

If you want to confirm whether the script is executed successfully, you can check the execution result of **Actions**, or check the existence of the file at the location you set in the option `markDownFilePath`. If you do not configure the option `markDownFilePath`, the file is generated in the current path by default.

If the script execution **fails**, you need to confirm the problem, solve them, and post a **new issue** according to the previous steps. In the **Action log**, The [*Common Error Messages*](#CommonErrorMessages) will give you some reliable tips. 

---

<h3 id="CommonErrorMessages">Common Error Messages</h3>

- **No parameters were found. Please confirm that the description of the issue has been entered.**
  The description of the issue is empty, please fill in the content according to the template.
- **The route to the article is not matched. Please confirm that the URL is correct.**
  In the description of the issue, you only need to replace `原文标题`, `路由` and `文章文件名称`. And please keep other characters.
- **There is one file with the same name exists.Please check if the article has been added.**
  There is a file with the same name under the folder `./chinese/articles`.
- **The DOM of the website has been modified, or there is a problem with loading, please confirm.**
  The DOM structure of the website may be changed and the script needs to be modified.

---

## Contributing guide

Please go to the [contributing guide](CONTRIBUTING.md).

---

### License

- The computer software is licensed under the [BSD-3-Clause](LICENSE.md) license.
