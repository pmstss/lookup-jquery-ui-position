# lookup-jquery-ui-position

Customized version of [jQuery UI](http://jqueryui.com/) position module.
Changes:
- outerWidth/outerHeight are replaced with getBoundingClientRect() width/height to get scaled width/height (1.11.4)
- possibility to provide dimension of target and skip its calculation (useful e.g. for Ranges) (1.11.5)

## Development
```sh
$ git clone https://github.com/pmstss/lookup-jquery-ui-position
$ cd lookup-jquery-ui-position
$ npm install
<edit something>
$ grunt
```

### Versions
2015-08-05: 1.11.4 (based on 1.11.4 jQuery UI)
2015-12-09: 1.11.5 

### License
MIT