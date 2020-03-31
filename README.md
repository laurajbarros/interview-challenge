# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!


# Laura additional Notes

I. First I was trying to understand the proposal, and then I started breaking down the components by what they could do (the least possible).
At this point I was thinking about the Menu-Item being different inside the menu-builder and inside the MenuPreview, but I understood I could pass the data I wanted display in each case and still use the same component.

So I broke the components as following:
1) App
	1.1) Menu Summary
		1.1.1 Menu Summary Left
		1.1.2 Menu Summary Right
	1.2) Menu Builder
		1.2.1 Menu Items
	1.3) Menu Preview
		1.3.1 Menu Items


II. Next stop was to try to understand which information (state) each components would need. I understood the data needed as following:

a) Items List
b) Selected Items List
c) Count of Selected Items by Menu-Type

From that, I listed which Components would need which info, so:

(1.1) Menu Builder would need (a) Items List
All the other Components would need b) (and its dependable informations c) and d)).

So the state should live in the App (1), but the Items List could be in the Menu Builder.

III. From that I understood which tools/libs I should use.
I didn't like the fact that the state would have to be passed down the summary two times. And also, the updates of Menu items would have to have a handler coming down from the App two times. I needed something to make it simpler and more organized.
So I decided to use Redux, so I could have a more organized flow of data.

IV. Next step was to define the actions:
- Add Item to the Selected Items List (and remove from the Items List)
- Remove Item from Selected Items List (and put it back to the Items List

And then I started to build it :).
