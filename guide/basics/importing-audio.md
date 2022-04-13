# Importing Audio
To help you animate, and to make rendering easier, MMD allows you to import .WAV files to use as audio in your video.

The difficulty with this, however, is that it *only* supports .WAV files. Since .WAV files are very large compared to things such as MP3s, they are not as
commonly used.

For this we can use a free utility called [Tenacity](https://tenacityaudio.org/) (Audacity also works, although it is [not recommended](https://github.com/tenacityteam/tenacity#motivation) due to 
licensing and privacy concerns).

Simply download either the [64-bit](https://nightly.link/tenacityteam/tenacity/workflows/cmake_build/master/Tenacity_windows-server-2019-amd64-x64_windows-ninja_2027403619_.zip) or 
[32-bit](https://nightly.link/tenacityteam/tenacity/workflows/cmake_build/master/Tenacity_windows-server-2019-x86-x86_windows-ninja_2027403619_.zip) version of Tenacity and extract the ZIP file.

Then, run the EXE file to install it.

Once opening, you'll be greeted with the following interface:

![Tenacity UI](/images/basics/import-audio-tenacity-ui.png)

From the file dropdown menu, select "Import" then "Audio..."

![Tenacity Dropdown](/images/basics/import-audio-tenacity-dropdown.png)

After you've selected a file, it will appear in the editor. You won't need to do anything to the file unless you wish to add various effects, but for the purpose of this guide we will not cover them.

Go back to the file dropdown menu and select "Export" and "Export as WAV" this time. Once you've named the file, you can close Tenacity.

Finally, in MMD, you can select "file", then "load WAV file" and select the WAV file you exported.

**WARNING: PLEASE CHECK YOUR MMD VOLUME SLIDER BEFORE PLAYING AUDIO AS IT CAN BE VERY LOUD**
