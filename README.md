# JavaScript30-wesbos
### About

30 day Vanilla JavaScript Challenge from Wes Bos!

All videos, exercises, and coded solutions can be found on Wes Bos's [JavaScript30 Website](https://JavaScript30.com)

Here is the original [GitHub repo](https://github.com/wesbos/JavaScript30)

Here is the [YouTube playlist](https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH) that accompanies the challenge

<br>

### How to download files/folders from GitHub

using **Bash** shell

without forking/cloning

<br>

use `svn` (subversion) which has many other options other than `export`

use `svn help` to learn more

<br>

first let's see what's in the remote with..

`svn ls URL.git`

for example..

`svn ls https://github.com/parktart/matrix-GPT.git`

<br>

from there we can choose a branch for example..

`svn ls https://github.com/parktart/matrix-GPT.git/trunk`

<br>

and continue to find the file/folder we want using `ls`, then use..

`svn export <path>` to download the file/folder

<br>

if the file/folder is not on trunk (main)..

`svn export URL.git/branches/<branch_name>/<folder>`

<br>

for a specific tagged commit..

`svn export URL.git/tags/<tag_name>/<folder>`

<br>

**note** if there are special characters (like spaces) in the path then you must replace them with the correct URL encoding for example replace a space with `%20` (see the folder/file URL)



