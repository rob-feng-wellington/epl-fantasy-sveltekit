<script lang="ts">
    import "carbon-components-svelte/css/g100.css";
    import "@carbon/charts/styles.css";
    import { Button, Accordion, AccordionItem } from "carbon-components-svelte";
    import { Airplane } from "carbon-pictograms-svelte";
    import { AreaChart } from "@carbon/charts-svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button>Default</Button>

<Accordion>
    <AccordionItem title="Section 1" open> Content 1 </AccordionItem>
    <AccordionItem title="Section 2"> Content 2 </AccordionItem>
    <AccordionItem title="Section 3"> Content 3 </AccordionItem>
</Accordion>

<Airplane />

<AreaChart
	data={[
	{
		"group": "Dataset 1",
		"date": "2018-12-31T16:00:00.000Z",
		"value": 0
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-05T16:00:00.000Z",
		"value": -37312
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-07T16:00:00.000Z",
		"value": -22392
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-14T16:00:00.000Z",
		"value": -52576
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-18T16:00:00.000Z",
		"value": 20135
	},
	{
		"group": "Dataset 2",
		"date": "2018-12-31T16:00:00.000Z",
		"value": 47263
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-04T16:00:00.000Z",
		"value": 14178
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-07T16:00:00.000Z",
		"value": 23094
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-12T16:00:00.000Z",
		"value": 45281
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-18T16:00:00.000Z",
		"value": -63954
	}
]}
	options={{
	"title": "Area (time series - natural curve)",
	"axes": {
		"bottom": {
			"title": "2019 Annual Sales Figures",
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"mapsTo": "value",
			"scaleType": "linear"
		}
	},
	"curve": "curveNatural",
	"height": "400px"
}}
	/>