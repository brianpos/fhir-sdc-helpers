import exHelpers from 'fhir-extension-helpers';
import { structuredDataCapture } from '../structureddatacapture-r4';

test('get/set/clear hidden value', () => {
    let item: fhir4.QuestionnaireItem = { type: 'string', linkId: 's', text: 'Smile' };
    expect(JSON.stringify(item)).toBe('{"type":"string","linkId":"s","text":"Smile"}');

    expect(structuredDataCapture.getHidden(item)).toBe(undefined);

    structuredDataCapture.setHidden(item, true);
    expect(JSON.stringify(item)).toBe('{"type":"string","linkId":"s","text":"Smile",\"extension\":[{\"url\":\"http://hl7.org/fhir/StructureDefinition/questionnaire-hidden\",\"valueBoolean\":true}]}');
    expect(structuredDataCapture.getHidden(item)).toBe(true);

    structuredDataCapture.setHidden(item, false);
    expect(JSON.stringify(item)).toBe('{"type":"string","linkId":"s","text":"Smile",\"extension\":[{\"url\":\"http://hl7.org/fhir/StructureDefinition/questionnaire-hidden\",\"valueBoolean\":false}]}');
    expect(structuredDataCapture.getHidden(item)).toBe(false);

    exHelpers.clearExtension(item, structuredDataCapture.exturl_Hidden);
    expect(JSON.stringify(item)).toBe('{"type":"string","linkId":"s","text":"Smile"}');
    expect(structuredDataCapture.getHidden(item)).toBe(undefined);
})

