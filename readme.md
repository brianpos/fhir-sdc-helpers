| FHIR SDC (Structured Data Capture) Extension Helpers |
|---|

## Introduction ##

This is an unofficial set of helper functions to ease working with the [FHIR R4][r4-spec] [Structured Data Capture][sdc-spec] Extensions in Javascript and TypeScript.

This pacakge leverages the npm pacakge `fhir-extension-helpers` for extension wrangling.

## Example Usage ##
Setting a specific SDC extension value (e.g. hidden)
``` javascript
import structuredDataCapture from 'fhir-sdc-helpers';

var item = { type: 'string', linkId: 's', text: 'Smile' };
structuredDataCapture.setHidden(item, true);
```

Reading a specific extension value
``` javascript
import structuredDataCapture from 'fhir-sdc-helpers';

// This item would usually be read from an existing questionnaire
var item = { type: 'string', linkId: 's', text: 'Smile', extension:[{url:"http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",valueBoolean:true}] };
var hidden = structuredDataCapture.getHidden(item);
console.log(hidden); // this will be a true|false|undefined(if the extension did not exist)
```

Removing a specific SDC extension
``` javascript
import exHelpers from 'fhir-extension-helpers';
import structuredDataCapture from 'fhir-sdc-helpers';

exHelpers.clearExtension(item, structuredDataCapture.exturl_Hidden); // removes the hidden extension from the item
```


## Support ##
TBD - there's not really much here...
For questions and broader discussions, use the FHIR Implementers chat on [Zulip][javascript-zulip].

## Contributing ##
I'm welcoming contributors from the FHIR community!

[javascript-zulip]: https://chat.fhir.org/#narrow/stream/179169-javascript
[r4-spec]: http://www.hl7.org/fhir/r4
[sdc-spec]: http://build.fhir.org/ig/HL7/sdc
