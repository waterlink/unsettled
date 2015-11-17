# Unsettled

GAS application for managing who owes how much to whom. Most notable usecase is
when friends pay for each other and after have troubles settling it down, this
app will help them to settle it down, hereby the name: Unsettled.

*GAS stands for Google Apps Script*

## Remark

This application is not a real product or anything. More like a project to have
fun and solve some interesting challenges that arise from making this
application on GAS platform.

## Planned features

Technical:
- Test Driven Development
- Continuous integration/delivery

Product:
- Ability to see all the information in a Google Spreadsheet
- Ability to enter data through mobile website
- Ability to share relevant data between friends

## Development

First go to https://script.google.com - this will create new google apps
script.

You will need `gapps` tool. Installation and configuration instructions can be
found here: https://github.com/danthareja/node-google-apps-script

After doing `gapps auth /path/to/client-secret.json` you do not need to do
`gapps init`, you want just copy example config:

```bash
cp gapps.config.json.example gapps.config.json
```

And edit `fileId` in `gapps.config.json` to be equal to the google drive ID of
your google apps script.

After that you should be able to run `gapps upload`, which should update code
in `script.google.com` web UI. (May require page reload or file
closing/opening).

At this point you can proceed with making changes to the code.

## Contributing

1. Fork it
2. Make a feature branch, commit and push to Github
3. Create a Pull Request

## Contributors

- [waterlink](https://github.com/waterlink) - Oleksii Fedorov, creator, maintainer
