# Healthicons - CSS

Import the CSS File:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/stnrd/healthicons@main/css/healthicons.css" />
```

Here is an example in HTML:

```html
<i class="healthicons-filled-blood-bag"></i>
```

The class must always be "healthicons-" following by the icon type(filled, outline). You can find the names of the icons [here](https://healthicons.org/).

The icons are set to be displayed as inline-block and will use the current font size as their default. To modify this behavior, you can make changes to the ::before styles of the element where the icons are applied as a mask.
