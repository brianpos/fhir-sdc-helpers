import extensionHelpers from "fhir-extension-helpers";

/** Helper methods  */
export namespace structuredDataCapture {
    /* Extension URLs used in the Structure Data Capture IG */

    // ----------------------------------------------------------------------
    // markdown
    // markdown(0..1)
    // This is an equivalent of the string on which the extension is sent, but includes additional markdown (see documentation about [markdown](datatypes.html#markdown). Note that using HTML  [xhtml](extension-rendering-xhtml.html) can allow for greater precision of display.
    export const exturl_Markdown = "http://hl7.org/fhir/StructureDefinition/rendering-markdown";

    export function getMarkdown(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionMarkdownValue(element, exturl_Markdown);
    }

    export function setMarkdown(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_Markdown, valueMarkdown: value });
    }

    // ----------------------------------------------------------------------
    // Variable
    // Expression(0..*)
    // Variable specifying a logic to generate a variable for use in subsequent logic.  The name of the variable will be added to FHIRPath's context when processing descendants of the element that contains this extension.
    export const exturl_Variable = "http://hl7.org/fhir/StructureDefinition/variable";

    export function getVariable(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_Variable);
    }

    export function getVariables(element: fhir4.Element | undefined): fhir4.Expression[] | undefined {
        return extensionHelpers.getExtensionExpressionValues(element, exturl_Variable);
    }

    export function setVariable(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_Variable, valueExpression: value });
    }

    export function addVariable(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.addExtension(element, { url: exturl_Variable, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // replaces
    // canonical(0..*)
    // Indicates a resource that this resource is replacing.
    export const exturl_Replaces = "http://hl7.org/fhir/StructureDefinition/replaces";

    export function getReplaces(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCanonicalValue(element, exturl_Replaces);
    }

    export function getReplacess(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCanonicalValues(element, exturl_Replaces);
    }

    export function setReplaces(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_Replaces, valueCanonical: value });
    }

    export function addReplaces(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_Replaces, valueCanonical: value });
    }

    // ----------------------------------------------------------------------
    // regex
    // string(0..1)
    // A regular expression that defines the syntax for the data element to be considered valid.
    export const exturl_Regex = "http://hl7.org/fhir/StructureDefinition/regex";

    export function getRegex(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_Regex);
    }

    export function setRegex(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_Regex, valueString: value });
    }

    // ----------------------------------------------------------------------
    // usageMode
    // code(0..1)
    // Identifies that the specified element should only appear in certain "modes" of operation.
    export const exturl_UsageMode = "http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode";

    export function getUsageMode(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_UsageMode);
    }

    export function setUsageMode(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_UsageMode, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // Launch context resources
    // (0..*)
    // Resources that provide context for form processing logic (pre-population, flow-control, drop-down selection, etc.) when creating/displaying/editing a QuestionnaireResponse.
    export const exturl_LaunchContextExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext";

    // ----------------------------------------------------------------------
    // Answer Expression
    // Expression(0..1)
    // An expression (FHIRPath, CQL or FHIR Query) that resolves to a list of permitted answers for the question item or that establishes context for a group item.  The user may select from among the list to choose answers for the question.
    export const exturl_AnswerExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression";

    export function getAnswerExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_AnswerExpressionExtension);
    }

    export function setAnswerExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_AnswerExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // Item population context
    // Expression(0..1)
    // Specifies a query that identifies the resource (or set of resources for a repeating item) that should be used to populate this Questionnaire or Questionnaire.item on initial population.
    export const exturl_ItemPopulationContextExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext";

    export function getItemPopulationContextExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_ItemPopulationContextExtension);
    }

    export function setItemPopulationContextExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_ItemPopulationContextExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // unitValueSet
    // canonical(0..1)
    // A set of units that the user may choose when providing a quantity value.
    export const exturl_UnitValueSet = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet";

    export function getUnitValueSet(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCanonicalValue(element, exturl_UnitValueSet);
    }

    export function setUnitValueSet(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_UnitValueSet, valueCanonical: value });
    }

    // ----------------------------------------------------------------------
    // unitOption
    // Coding(0..*)
    // A unit that the user may choose when providing a quantity value.
    export const exturl_UnitOption = "http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption";

    export function getUnitOption(element: fhir4.Element | undefined): fhir4.Coding | undefined {
        return extensionHelpers.getExtensionCodingValue(element, exturl_UnitOption);
    }

    export function getUnitOptions(element: fhir4.Element | undefined): fhir4.Coding[] | undefined {
        return extensionHelpers.getExtensionCodingValues(element, exturl_UnitOption);
    }

    export function setUnitOption(element: fhir4.Element, value: fhir4.Coding) {
        return extensionHelpers.setExtension(element, { url: exturl_UnitOption, valueCoding: value });
    }

    export function addUnitOption(element: fhir4.Element, value: fhir4.Coding) {
        return extensionHelpers.addExtension(element, { url: exturl_UnitOption, valueCoding: value });
    }

    // ----------------------------------------------------------------------
    // Item extraction context
    // Expression(0..1)
    // Specifies a query that identifies the resource (or set of resources for a repeating item)  to be extracted from this item once the QuestionnaireResponse is complete.
    export const exturl_ItemExtractionContextExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemExtractionContext";

    export function getItemExtractionContextExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_ItemExtractionContextExtension);
    }

    export function setItemExtractionContextExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_ItemExtractionContextExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // style
    // string(0..1)
    // Identifies how the specified element should be rendered when displayed.
    export const exturl_Style = "http://hl7.org/fhir/StructureDefinition/rendering-style";

    export function getStyle(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_Style);
    }

    export function setStyle(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_Style, valueString: value });
    }

    // ----------------------------------------------------------------------
    // xhtml
    // string(0..1)
    // This is an equivalent of the string on which the extension is sent, but includes additional XHTML markup, such as bold, italics, styles, tables, etc. Existing [restrictions on XHTML content](narrative.html#security) apply. Note that using [markdown](extension-rendering-markdown.html) allows for greater flexibility of display.
    export const exturl_Xhtml = "http://hl7.org/fhir/StructureDefinition/rendering-xhtml";

    export function getXhtml(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_Xhtml);
    }

    export function setXhtml(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_Xhtml, valueString: value });
    }

    // ----------------------------------------------------------------------
    // Is subject?
    // boolean(0..1)
    // If present and true, indicates that the item establishes a different subject for the group in a response.
    export const exturl_IsQuestionnaireSubjectExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-isSubject";

    export function getIsQuestionnaireSubjectExtension(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_IsQuestionnaireSubjectExtension);
    }

    export function setIsQuestionnaireSubjectExtension(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_IsQuestionnaireSubjectExtension, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // unit
    // Coding(0..1)
    // Provides a computable unit of measure associated with numeric questions to support subsequent computation on responses. This is for use on items of type integer and decimal, and it's purpose is to support converting the integer or decimal answer into a Quantity when extracting the data into a resource.
    export const exturl_Unit = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit";

    export function getUnit(element: fhir4.Element | undefined): fhir4.Coding | undefined {
        return extensionHelpers.getExtensionCodingValue(element, exturl_Unit);
    }

    export function setUnit(element: fhir4.Element, value: fhir4.Coding) {
        return extensionHelpers.setExtension(element, { url: exturl_Unit, valueCoding: value });
    }

    // ----------------------------------------------------------------------
    // initial.exists().not()
    // Expression(0..1)
    // Initial value for a question answer as determined by an evaluated expression.
    export const exturl_InitialExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression";

    export function getInitialExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_InitialExpressionExtension);
    }

    export function setInitialExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_InitialExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // optionExclusive
    // boolean(0..1)
    // If true, indicates that if this answerOption is selected, no other possible answers may be selected, even if the item is a repeating question.
    export const exturl_OptionExclusive = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionExclusive";

    export function getOptionExclusive(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_OptionExclusive);
    }

    export function setOptionExclusive(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_OptionExclusive, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // supportLink
    // uri(0..*)
    // A URL that resolves to additional supporting information or guidance related to the question.
    export const exturl_SupportLink = "http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink";

    export function getSupportLink(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUriValue(element, exturl_SupportLink);
    }

    export function getSupportLinks(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionUriValues(element, exturl_SupportLink);
    }

    export function setSupportLink(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_SupportLink, valueUri: value });
    }

    export function addSupportLink(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_SupportLink, valueUri: value });
    }

    // ----------------------------------------------------------------------
    // Endpoint
    // uri(0..*)
    // The base URL for the server to which questionnaire response associated with this questionnaire should be submitted.
    export const exturl_EndpointExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-endpoint";

    export function getEndpointExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUriValue(element, exturl_EndpointExtension);
    }

    export function getEndpointExtensions(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionUriValues(element, exturl_EndpointExtension);
    }

    export function setEndpointExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_EndpointExtension, valueUri: value });
    }

    export function addEndpointExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_EndpointExtension, valueUri: value });
    }

    // ----------------------------------------------------------------------
    // minOccurs
    // integer(0..1)
    // The minimum number of times the group must appear, or the minimum number of answers for a question - when greater than 1.
    export const exturl_MinOccurs = "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs";

    export function getMinOccurs(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MinOccurs);
    }

    export function setMinOccurs(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MinOccurs, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // styleSensitive
    // boolean(0..1)
    // Indicates that the style extensions (style, markdown and xhtml) in this resource instance are essential to the interpretation of the instance and that systems that are not capable of rendering using those extensions should not be used to render the resource.
    export const exturl_StyleSensitive = "http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive";

    export function getStyleSensitive(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_StyleSensitive);
    }

    export function setStyleSensitive(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_StyleSensitive, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // Entry mode
    // code(0..1)
    // Indicates how questions within the questionnaire should be presented to the end-user.  Specifically, differentiates whether the questions should be displayed one-at-a-time with no ability to adjust prior entries; one-at-a-time or continuously expanding where all questions up to the current question can be looked at and edited, or random, where all questions can be seen and the questions can be filled out in any order desired.
    export const exturl_EntryMode = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode";

    export function getEntryMode(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_EntryMode);
    }

    export function setEntryMode(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_EntryMode, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // maxOccurs
    // integer(0..1)
    // The maximum number of times the group must appear, or the maximum number of answers for a question - when greater than 1 and not unlimited.
    export const exturl_MaxOccurs = "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs";

    export function getMaxOccurs(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MaxOccurs);
    }

    export function setMaxOccurs(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxOccurs, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // sliderStepValue
    // integer(0..1)
    // For slider-based controls, indicates the step size to use when toggling the control up or down.
    export const exturl_SliderStepValue = "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue";

    export function getSliderStepValue(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_SliderStepValue);
    }

    export function setSliderStepValue(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_SliderStepValue, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // Performer type
    // code(0..*)
    // Indicates the types of resources that can record answers to a Questionnaire. Open Issue: Should this extension be moved to core?
    export const exturl_PerformerTypeExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-performerType";

    export function getPerformerTypeExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_PerformerTypeExtension);
    }

    export function getPerformerTypeExtensions(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCodeValues(element, exturl_PerformerTypeExtension);
    }

    export function setPerformerTypeExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_PerformerTypeExtension, valueCode: value });
    }

    export function addPerformerTypeExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_PerformerTypeExtension, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // Enable when?
    // Expression(0..1)
    // An expression that returns a boolean value for whether to enable the item.
    export const exturl_EnableWhenExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression";

    export function getEnableWhenExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_EnableWhenExpressionExtension);
    }

    export function setEnableWhenExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_EnableWhenExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // minValue
    // date(0..1) - date, dateTime, time, decimal, integer
    // The inclusive lower bound on the range of allowed values for the data element.
    export const exturl_MinValue = "http://hl7.org/fhir/StructureDefinition/minValue";

    export function getMinValueAsDate(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionDateValue(element, exturl_MinValue);
    }

    export function setMinValueAsDate(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MinValue, valueDate: value });
    }

    export function getMinValueAsDateTime(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionDateTimeValue(element, exturl_MinValue);
    }

    export function setMinValueAsDateTime(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MinValue, valueDateTime: value });
    }

    export function getMinValueAsTime(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionTimeValue(element, exturl_MinValue);
    }

    export function setMinValueAsTime(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MinValue, valueTime: value });
    }

    export function getMinValueAsDecimal(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionDecimalValue(element, exturl_MinValue);
    }

    export function setMinValueAsDecimal(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MinValue, valueDecimal: value });
    }

    export function getMinValueAsInteger(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MinValue);
    }

    export function setMinValueAsInteger(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MinValue, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // Calculated expression
    // Expression(0..1)
    // Calculated value for a question answer as determined by an evaluated expression.
    export const exturl_CalculatedExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression";

    export function getCalculatedExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_CalculatedExpressionExtension);
    }

    export function setCalculatedExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_CalculatedExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // Short text
    // string(0..1)
    // The short text for the item.
    export const exturl_ShortTextExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText";

    export function getShortTextExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_ShortTextExtension);
    }

    export function setShortTextExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_ShortTextExtension, valueString: value });
    }

    // ----------------------------------------------------------------------
    // Preferred terminology server
    // url(0..*)
    // Indicates the terminology server(s) that are known to be capable of returning and potentially expanding the value set(s) associated with the whole questionnaire or a particular group or question within the questionnaire (depending on where the extension appears).  If a full URL is not provided AND the requested query is a terminology operation (e.g. $lookup or $expand) the client SHOULD execute the operation against the preferredTerminologyServer rather than the local repository.
    export const exturl_PreferredTerminologyServerFromSDC = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-preferredTerminologyServer";

    export function getPreferredTerminologyServerFromSDC(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUrlValue(element, exturl_PreferredTerminologyServerFromSDC);
    }

    export function getPreferredTerminologyServerFromSDCs(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionUrlValues(element, exturl_PreferredTerminologyServerFromSDC);
    }

    export function setPreferredTerminologyServerFromSDC(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_PreferredTerminologyServerFromSDC, valueUrl: value });
    }

    export function addPreferredTerminologyServerFromSDC(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_PreferredTerminologyServerFromSDC, valueUrl: value });
    }

    // ----------------------------------------------------------------------
    // Optional Display?
    // boolean(0..1)
    // If set to true, it means that the system displaying the form (or the individual encoding the form for data capture) can choose to omit the item from display to the user.
    export const exturl_OptionalDisplayExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-optionalDisplay";

    export function getOptionalDisplayExtension(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_OptionalDisplayExtension);
    }

    export function setOptionalDisplayExtension(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_OptionalDisplayExtension, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // itemControl
    // CodeableConcept(0..1)
    // The type of data entry control or structure that should be used to render the item.
    export const exturl_ItemControl = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl";

    export function getItemControl(element: fhir4.Element | undefined): fhir4.CodeableConcept | undefined {
        return extensionHelpers.getExtensionCodeableConceptValue(element, exturl_ItemControl);
    }

    export function setItemControl(element: fhir4.Element, value: fhir4.CodeableConcept) {
        return extensionHelpers.setExtension(element, { url: exturl_ItemControl, valueCodeableConcept: value });
    }

    // ----------------------------------------------------------------------
    // Answer Context Expression
    // Expression(0..*)
    // A FHIR Query that resolves to one or more resources that can be displayed to the user to help provide context for answering a question. For example, if the question is "Has the patient discussed this issue on any visits in the past year?", the contextExpression might return the set of patient's encounters for the prior 12 month period to help jog the practitioner's memory.
    export const exturl_ContextExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-contextExpression";

    export function getContextExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_ContextExpressionExtension);
    }

    export function getContextExpressionExtensions(element: fhir4.Element | undefined): fhir4.Expression[] | undefined {
        return extensionHelpers.getExtensionExpressionValues(element, exturl_ContextExpressionExtension);
    }

    export function setContextExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_ContextExpressionExtension, valueExpression: value });
    }

    export function addContextExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.addExtension(element, { url: exturl_ContextExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // signatureRequired
    // CodeableConcept(0..*)
    // Indicates that a signature (of the specified type) is needed when completing the QuestionnaireResponse.
    export const exturl_SignatureRequired = "http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired";

    export function getSignatureRequired(element: fhir4.Element | undefined): fhir4.CodeableConcept | undefined {
        return extensionHelpers.getExtensionCodeableConceptValue(element, exturl_SignatureRequired);
    }

    export function getSignatureRequireds(element: fhir4.Element | undefined): fhir4.CodeableConcept[] | undefined {
        return extensionHelpers.getExtensionCodeableConceptValues(element, exturl_SignatureRequired);
    }

    export function setSignatureRequired(element: fhir4.Element, value: fhir4.CodeableConcept) {
        return extensionHelpers.setExtension(element, { url: exturl_SignatureRequired, valueCodeableConcept: value });
    }

    export function addSignatureRequired(element: fhir4.Element, value: fhir4.CodeableConcept) {
        return extensionHelpers.addExtension(element, { url: exturl_SignatureRequired, valueCodeableConcept: value });
    }

    // ----------------------------------------------------------------------
    // minLength
    // integer(0..1)
    // The minimum number of characters that must be present in the simple data type to be considered a "valid" instance.
    export const exturl_MinLength = "http://hl7.org/fhir/StructureDefinition/minLength";

    export function getMinLength(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MinLength);
    }

    export function setMinLength(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MinLength, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // hidden
    // boolean(0..1)
    // If true, indicates that the extended item should not be displayed to the user.
    export const exturl_Hidden = "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden";

    export function getHidden(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_Hidden);
    }

    export function setHidden(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_Hidden, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // Collapsible
    // code(0..1)
    // Indicates whether the child items of a group or question item is displayed in collapsible form.
    export const exturl_CollapsibleExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-collapsible";

    export function getCollapsibleExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_CollapsibleExtension);
    }

    export function setCollapsibleExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_CollapsibleExtension, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // referenceResource
    // code(0..*)
    // Where the type for a question is "Reference", indicates a type of resource that is permitted.
    export const exturl_ReferenceResource = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource";

    export function getReferenceResource(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_ReferenceResource);
    }

    export function getReferenceResources(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCodeValues(element, exturl_ReferenceResource);
    }

    export function setReferenceResource(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_ReferenceResource, valueCode: value });
    }

    export function addReferenceResource(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_ReferenceResource, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // mimeType
    // code(0..*)
    // Identifies the kind(s) of attachment allowed to be sent for an element.
    export const exturl_MimeType = "http://hl7.org/fhir/StructureDefinition/mimeType";

    export function getMimeType(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_MimeType);
    }

    export function getMimeTypes(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCodeValues(element, exturl_MimeType);
    }

    export function setMimeType(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MimeType, valueCode: value });
    }

    export function addMimeType(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_MimeType, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // Obervation link period
    // Duration(0..1)
    // Indicates the time-period (from 'now') to search for observations that match the Questionnaire.item.code and Questionnaire.subject when pre-populating the QuestionnaireResponse.
    export const exturl_ObservationLinkPeriodExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod";

    export function getObservationLinkPeriodExtension(element: fhir4.Element | undefined): fhir4.Duration | undefined {
        return extensionHelpers.getExtensionDurationValue(element, exturl_ObservationLinkPeriodExtension);
    }

    export function setObservationLinkPeriodExtension(element: fhir4.Element, value: fhir4.Duration) {
        return extensionHelpers.setExtension(element, { url: exturl_ObservationLinkPeriodExtension, valueDuration: value });
    }

    // ----------------------------------------------------------------------
    // Choice constraint
    // code(0..*)
    // Controls what the user is allowed to enter as an answer aside from the answer options provided. NOTE: This extension should be moved to core in R5.
    export const exturl_QuestionnaireChoiceConstraint = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceConstraint";

    export function getQuestionnaireChoiceConstraint(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_QuestionnaireChoiceConstraint);
    }

    export function getQuestionnaireChoiceConstraints(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCodeValues(element, exturl_QuestionnaireChoiceConstraint);
    }

    export function setQuestionnaireChoiceConstraint(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_QuestionnaireChoiceConstraint, valueCode: value });
    }

    export function addQuestionnaireChoiceConstraint(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_QuestionnaireChoiceConstraint, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // Target structure map
    // canonical(0..*)
    // StructureMaps that have QuestionnaireResponses of this Questionnaire as 'source'- i.e. that can be used to create other artifacts from QuestionnaireResponses that are valid against this Questionnaire.
    export const exturl_TargetStructureMapExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap";

    export function getTargetStructureMapExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCanonicalValue(element, exturl_TargetStructureMapExtension);
    }

    export function getTargetStructureMapExtensions(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCanonicalValues(element, exturl_TargetStructureMapExtension);
    }

    export function setTargetStructureMapExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_TargetStructureMapExtension, valueCanonical: value });
    }

    export function addTargetStructureMapExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_TargetStructureMapExtension, valueCanonical: value });
    }

    // ----------------------------------------------------------------------
    // Observation extract
    // boolean(0..1)
    // If true, indicates that the observation-based approach should be used to extract either the particular item (if extension is defined on an individual question or group based on the code present) or all items in the questionnaire (if defined at the questionnaire root and if they have a code present).
    export const exturl_ObservationExtractExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract";

    export function getObservationExtractExtension(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_ObservationExtractExtension);
    }

    export function setObservationExtractExtension(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_ObservationExtractExtension, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // referenceProfile
    // canonical(0..*)
    // Where the type for a question is "Reference", indicates a profile that the resource instances pointed to in answers to this question must be valid against.
    export const exturl_ReferenceProfile = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceProfile";

    export function getReferenceProfile(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCanonicalValue(element, exturl_ReferenceProfile);
    }

    export function getReferenceProfiles(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCanonicalValues(element, exturl_ReferenceProfile);
    }

    export function setReferenceProfile(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_ReferenceProfile, valueCanonical: value });
    }

    export function addReferenceProfile(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_ReferenceProfile, valueCanonical: value });
    }

    // ----------------------------------------------------------------------
    // maxValue
    // date(0..1) - date, dateTime, time, instant, decimal, integer
    // The inclusive upper bound on the range of allowed values for the data element.
    export const exturl_MaxValue = "http://hl7.org/fhir/StructureDefinition/maxValue";

    export function getMaxValueAsDate(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionDateValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsDate(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueDate: value });
    }

    export function getMaxValueAsDateTime(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionDateTimeValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsDateTime(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueDateTime: value });
    }

    export function getMaxValueAsTime(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionTimeValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsTime(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueTime: value });
    }

    export function getMaxValueAsInstant(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionTimeValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsInstant(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueTime: value });
    }

    export function getMaxValueAsDecimal(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionDecimalValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsDecimal(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueDecimal: value });
    }

    export function getMaxValueAsInteger(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MaxValue);
    }

    export function setMaxValueAsInteger(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxValue, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // Source structure map
    // canonical(0..*)
    // StructureMaps that have this QuestionnaireResponses for this Questionnaire as 'target' - i.e. that can be used to create QuestionnaireResponses that are valid against this Questionnaire.
    export const exturl_SourceStructureMapExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-sourceStructureMap";

    export function getSourceStructureMapExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCanonicalValue(element, exturl_SourceStructureMapExtension);
    }

    export function getSourceStructureMapExtensions(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionCanonicalValues(element, exturl_SourceStructureMapExtension);
    }

    export function setSourceStructureMapExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_SourceStructureMapExtension, valueCanonical: value });
    }

    export function addSourceStructureMapExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_SourceStructureMapExtension, valueCanonical: value });
    }

    // ----------------------------------------------------------------------
    // constraint
    // (0..*)
    // An invariant that must be satisfied before responses to the questionnaire can be considered "complete".
    export const exturl_Constraint = "http://hl7.org/fhir/StructureDefinition/questionnaire-constraint";

    // ----------------------------------------------------------------------
    // maxSize
    // decimal(0..1)
    // For attachment answers, indicates the maximum size an attachment can be.
    export const exturl_MaxSize = "http://hl7.org/fhir/StructureDefinition/maxSize";

    export function getMaxSize(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionDecimalValue(element, exturl_MaxSize);
    }

    export function setMaxSize(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxSize, valueDecimal: value });
    }

    // ----------------------------------------------------------------------
    // referenceFilter
    // string(0..1)
    // Identifies a filter to apply when looking up candidate answers for the question.
    export const exturl_ReferenceFilter = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceFilter";

    export function getReferenceFilter(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_ReferenceFilter);
    }

    export function setReferenceFilter(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_ReferenceFilter, valueString: value });
    }

    // ----------------------------------------------------------------------
    // Min quantity
    // Quantity(0..1)
    // The inclusive lower bound on the range of allowed values for a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular minValue extension once there are better capabilities around defining conformance expectations regarding extensions.
    export const exturl_MinQuantityExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-minQuantity";

    export function getMinQuantityExtension(element: fhir4.Element | undefined): fhir4.Quantity | undefined {
        return extensionHelpers.getExtensionQuantityValue(element, exturl_MinQuantityExtension);
    }

    export function setMinQuantityExtension(element: fhir4.Element, value: fhir4.Quantity) {
        return extensionHelpers.setExtension(element, { url: exturl_MinQuantityExtension, valueQuantity: value });
    }

    // ----------------------------------------------------------------------
    // Source queries for population mapping
    // Reference(0..1)
    // A Batch Bundle containing a set of queries that should be executed to provide source data for a StructureMap to create a populated QuestionnaireResponse.
    export const exturl_SourceQueriesExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-sourceQueries";

    export function getSourceQueriesExtension(element: fhir4.Element | undefined): fhir4.Reference | undefined {
        return extensionHelpers.getExtensionReferenceValue(element, exturl_SourceQueriesExtension);
    }

    export function setSourceQueriesExtension(element: fhir4.Element, value: fhir4.Reference) {
        return extensionHelpers.setExtension(element, { url: exturl_SourceQueriesExtension, valueReference: value });
    }

    // ----------------------------------------------------------------------
    // Is subject?
    // boolean(0..1)
    // If present and true, indicates that the item indicates a different subject for this group.
    export const exturl_IsSubjectExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse-isSubject";

    export function getIsSubjectExtension(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_IsSubjectExtension);
    }

    export function setIsSubjectExtension(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_IsSubjectExtension, valueBoolean: value });
    }

    // ----------------------------------------------------------------------
    // maxDecimalPlaces
    // integer(0..1)
    // Identifies the maximum number of decimal places that may be specified for the data element.
    export const exturl_MaxDecimalPlaces = "http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces";

    export function getMaxDecimalPlaces(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionIntegerValue(element, exturl_MaxDecimalPlaces);
    }

    export function setMaxDecimalPlaces(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxDecimalPlaces, valueInteger: value });
    }

    // ----------------------------------------------------------------------
    // Choice column
    // (0..*)
    // Provides guidelines for rendering multi-column choices.  I.e. when displaying a list of codes (for `choice` or `open-choice` items) or a list of resources (for `reference` items), this extension allows the drop-down to have multiple columns.  For codes, the author can pick additional code system properties to display - such as alternate display names strength or form for drug codes, etc.  For references, the author can choose particular columns from the resource (e.g. first name, last name, specialty, address).
    export const exturl_ChoiceColumnExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn";

    // ----------------------------------------------------------------------
    // Max quantity
    // Quantity(0..1)
    // The inclusive upper bound on the range of allowed values for  a 'quantity' type question.  Open Issue: Revisit whether this should be folded into the regular maxValue extension once there are better capabilities around defining conformance expectations regarding extensions.
    export const exturl_MaxQuantityExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-maxQuantity";

    export function getMaxQuantityExtension(element: fhir4.Element | undefined): fhir4.Quantity | undefined {
        return extensionHelpers.getExtensionQuantityValue(element, exturl_MaxQuantityExtension);
    }

    export function setMaxQuantityExtension(element: fhir4.Element, value: fhir4.Quantity) {
        return extensionHelpers.setExtension(element, { url: exturl_MaxQuantityExtension, valueQuantity: value });
    }

    // ----------------------------------------------------------------------
    // choiceOrientation
    // code(0..1)
    // Identifies the desired orientation when rendering a list of choices (typically radio-box or check-box lists).
    export const exturl_ChoiceOrientation = "http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation";

    export function getChoiceOrientation(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionCodeValue(element, exturl_ChoiceOrientation);
    }

    export function setChoiceOrientation(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_ChoiceOrientation, valueCode: value });
    }

    // ----------------------------------------------------------------------
    // Design Note
    // markdown(0..1)
    // Information captured by the author/maintainer of the questionnaire for development purposes, not intended to be seen by users.
    export const exturl_DesignNote = "http://hl7.org/fhir/StructureDefinition/designNote";

    export function getDesignNote(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionMarkdownValue(element, exturl_DesignNote);
    }

    export function setDesignNote(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_DesignNote, valueMarkdown: value });
    }

    // ----------------------------------------------------------------------
    // Questionnaire adaptive
    // boolean(0..*) - boolean, url
    // Marks a questionnaire as being adaptive.  Value can either be a boolean (if true, indicates adaptive) or a URL for the base URL of a server that can perform the nextQuestion operation for this particular questionnaire.
    export const exturl_QuestionnaireAdaptiveExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive";

    export function getQuestionnaireAdaptiveExtensionAsBoolean(element: fhir4.Element | undefined): boolean | undefined {
        return extensionHelpers.getExtensionBooleanValue(element, exturl_QuestionnaireAdaptiveExtension);
    }

    export function setQuestionnaireAdaptiveExtensionAsBoolean(element: fhir4.Element, value: boolean) {
        return extensionHelpers.setExtension(element, { url: exturl_QuestionnaireAdaptiveExtension, valueBoolean: value });
    }

    export function getQuestionnaireAdaptiveExtensionAsUrl(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUrlValue(element, exturl_QuestionnaireAdaptiveExtension);
    }

    export function getQuestionnaireAdaptiveExtensionsAsUrl(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionUrlValues(element, exturl_QuestionnaireAdaptiveExtension);
    }

    export function setQuestionnaireAdaptiveExtensionAsUrl(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_QuestionnaireAdaptiveExtension, valueUrl: value });
    }

    export function addQuestionnaireAdaptiveExtensionAsUrl(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_QuestionnaireAdaptiveExtension, valueUrl: value });
    }

    // ----------------------------------------------------------------------
    // entryFormat
    // string(0..1)
    // Additional instructions for the user to guide their input (i.e. a human readable version of a regular expression like "nnn-nnn-nnn"). In most UIs this is the placeholder (or 'ghost') text placed directly inside the edit controls and that disappear when the control gets the focus.
    export const exturl_EntryFormat = "http://hl7.org/fhir/StructureDefinition/entryFormat";

    export function getEntryFormat(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_EntryFormat);
    }

    export function setEntryFormat(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_EntryFormat, valueString: value });
    }

    // ----------------------------------------------------------------------
    // Candidate Answers Expression
    // Expression(0..1)
    // A FHIRPath or CQL expression, or FHIR Query that resolves to a list of candidate answers for the question item or that establishes context for a group item.  The user may select from among the candidates to choose answers for the question.
    export const exturl_CandidateExpressionExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-candidateExpression";

    export function getCandidateExpressionExtension(element: fhir4.Element | undefined): fhir4.Expression | undefined {
        return extensionHelpers.getExtensionExpressionValue(element, exturl_CandidateExpressionExtension);
    }

    export function setCandidateExpressionExtension(element: fhir4.Element, value: fhir4.Expression) {
        return extensionHelpers.setExtension(element, { url: exturl_CandidateExpressionExtension, valueExpression: value });
    }

    // ----------------------------------------------------------------------
    // Ordinal Value
    // decimal(0..1)
    // A numeric value that allows the comparison (less than, greater than) or other numerical 
    // manipulation of a concept (e.g. Adding up components of a score). Scores are usually a whole number, but occasionally decimals are encountered in scores.
    export const exturl_OrdinalValue = "http://hl7.org/fhir/StructureDefinition/ordinalValue";

    export function getOrdinalValue(element: fhir4.Element | undefined): number | undefined {
        return extensionHelpers.getExtensionDecimalValue(element, exturl_OrdinalValue);
    }

    export function setOrdinalValue(element: fhir4.Element, value: number) {
        return extensionHelpers.setExtension(element, { url: exturl_OrdinalValue, valueDecimal: value });
    }

    // ----------------------------------------------------------------------
    // Lookup questionnaire
    // uri(0..1)
    // For items of type reference, the reference can be populated either by picking an existing entity or by creating a new one.  In the latter case, this Questionnaire allows specifying the Questionnaire to use in creating the target instance.  This can be direct (if the Reference is to a Questionnaire) or indirect via mapping if the Reference is to some other sort of resource.
    export const exturl_LookupQuestionnaireExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-lookupQuestionnaire";

    export function getLookupQuestionnaireExtension(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUriValue(element, exturl_LookupQuestionnaireExtension);
    }

    export function setLookupQuestionnaireExtension(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_LookupQuestionnaireExtension, valueUri: value });
    }

    // ----------------------------------------------------------------------
    // optionPrefix
    // string(0..1)
    // The label to list in front of a code when presenting a list of possible values in a questionnaire-like fashion.
    export const exturl_OptionPrefix = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix";

    export function getOptionPrefix(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionStringValue(element, exturl_OptionPrefix);
    }

    export function setOptionPrefix(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_OptionPrefix, valueString: value });
    }

    // ----------------------------------------------------------------------
    // Width of column
    // Quantity(0..1)
    // When used with an item control that causes the question to appear as a column in a table, indicates the width to give to the column for this question.
    export const exturl_WidthExtension = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-width";

    export function getWidthExtension(element: fhir4.Element | undefined): fhir4.Quantity | undefined {
        return extensionHelpers.getExtensionQuantityValue(element, exturl_WidthExtension);
    }

    export function setWidthExtension(element: fhir4.Element, value: fhir4.Quantity) {
        return extensionHelpers.setExtension(element, { url: exturl_WidthExtension, valueQuantity: value });
    }

    // ----------------------------------------------------------------------
    // Preferred terminology server
    // url(0..*)
    // Indicates the terminology server(s) that are known to be capable of returning and potentially expanding the value set(s) associated with the whole questionnaire or a particular group or question within the questionnaire (depending on where the extension appears).  If a full URL is not provided AND the requested query is a terminology operation (e.g. $lookup or $expand) the client SHOULD execute the operation against the preferredTerminologyServer rather than the local repository.
    export const exturl_PreferredTerminologyServer = "http://hl7.org/fhir/StructureDefinition/terminology-server";

    export function getPreferredTerminologyServer(element: fhir4.Element | undefined): string | undefined {
        return extensionHelpers.getExtensionUrlValue(element, exturl_PreferredTerminologyServer);
    }

    export function getPreferredTerminologyServers(element: fhir4.Element | undefined): string[] | undefined {
        return extensionHelpers.getExtensionUrlValues(element, exturl_PreferredTerminologyServer);
    }

    export function setPreferredTerminologyServer(element: fhir4.Element, value: string) {
        return extensionHelpers.setExtension(element, { url: exturl_PreferredTerminologyServer, valueUrl: value });
    }

    export function addPreferredTerminologyServer(element: fhir4.Element, value: string) {
        return extensionHelpers.addExtension(element, { url: exturl_PreferredTerminologyServer, valueUrl: value });
    }
}
