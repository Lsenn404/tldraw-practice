## Custom Commands

```
For kbds, Shift = !, Alt = ?, Cmd = $, i.e. Cmd+Shift+U is $!u.
```

### Example

```
    <Tldraw
        overrides={{
            actions: (_editor, actions, helpers) => {
                const myCustomAction: TLUiActionItem = {
                    id: 'my-action',
                    label: 'My action',
                    icon: 'circle',
                    kbd: 'u',
                    onSelect(source) {
                        helpers.addToast({ title: `My action was selected from ${source}!` })
                    },
                }

                const newActions: TLUiActionsContextType = {
                    ...actions,
                    'my-action': myCustomAction,
                    delete: {
                        ...actions['delete'],
                        kbd: 'x',
                    },
                }

                return newActions
            },
        }}
    />
```

#### Action Helpers

```
tldraw-practice/packages/tldraw/src/lib/ui/overrides.ts
```

## Ideas

### Practice

```
Work on creating a custom card shape, make 4 types of cards,
- bird creatures,
- artifact myr creatures,
- token merfolk creatures,
- token artifact bird creatures.

Create 4  Actions that will target different aspects
(e.g. only tokens, only birds, only artifacts, only myrs, only creatures)

Use the Store State, also practice editing those types via a tool similar to the one in:
tldraw-practice/apps/examples/src/examples/context-toolbar/ContextToolbar.tsx

Where you can get a UI To edit the values of all selected Cards.
Creature types can just be a string, card types picked from a selectable enum, token is boolean
```

---

### Possible Ways to Implement

```
Create a hook to manage turn state, A button to go through each turn, will call events at the start / end of each phase
(e.i. untapping my permanents at my untap step) - some will be global constants (but also togglable and editable,
e.i. something that prevents me from untapping permanents during my untap, or maybe just creatures specifically)

Save edits to events as an object stored in an array / record, when going to call an event, look through any applicable edits, apply them, then trigger the event, if an edit is tied to a permanent, can remove the edit if it is removed, or if it lasts for a turn, can remove it at end of turn

Have a UI To create edits applicable to all events (Dropdown with the event being affected) and all editable values

Whenever a new edit is created, save it (Maybe write it out to a json that can be loaded in, possibly a DB later on)

Hook Will Manage Values like:
currentPhase: Type Phase; (probably enum)
currrentTurn: {
    turn: number;
    whosTurn: any; ~ this could be a boolean that's true if it's my turn or an enemies? or an enum just saying Me / Enemy, idk wip
}
turnRotation: number; ~ could be useful for 'until your next turn' effects

a bunch of callBacks / functions
nextTurn();
nextPhase();
onUpkeepStart()

* Could make a Ui to represent the phases in a turn, if some kind of effect adds an extra combat or extra beginning phase or extra upkeep whatever it is, then It could be used to drag and drop in the correct place, alternatively, just have the turn's phases in an array, have a button to select something you want to add, then move it into place with up / down arrows

* Some kind of Ui to order multiple triggers that would go off at start of a phase - 
E.i. if I had 5 upkeep triggers, and the order they resolved would matter

* Not sure How I want to do turns, maybe something like a turn count, and turn rotation count? Along with defining if it's my turn or an enemies?

* Counter Types:
- Flying counter adds flying ability
- Time Counter: Checks if the creature has vanishing, if so, removes on upkeep


* build a tool similar to the state and store example that will track accumulated values of selected cards
ex. I select a group of creatures, it could display their total Power, Total Toughness, split that up further,
how much of that power toughness is in the air? or can block air creatures (reach, etc.) 
How much of those stats can swing out this turn (summoning sickness / haste, etc)
How much of those stats is untapped currently as blockers

When no creatures are selected, it will just calculate the value for my entire board state

* Minimizable Modals, where I can also add keybinds targetting them to expand / shrink
```
