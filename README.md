# Common Utilities

This package serves as a lightweight and modular library to supply some commonly used functions that can be imported as needed. The functions chosen in here are based on my professional experience. Each of these are something I've either wrote locally in each project, or from a copy and pasted file between each project.

Each function is written in typescript, and fully unit tested. These are compiled to vanilla JavaScript. During that compilation they become namespaced with the prefix `cu_` to avoid collisions with other functions and libraries that might be in use on your project.

## Function Documentation

- [Debounce](/src/debounce/)
- [Generate Random Hex Color](/src/generate-random-hex-color/)
- [Simple Deep Copy](/src/simple-deep-copy/)

## Contributions

When contributing to this project, please review the project's [Issues](https://github.com/agriffi10/common-utils/issues) page to determine if your idea or bug report has already been captured.

If what you're intending has not been captured, you can make an issue using one of the templates available. This will then be reviewed and tagged appropriately.

Once a feature or bug request has been reviewed it will receive the "read to start tag" and it will be added to the [Common Utils Project Board](https://github.com/users/agriffi10/projects/3/views/1) in the todo column. 

You should start by assigning the issue to yourself from the issues page, and use the create a branch feature from there as well to start. Additionally you may change the status of the ticket on the project board from todo to in progress.

### Branch Naming

Your branch should follow the following convention `type/{ticket-num}-title`. For example `feature/11-document-cookie-functions`. The title of your branch does not need to match the exact ticket title, but should at least do a good job representing it.


If you're planning on making a pull request, please allow us time to review what it is you're working on, and allow any discussions to resolve.
