## Item icon flight and garden status, 3 November 2026

Confirmed shop purchases copy the clicked tile's actual image center and size.
Use the shared ItemPurchaseFeedback renderer: a 0.2-second pop to 2x size, a
one-second quadratic curved flight to the Inventory dock icon, then one second
shrinking to 10% and fading to transparent. The existing passive purchase text
remains readable for four seconds. World pickups reuse the same flight from the
prop's screen position without a purchase message or purchase-register cue.
Keep at most four effects and cancel owned tweens and connections on teardown.
Use native TweenService and a NumberValue for curve progress, without a permanent
frame callback. Feedback never grants usable items or blocks browsing.

The shared illustrated Cash symbol is Theme.Images.Cash, asset 111691981847477.
Use it for Cash icon roles in the toolbar, gain popups, boosts, income stats and
Garden buff. Normal inline currency amounts retain the CurrencyFormat dollar
prefix. The full-resolution original and 128-pixel runtime PNG are retained in
assets/ui/garden-status-v1. Never duplicate a dollar prefix beside a Cash coin
that already carries the symbol. Center icons with their row's text vertically.
The supplied garden banners use separate blue owner and grey visitor artwork
with live text, not text baked into their images.

## First hatch reveal order, 3 November 2026

For a species the player has never hatched, show the confirmed Birth Certificate
before GardenFull or SpeciesLimit selection, including Standard and Fine.
Closing the certificate opens its matching chooser. The new pet is already
safely stored, so closing that chooser keeps it rather than undoing the hatch.
Reuse existing certificate, Select dialog and transaction components.

## Garden creature hover card and DNA, 3 November 2026

Daniel requested a Collection-style tile above any garden creature on mouse
hover, including other players' gardens. Daniel then removed the duplicate
creature image because the card sits above the actual creature. Keep the biome
landscape and Theme.qualityOverlay shading across the compact stats/action
card, with no portrait or reserved image space. Show the creature name, grouped
Cash per hour and DNA Score. Prefix the name with
Fine, Superior, Epic or Legendary; omit Standard and legacy Normal. Reserve a
full two-line name area rather than compressing long names into one line.

The hover title uses native TextScaled and a UITextSizeConstraint from 14 to
44 pixels inside the existing full-width, 44-pixel name area. Let short names
grow to the space available, while long quality-prefixed names retain wrapping.
Title, card and action geometry remain fixed. This is a creature-title rule,
not a global change to body text fitting.

For this hover card only, both the quality-material overlay and Standard dark
backing use 35% opacity (65% transparency), half the earlier 70% tint. Keep the
biome landscape visible behind the brighter surface. Garden and Stored inventory
footer rules below retain their separate existing opacity.

The same card remains visible when native pet actions are available nearby.
Integrate the existing E Praise and F Follow buttons in its footer, keeping
native range/eligibility, mouse/touch/controller presentation and server
validation. Visitors retain eligible Praise; Follow remains owner-only.
Existing Feed fish and mount substitutions keep their dynamic action text.
Do not show unavailable actions merely because a creature is hovered. The
card is passive outside its action buttons and respects hidden HUD/camera UI,
placement, menus and deliberate text entry.

Use the clarified raw DNA sum and each creature's actual maximum. Scale adds
zero to three points across the global possible scale range. Do not normalize
the final score to five. Birth certificates add the same score/maximum row and
label the first stat Weight, preserving responsive no-scroll layout and native
acknowledgement/preview controls. See CREATURES.md for the canonical formula and
HOME.md for implementation/verification state.

## XP display preference, 3 November 2026

The existing Settings choice-row pattern adds XP display: Level or Studs/s.
Keep the established dark row, blue selected option, BuilderSans and scrolling
layout. Level stays the default. The top running and swimming labels use Xs/s
with one decimal place in Studs/s mode; Strength uses total jump height as Xs.
Keep icons, XP tracks, row geometry and the detailed Stats panel. Fit only these
three toolbar labels with native UITextSizeConstraint, from 8 pixels to their
existing 12-pixel narrow or 14-pixel ordinary maximum. Do not add a global fitter.
Apply the selection locally before background confirmation through the shared
settings queue. Preserve newer selections if an earlier request fails.

## Boom Box playback action, 3 November 2026

Reuse the existing primary left footer action. Off state reads Shuffle play;
active playback reads Turn music off. The idle status above search reads click
on a song to play. Use the current song title and artist while playing, with
metadata excluded from translation. Keep search, song rows, Move Boom Box and
close controls in their existing layout. Playback selection projects immediately
through the existing queue and respects newer choices during reconciliation.

## House placement rotation controls, 3 November 2026

While placing or moving a house item, Q rotates left and E rotates right in
15-degree steps. Two word buttons, Rotate left (Q) and Rotate right (E), sit
together immediately above Cancel. Use the shared HousePlacement controller
for keyboard and button activation. The placement owner releases these controls
when placement ends. Trap-only placement retains its existing Cancel control.

Reuse ActionDock, Theme.Buttons.Secondary, BuilderSans medium, control text size
14 and the shared raised button state treatment. Each button is 48 pixels high,
with eight pixels of horizontal text padding. The row is at most 408 pixels
wide, retaining 12-pixel outer margins on narrow screens. Use an eight-pixel gap
between the buttons and above Cancel. Keep whole-pixel edges, wrapped localized
labels, borderless surfaces and the existing device-safe bounds. Existing menu
and hidden-HUD suppression still applies. Do not capture deliberate text entry.

Daniel's later refinement makes house placement exclusive: hide other game
screens, dock rails, native CoreGui/topbar and world interaction prompts.
Disable their menu/action hotkeys for this lifetime. Keep native touch movement,
camera controls, movement/jump, placement and Cancel available. Q/E has priority
over the normal Q unequip action. The hidden Turbo Boost control must not use
Space during placement; native jumping remains available. HousePlacementActive
is temporary and does not rewrite the player's EggHUDHidden preference.
Restore each screen's prior Enabled state, prompt setting and native CoreGui
state when placement ends, while respecting another active camera-hide reason.
Trap-only placement retains its separate existing behavior.

## Birth certificate keyboard dismissal, 3 November 2026

E dismisses an open birth certificate through the same acknowledgement as OK.
Daniel requested no visible shortcut hint or mobile shortcut button. Keep its
existing text and layout. Bind per view above world actions and below the hatch
chooser; pass deliberate text entry, Roblox menus and hidden views. Unbind on
close or destruction, preserving a newer view's distinct binding. Existing
click, tap, controller acknowledgement and preview dragging remain intact.

## Admin Abuse announcement placement, 3 November 2026

Confirmed Admin Abuse world-event and spawn-multiplier messages reuse
WildSpawnPopup, matching Golden Egg announcements at the top centre beneath
the HUD. The card remains passive, uses the established theme and native
entrance/fade tweens, and is suppressed while the HUD is hidden. Other admin
notices retain their existing routing. There is no new per-frame UI loop.

## Collection reward tile, 3 November 2026

Prize tiles use the same rounded-top, square-bottom form as creature tiles,
with the existing biome backdrop visible through the card. Place the item name
and discovery count together in the creature-caption footer treatment, using
white theme text. Match NameSurface's BackgroundTransparency 0.1 and dark fill,
including the same subtle success tint when complete or already claimed. The
biome landscape remains visible through the footer; the former opaque-black
reward footer is superseded by Daniel's clarification.
Compact progress reads 3/4 discovered. Keep the image and caption lower within
their allotted area. Reserve additional footer space only when Claim or
Claiming is visible. Preserve the blue primary action, 44-pixel touch target,
confirmed completion/ownership rules, last-entry placement and scroll position.
Use the existing state/size events rather than polling or a new render loop.

## Collection reward reveal, 3 November 2026

Daniel's typography refinement raises both ribbon text areas and uses the
bundled Fredoka One face for the headline and item name. This is an explicit
reward-screen exception to the general BuilderSans rule; the subtitle and blue
primary action retain their existing theme fonts. The acknowledgement now reads
Lets go! (Ayo! in Indonesian), superseding the earlier OMG yes! caption.
Keep the headline between the ribbon stars and use one native UIShadow in Text
mode for its soft black drop shadow. Blur and offset scale with the headline's
bounds. No duplicate glyph labels, custom image blur or new update loop is used.

Daniel's supplied red/white reward artwork is an explicit celebration treatment,
with localized runtime text and a native spinning jetpack ViewportFrame layered
over it. Retain the artwork's aspect ratio and the established blue primary
Lets go! action below it. Only the viewport owns drag input. Reuse PreviewSpin
for horizontal inertia; the close control releases native first-person cursor
lock. Share ordinary window exclusivity and mobile HUD restoration.

Claim clicks show the pending model immediately. Confetti and the confirmation
sound require a new confirmed grant; replays, failed claims, restoration and
late replies to a closed screen stay silent. The 32 red/white native tween
pieces render behind the model, with 16 on Low graphics. Keep the spin update
connected only while visible and clean up all pointer/tween/model state on close.
Compact layouts omit the optional biome subtitle so the item name remains
readable within the lower ribbon. No polling or gameplay physics is introduced.

## New-egg Home banner, 2 November 2026

Daniel's supplied red/white artwork is a specific celebration treatment, not a
new general control palette. Keep its transparent original and 768 by 256
runtime PNG separate from the actual egg ViewportFrame and localized New Egg!
text. Use Theme.Fonts.bold, a red text outline and restrained text depth.
3 November placement: centre the visible new-egg artwork horizontally at one
third of the device-safe screen height, maximum 560 pixels wide. This replaces
the former 68-pixel top inset. Reserve bounds for the 120% entrance overshoot on narrow/short screens.
The existing delivery ScreenGui remains DisplayOrder 20, below normal HUD and
windows. Only the egg viewport captures pointer interaction; the banner,
artwork, text and confetti remain passive and never take keyboard focus.

Reuse PreviewSpin without a second rotation implementation, and reuse the
existing delivery update connection and confetti pool. First-ever species
delivery has the requested two-second entrance and red/white emission, unlike
the ordinary 1.3-second burst documented below. Hold/drag extends the banner
without restarting emission. Hide and teardown release pointer state, clones,
tweens and connections. Gameplay, touch input and performance need their own
acceptance; static or Edit checks do not establish them.

## Compact creature information, 2 November 2026

Collection creature information places Discovered at the right edge of the
name header. The next row contains biome first, conservation status second,
then diet and each supported travel mode. Use the existing biome atlas and
distinct conservation artwork, retaining the Alien marker where applicable.
Every symbol has a visible, centred caption underneath. Allocate equal-width
slots so symbol centres are evenly spaced across the row. Labels wrap within
their column; symbols remain together on one row. Reuse BuilderSans caption
12, 32-pixel symbols, theme colours and opaque article/card surfaces. This
supersedes the separate discovery/biome badge row and conservation section.

Keep the description, named buff card, three baseline stat rows and baseline
caption. The buff card measures its actual wrapped text instead of reserving
164 pixels. Remove redundant Diet and travel, Following buff, Stats and
Conservation headings and the generic conservation explanation. Article flow
uses the existing eight-pixel theme gap. Keep the original habitat gallery,
Back action, scroll gutter and responsive stacked layout. Public encyclopedia
pages share the layout while hiding personal discovery and Back as before.

The restored native Edit example at 1280 by 760 reduced the Labraduck article
from 932 to 464 pixels, fitting its 728-pixel viewport. Portrait and short
layouts retain scrolling. Current evidence and screenshots are under
output/collection-compact-information. Text changes, including translation,
remeasure their captions/cards through native events; add no polling loop.
Source installation and Edit verification do not establish live input testing,
saving or publication.

## Hatch comparison keyboard ownership, 2 November 2026

The garden-full chooser owns E above ordinary world actions while open. Pause
native world prompts for the comparison and restore their prior state on every
close path. Release covered game search focus without submitting text; preserve
Core chat entry. Selection closes immediately, then the existing transaction
queue and egg-specific busy indicator continue. Keep the current primary blue,
secondary dark button styling, controller selection and click/touch controls.
Do not add polling, scan every prompt or disable unrelated controls permanently.

## Mobile shop aisle opening, 2 November 2026

Shop aisle opening exception: proximity must never open or switch an aisle
while Dock.touch() reports touch/mobile mode. Mobile players activate the
existing native browse prompt deliberately. Mouse/keyboard and controller
modes keep automatic browsing, including mouse use on a touch-capable PC.
The same rule applies to Cash. Reuse the existing PreferredInput predicate
on the prompt event, without polling or another server request.

## Native mobile fishing action, 2 November 2026

Use the existing ContextActionService fishing action with createTouchButton
enabled. Its native 64-pixel touch target sits above the lower movement controls
at UDim2 (1, -155, 1, -236). Show it only in touch mode with a rod equipped,
outside Inventory, hidden HUD/camera UI, reeling and catch collection. Its labels
are Cast, Release while charging, and Retrieve for an existing cast, with shared
English/Indonesian translations. Hold begins the existing local charge and release
uses the existing cast aim. Keep the native reel meter and catch reveal input.
Do not turn ordinary camera touches into additional tool activation. Reuse the
current render pass, cached touch control and one rod lookup, without a new loop.

## Manual text-field focus, 2 November 2026

Daniel removed automatic text-box focus because opening a window consumed other
hotkeys. All windows and tabs, including the explicit Shopkeeper browser and
proximity-opened aisle screens, use native click/tap or deliberate controller
editing to start text entry. Opening a window must not call CaptureFocus or
automatically open the touch keyboard. Once the player deliberately edits a
field, native typing and editing shortcuts retain priority over gameplay keys.
Keep search query retention and filtering in the owning component.

The shared automatic SearchFocus controller is retired. Its client installs no
controller; the old Bind/Destroy interface is inert for compatibility. There is
no global descendant scan, visibility watcher or deferred focus request. This
supersedes the earlier 2 November desktop-focus rule and aisle-only exception.
The counter Shopkeeper still requires explicit E interaction to open its browser.

## Following pet buffs and creature traits, 2 November 2026

Use PetBuffView in the shared creature details and encyclopedia. Diet and travel
are 44-pixel icon controls with 8-pixel gaps, native colour symbols, dark row
surfaces, no decorative outlines and hover/focus/tap labels. Icons stay centered
inside their controls. Keep the buff-card emblem and name vertically centered
on the same row; description text wraps below. Use existing Theme fonts, colours
and corner tokens. These icon controls do not receive raised word-button styling.

The accompanying-pet HUD occupies one 224 by 60 row at the bottom right, inset
16 pixels horizontally, 120 pixels above the bottom on desktop and 190 on touch
to clear movement controls. Clamp the bottom reservation in very short windows
so the complete row remains inside the safe viewport. Show the species and buff name beside its 44-pixel
emblem, with a passive wrapped explanation on hover/focus/tap. Suppress it with
the existing HUD and camera hiding flags. No pulse, particles, modal input,
automatic focus or per-frame GUI loop. Mountable species show a Mountable
ability card explaining that riding replaces a following bonus. They do not
show an active passive-buff HUD, whether following or mounted.

## Pending egg destination feedback, 1 November 2026

After selecting garden or storage in either hatch comparison, close immediately
and replace that egg's E action with a passive spinner until its queued choice
settles. Use the existing timer billboard, a 44-pixel dark row card, the shared
28-pixel refresh glyph and a native 0.8-second looping rotation tween. Keep
normal HUD/menu suppression. Do not add a modal surface, focus, polling loop,
routine banner or success narration. Only that pending egg is unavailable;
restore a remaining ready egg on failure. See HATCHING.md and
output/hatch-choice-busy/report.md for checks and limitations.

## Native menu cursor release, 1 November 2026

Main menus must remain usable after zooming into first person. WindowControls
sets Modal=true on existing Close buttons in its registered windows, including
buttons named immediately after parenting. The dock tray's Close button also
sets Modal=true. Roblox then owns mouse release while the button is effectively
visible and resumes its normal behavior when the menu is hidden or removed.
Keep this on the existing menu controls. Do not add a fullscreen input shield,
force zoom out, or fight the native camera with a per-frame mouse override.
Ordinary action buttons and passive status-banner close controls remain unchanged.
Roblox intentionally permits right-mouse camera look while that button is held.

Native properties, window lifecycle and exact source installation are verified
under output/menu-cursor-release. Actual first-person input and published-game
acceptance remain untested. See CAMERA.md for the native reference and limits.

## Quiet low-stamina feedback, 1 November 2026

When low stamina blocks a player action, show the passive caption "Low stamina.
Rest a moment." beneath the existing stamina meter. Reuse the dark panel,
muted text, BuilderSans medium and existing caption scale. Keep it visible for
two seconds with a 0.3-second fade at the end. Coalesce repeated inputs and
server confirmation with a 2.5-second cooldown; never stack or prolong them.
The caption has no sound, buttons, focus or modal input. Menus, death and a new
character clear old notices without replay. It can explain a blocked tool
while the breath meter owns the main meter's slot. Normal swimming remains free
and does not itself trigger a rejection notice.

This is Daniel's explicit local-feedback exception for low-stamina rejection.
Trap stamina failures use this cue instead of the bottom error banner. Other
important errors retain their existing banner handling. See SKILL_PROGRESSION.md
and output/stamina-blocked-feedback for implementation and verification limits.

## Jetpack and following-pet actions, 1 November 2026

Garden Alpanda retains the Mount action even while another pet follows. Keep
capability separate from temporary availability; do not relabel it Follow while
petting, airborne or swimming. Owned held items are automatically stowed when
Mount is selected, while all wild-egg escape custody remains blocked until Home.
Use native unequip with existing client/server guards. See ALPANDA_MOUNT.md.

Wearable jetpack equipment remains in Inventory and uses its dedicated Space
action; never allocate it a numbered hotbar tile or shortcut. The current owned
mountable follower exposes a separate shared dock action with the existing paw
icon, Mount label and M badge. The same action changes to Dismount while riding.
Preserve standard responsive dock layout, localization, HUD suppression and
icon-button treatment. Do not turn it into a raised word button.

## Coin pickup overlay, 1 November 2026

Use the shared Cash gain visual for coin pickups, in a passive screen-space
layer at the coin's projected position. Keep the green bold text, black outline
and offset shadow. Pop 60 to 120 to 100 percent, then float upward and fade over
three seconds. Server confirmation changes only the amount, not lifetime or
animation. Pooled handles must prevent late receipts changing a reused visual.
Native CanvasGroup fading requires Sibling layering on the owning GUI; inspect
the rendered fade rather than only its transparency property. See CURRENCY.md.

## Smaller mobile toolbar, 1 November 2026

3 November 2026: Settings can override icon button sizing with Auto, Small
or Normal. Auto retains the current device choice. Small reuses the mobile
geometry below; Normal reuses the desktop range. Apply through ActionDock to
side/bottom actions, overflow choices and hotbar items. Keep actual input mode
separate so size selection does not change mobile rails, touch clearance,
shortcut visibility or covering-window suppression. The Settings choices retain
44-pixel control height and stable geometry during selection and saving.

Daniel requested smaller mobile icons to recover gameplay space. Touch action
and item tiles now scale from the shorter safe viewport dimension, clamped to
48 to 64 pixels, replacing the earlier fixed 80-pixel minimum. Touch artwork
uses a 44-pixel source frame before tile scaling. Captions retain an effective
12-pixel font with truncation for long names. Existing side/bottom rails, safe
bounds, scrolling, selection and full-screen suppression remain. Desktop sizing
is unchanged. This supersedes the old touch-size rule below.

## Equipped inventory wearables, 1 November 2026

An equipped Turbo Boost 4000 inventory tile uses Theme.Colors.accent as its full
background. Unequipped uses the existing dark row surface. Keep the independent
selection highlight and illustrated artwork treatment. Clicking toggles desired
equip state immediately through the existing optimistic queue, with rollback on
rejection. Other creature tiles and cards retain their existing appearance.
See FISHING.md and output/turbo-inventory for implementation and Edit previews.

## Immediate transactions, 1 November 2026

Apply the requested state locally on click and queue its server communication.
Do not use a whole-window Processing state for reversible predicted actions.
Keep browsing, search, later selections and cancellation responsive. Reconcile
each reply into confirmed state and reapply remaining newer intents; roll back
only the rejected intent. Coalesce identical desired-state requests, without
dropping newer different intent. Cached reads can refresh silently.

Store ownership, quantities and Cash update visually at once, but newly bought
items remain unusable until the server confirms the call. A predicted tile is
not a usable grant. Native paid checkout and server receipts remain authoritative.
Unknown outcomes trigger reconciliation without repeating a charge. This
supersedes older Processing/cooldown guidance for ordinary predicted actions.
Unknown new hatch/merge content must still come from the server, while input
feedback and any known reversible changes happen immediately.

Dummy coins show +$amount at the picked-up coin, with their spatial pickup cue
immediately on local contact. Confirmation corrects the amount without another
sound/popup. A rejection restores the local coin and cancels the projected
effect. These source-handled credits do not repeat the delayed wallet-tray cue.

## Collection detail layout, 1 November 2026

Trap inventory addition, 1 November 2026: Inventory tabs are All, Eggs, Items,
Traps and Garden, using the shared tab treatment and existing row. Trap counts
use xN above the name, aligned bottom-right in the art region. Use bold
BuilderSans at 16 pixels, theme text colour and a two-pixel theme-background
stroke. InventoryGrid allocates the passive label only for QuantityText. The
hotbar keeps one pooled label per slot, anchored at right minus six pixels and
y60, above its caption at y62. Trap quantity replaces the old caption suffix
and stays visible for x1. Empty slots hide it. Other quantities retain their
existing presentation. See FISHING.md and output/trap-inventory.

The public creature encyclopedia reuses this component on its native world
SurfaceGuis, including its gallery, article, statistics, conservation sections
and scrollbar gutter. Hide personal discovery and Back-to-Collection controls
there. Physical display dimensions do not define canvas resolution. Keep the
page footer below the scroll viewport. Page taps advance, while thumbnail
selection and scrolling retain their own input. See CREATURE_ENCYCLOPEDIA.md.

The approved illustrated Collection detail exception uses a 58 percent habitat
column and remaining dark article column with a 12-pixel gap at widths of 560
pixels or more. Portrait stacks them with a 12-pixel gap. Retain 16-pixel article
padding, 12-pixel section spacing, shared opaque surfaces and 12-pixel corners.
The illustration keeps Fit proportions. Its selectable thumbnails retain
artwork styling with selected blue fill, not raised word-button surfaces.
Back uses the shared Secondary word action.

BuilderSans name text is bold at 38 pixels, or 30 in a narrow column. Description
text is 16, section headings 20, labels 14, bold stat values 16 and baseline
caption 12. Measure wrapping title/description heights through native
TextService on text/width changes, cache results and allow four extra vertical
pixels. Native list flow sizes the article, and scrolling retains short-screen
access. Stat rows are 48 pixels with 32-pixel icons inset 12 pixels. Values
align right and labels wrap independently. Discovery and biome badges share a
36-pixel row. The biome icon has its own 24-pixel sibling slot; its label starts
40 pixels from the badge's left edge. Conservation icons are 28 pixels, with a
second slot for Alien where applicable and actual base state text beside them.
All wording remains native/localized; artwork contains no text. Only desktop
detail may use the 1350 by 900 limit. Other pet views retain their geometry.

## Cash tray feedback, 31 October 2026

Active Cash gains reuse the XP popup renderer, anchored to the visible wallet
amount. Display +$amount in the existing Cash green, with shared scale, motion,
shadow and fade. Use CurrencyFormat for symbol spacing and large-number precision.
Group only active gains after one second of quiet; passive pet income neither
enters the group nor postpones it. Keep the tray unchanged, use a separate
passive overlay at display order 98, and preserve hidden-HUD behavior. XP gains use the same display order 98 on their separate passive overlay, above the top tray and Stats panel.
No focus, modal input, button styling or per-pickup duplicate is introduced.

## Quiet screens and responsive actions, 31 October 2026

Inventory icon exception, 31 October 2026: use the generated illustrated blue
satchel and egg (image 72254850490766) through its existing createIcon callback.
The fishing rod uses illustrated image 107944957789764 in both item cards and
its Tool. Masters and runtime derivatives are in
assets/ui/items/inventory-fishing-v1. Preserve the existing navigation geometry,
Fit proportions and transparent artwork. Other Material registrations remain.

Remove transient screen status bars and their reserved space. Routine loading,
saving and success confirmations stay silent. Failed actions and validation
errors use GameErrorBanner. Keep actual content, selected items, review results,
active effects, empty-list explanations and necessary destructive confirmation
instructions visible in their normal components.

Prefer immediate client feedback for safe, reversible actions. Keep browsing,
local preview selection, settings and existing optimistic review/inventory
queues usable while synchronization runs. Coalesce newer intent, serialize
server writes where needed and avoid replacing newer edits with an older reply.
On a definitive rejection restore confirmed state where safe and publish the
error. Preserve uncertain transaction identities and review drafts for the
existing guarded retry path; do not invent failure, replay a purchase or erase
newer input when the outcome is unknown.

Only actions that need authoritative confirmation or duplicate prevention use
disabled Processing... buttons. Restore their caption and interactivity on
completion or failure. Leave independent local actions and cancellation usable.
States.processing provides the shared temporary word-button state. This rule
supersedes earlier instructions to show errors or ordinary results in local
status labels. Evidence: output/quiet-screens and output/shop-quiet-status.

## Control layout specification, 30 October 2026

Swimming input addition, 1 November 2026: native ContextActionService supplies
two circular touch actions with up/down arrow glyphs, using its built-in control
style rather than the game's word-button treatment. Targets are 56 by 56 pixels
with fourteen pixels between them. Intended positions are above and left of the
native jump area, stacked on narrow portrait screens and side by side on wider
screens. They appear only while swimming and hide for typing, menu or
camera input ownership and Hide HUD. This retains the native gameplay-control
exception; actual phone and short landscape placement remains pending live
inspection. Keyboard Space rises, C/Ctrl dives; land shortcuts are unchanged.
See research/swimming-controls-2026-11-01.md and output/swim-input.

31 October 2026, Daniel's illustrated away-reward exception: match his supplied
navy reward-screen reference. Bake the paw texture, gold frame, money glow,
sparkles and blank bright-blue button face into one text-free underlay per
layout, with landscape and portrait assets. Keep the selected Cash artwork,
all wording and the actual Continue hit area separate. Its larger caption is
28 pixels on desktop, 24 on portrait and 20 in compact landscape. Exclude this
already illustrated face from the generic raised-face painter while retaining
ButtonStates input/focus feedback. Keep the subtitle four pixels below the
rendered title and wrap it inside the yellow accents on smaller screens.
This is specific to OfflineIncomePopup and does not change shared theme tokens,
button roles or other screens. See assets/ui/away-reward-underlays-v1.

31 October 2026, latest button clarification: only word-only action buttons
receive the reusable raised surface. Use exactly Theme.Buttons.Primary (blue),
Secondary (dark charcoal) or Warning (red, for destructive actions). Existing
icon buttons, creature tiles, clickable artwork, top-tray level/currency/clock
controls, tabs, progress displays, fields and decorative panels keep their
existing appearance. Being a GuiButton does not make an object a word action.
Never apply raised styling to an ImageButton, empty/hidden native caption,
Material-managed control or a TextButton with ImageLabel/ImageButton content.
TimeMoneyAndSpeed, PlayerSkillHUD and SkillBars are explicitly excluded.

ButtonStates.isWordButton owns this distinction. ButtonVariant may select one
of the three roles but cannot bypass exclusions. RaisedButtonExcluded opts a
word control out. If artwork is attached after construction, remove the raised
face and leave the control's authored background, text and geometry unchanged.
Do not normalize original icon/card/HUD background colours or transparency.

The raised face is a native Frame, matching UICorner and vertical UIGradient,
with a separate passive native caption. It stays within the original hit area,
including legacy root-padding compensation. Press, hover and controller focus
change fills only; never move or resize the control. Primary uses #335FFF,
secondary #2F343F and warning RGB 208,57,49 at the main face. The lower bevel
darkens by only 14 percent at its shoulder and 22 percent at its bottom, keeping
the charcoal edge visible. Icon-button surfaces continue using their original
row palette; this is not a global row/card colour change. Disabled controls
retain matching Active, Interactable and Selectable values. No decorative
button outline or per-frame styling loop is added.

Top HUD correction, 31 October 2026: the clock, Cash and skill toolbar retains
its single flat dark backing and existing rounded outer ends. Its transparent
Cash and XP click targets must not receive separate raised faces, bevel
gradients or replacement captions from shared word-button styling. Preserve
the original labels, icons, dividers, progress bars, responsive geometry and
hover/focus feedback. See output/flat-top-toolbar for native Edit verification.

Reusable quality decoration uses Theme.qualityOverlay at 30% opacity, behind
content. Fine, Superior, Epic and Legendary have static green, blue, purple
and gold texture assets under assets/ui/quality-overlays-v1. Standard has no
overlay. These are quality materials, not new button colours. Initialize the
overlay before foreground labels and reuse it when selection changes. The Pets
selected-creature summary is the first consumer. Garden and Stored tile
footers explicitly use 70% opacity, as requested on 31 October 2026.

Icon asset production rule, 31 October 2026: keep a full-resolution -original
PNG and a separate display-sized -icon PNG. Creature pairs belong together in
the flat concepts/<creature>/ folder. Preserve real alpha and aspect ratio,
inspect at actual UI sizes on light and dark backgrounds, and retain PNG alpha.
2 November 2026 clarification: resize only. Do not add lossy encoding, colour
reduction or a separate compression pass. Roblox transcodes uploads, so smaller
disk files alone are not a graphics-memory improvement. Prefer a modest detail reserve over the largest intended display
size. Never resize sprite atlases without migrating their pixel coordinates.
Runtime derivatives, original upload bindings and current replacements are
recorded in assets/ui/runtime-optimized-v1 and assets/ui/runtime-optimized-v2;
high-resolution art is retained. See output/runtime-images-20261102 for the
current per-image size decisions, comparison pages and installation evidence.

Daniel requires explicit control specifications so new and modified interfaces
share the same layout. This section governs control geometry and supersedes
older visible resize-grip or inset disclosure-icon examples. Dimensions below
are Roblox UI pixels before viewport fitting, not world studs.

### Common box model and typography

Animal sleeping letters, 31 October 2026: use the existing native BillboardGui
with a 150 by 165 pixel canvas, three 54 by 54 pixel transparent label boxes,
BuilderSans Bold sizes 38, 42 and 47, white text and the existing black stroke.
Begin at canvas X 50 percent, Y 35 percent; rise 30 percent and drift right
30 percent over the existing 2.4-second cycle. Anchor above fitted eyes or a
raised head fallback, following the current transform. Preserve ordinary world
occlusion and reuse all three labels. This animal exception does not resize
player bed letters or change general interface typography.

Use ProjectUI.Theme directly. BuilderSans Regular is body/caption copy, Medium
is controls/values and Bold is titles/section headings. Default sizes are title
20, heading 18, body/control 14 and caption 12. Keep the original font size when
it fits. Follow the translation-fitting exception above when a label must
shrink. Never stretch text, icons or the entire control to force a fit.

Window content has a 16-pixel outer inset. Normal gaps between peers are 8,
between sections 16, and between a section header and its content 8. Use the
same left and right edges for controls in one column. Reserve a separate
scrollbar gutter; do not accidentally apply that gutter twice to children.
The existing Developer tools body has a documented 12-pixel horizontal inset.

A control's root owns its full painted surface and hit rectangle. Give that
root BorderSizePixel=0. Put caption insets on a separate transparent TextLabel,
not UIPadding on the interactive root when it also contains icons or feedback.
Root UIPadding otherwise insets every child, including ButtonStateLayer, and
creates a smaller hover rectangle inside a larger control. Background, hover,
pressed and selected fills must share exactly the same bounds and corner radii.
Never move or resize any of them on hover, focus, selection or press.

Trailing chevrons belong at the outer right of the control, outside caption
padding. Use the actual Material expand_more/expand_less icons. In a 44-pixel
section control the icon box is 24 by 24, vertically centered, with its right
edge four pixels from the control's right edge (center X=width-16). Reserve
44 pixels on the caption's right side so long text cannot run beneath it.
The whole control toggles the section; the decorative icon is not a second
interactive target. Avoid typed V, slash, arrow or Unicode substitutes.

### Shared control catalogue

| Control | Size and outer spacing | Inner layout and typography | Surface, interaction and states |
| --- | --- | --- | --- |
| Window | Fit inside available viewport with at least 8 pixels on each side; normal content inset 16 | Title 20 Bold; content may scroll; footer remains outside scrolling body | Opaque panel #121419, radius 12, separate 1-pixel window outline |
| Window header | Reserve 56 pixels normally; close control has its own 44-pixel slot | Title left-aligned and vertically centered; leave 12 pixels before close slot | Drag area stops before close/actions; dragging never swallows action clicks |
| Close icon button | 44 by 44 hit area, aligned to header's right edge | Material close 24 by 24, centered, no visible caption | Borderless row surface; accessible Close label; no title overlap |
| Section/card | Full content width; 16-pixel gap from unrelated section | 12-pixel internal padding and 8-pixel gaps between related rows | Opaque row #1B1E25, radius 8; decoration remains passive |
| Primary action | 40-pixel desktop height; 44 for touch; 32 only in explicitly compact layouts | Medium 14, centered; 12 horizontal padding; allow wrapping if required | Accent #335FFF; borderless; stable shared fill feedback |
| Secondary word action | Same dimensions and baseline as primary peers | Same caption role; word-only content | Theme.Buttons.Secondary raised charcoal face; borderless; icon controls retain their previous design |
| Destructive word action | Same rectangle as peer actions | Medium 14; clear action verb; full amount/target belongs in confirmation | Theme.Buttons.Warning raised red face with white caption; disabled state must block activation |
| Disclosure/section header | Full width, 44 high; 12 gap between Developer tools sections | Caption left 12, right reserve 44; Bold 18; 24-pixel trailing chevron at right inset 4 | Theme.Colors.tab; whole row clickable; full-width shared feedback; no root UIPadding |
| Dropdown/select trigger | Same column width and control height as neighbouring fields | Caption left 12, right reserve 44; Medium 14; same trailing-icon geometry | Trigger and open list share horizontal edges and width; do not shrink only the popup |
| Dropdown list | Match trigger width; 4-pixel vertical gap; open above if needed; bound height and scroll | Options have 12 horizontal padding and 44-pixel touch rows; Medium 14 | Opaque row surface; selected/focus uses fill; no decorative button borders |
| Text field | Full assigned column width, normal height 40 or touch 44 | Medium/Regular 14; normal 10 horizontal padding, 6 for a narrow numeric field | InputFields.decorate; row surface; separate input outline 1, accent 2 while focused |
| Search field | 44 high; align its outer edges with results below | Leading icon 22 in a separate slot; text inset 38; reserve 38 for clear button | Preserve typed text during filtering; no result-driven width changes |
| Search clear | Inside trailing slot, at least 32 by 32; use 44 when space permits | Material close 20, centered; empty accessible caption only | Borderless; show only for nonempty query; clearing restores the normal list |
| Checkbox | 44-pixel full label-row hit area | Indicator 20, gap 8 before Medium 14 label; wrap full label | Shared native-style check icon/state; do not rely on colour alone |
| On/off control | 44-pixel row; keep label and switch in separate slots | Label Medium 14 at left; state control aligned right | Both states distinct; same bounds when toggled; authoritative pending state where needed |
| Slider | At least 44-pixel interactive row; separate title/value and track rows | Label/value 14 Medium; endpoint fields keep fixed slots; thumb at least 24, track 4 | Value changes never move neighbouring controls; touch/controller input retains cleanup |
| Numeric stepper | 44-pixel row with equal minus/plus slots and 8-pixel gaps | Centered numeric value 14 Medium; Material add/remove icons | Stable target sizes; bounded values; disable impossible steps |
| Tabs | Equal widths within the same tab row; 8-pixel peer gap | Bold 18, or 16 in the existing narrow layout; centered; do not squeeze text | Lighter tab surfaces in both states; selected blue underline 2; underline stays separate |
| Scroll region | Uses remaining body height; 5-pixel scrollbar and 10-pixel right gutter where used by Developer tools | Layout gaps determine row spacing; include 8 bottom padding | Clip contents; canvas follows content; do not move the footer into the canvas |
| Inventory tile | Use shared InventoryGrid sizing and responsive column rules | Artwork fills tile; names/values stay in their assigned footer/overlay slots | Preserve artwork proportions, selection, discovered state and loading placeholders |
| Progress/stat bar | Track fills its assigned column; caption/value have reserved rows | Current stat vocabulary and 14 Medium values; never put text under a neighbour | Passive unless an existing stat action owns the whole card; no layout changes on updates |
| Tooltip | 8-pixel inset around wrapped body text; bound to viewport | Regular 14, full readable caption; no image distortion | Passive, opaque dark surface; never steal movement/focus |
| Status/error text | Caption 12 below its owning control with 8-pixel gap | Regular, muted for ordinary state; meaningful errors use established semantic colour | Feedback belongs locally unless UI_NOTIFICATIONS.md explicitly allows the global banner |
| Resize handle | Invisible 32 by 32 bottom-right hit region, inset 4 from window edges | Empty visible text; accessible resize label only | No resize icon, diagonal marks, dot pattern, grip lines, box or decorative hover fill; retain mouse/touch/controller resizing |

A control's disabled state must agree with Active, Interactable and Selectable.
Loading must not look like a confirmed zero or success. Inputs keep their own
outline; buttons do not gain one for focus. Icons use ScaleType.Fit and remain
square. Mouse, controller and touch operate the same logical control.

### Developer tools exact layout

The normal preferred window is 420 by 660, minimum 300 by 280, clamped to the
current safe bounds. The title/drag region is 44 high and reserves the close
slot; the title is offset (16,6), size 20 Bold. The obsolete scope caption was
removed at Daniel's request on 31 October 2026. Search is at (12,52), width
window-24 and height 44. Its result caption starts at (16,100), is 18 high and
uses caption size 12. The section scroll starts at (12,126), width window-24,
reserving the existing footer and resize region.

Section rows share the scroll content width, including its single 10-pixel
scrollbar gutter. Each header is 44 high, has an 8-pixel radius, and is followed
by an 8-pixel gap to expanded content. Its transparent caption begins at X12,
has width header-56, full header height, Bold 18 and left alignment. Its
24-pixel chevron has center (width-16,height/2), with a four-pixel outer right
inset. Feedback covers the complete header, not the caption rectangle.
Command rows stack with 12-pixel gaps. Search expands only matching sections
and preserves the user's unfiltered expansion state when cleared.

Both Developer tools and Developer Panel retain invisible corner hit regions
for resizing. There is no visible resize symbol or instruction explaining the
corner. Keep accessible control names and the existing resize input bindings.
The compact/full-view button is a separate actual action, not a resize hint.

### Acceptance checklist

For every affected size, compare root, feedback and icon AbsolutePosition and
AbsoluteSize. Confirm header and popup edges align, trailing icons have the
specified outer inset, and captions do not overlap icon slots. Check rest,
hover, pressed, focus, expanded, disabled, loading and empty states. Verify
portrait phone and short landscape, long/localized labels, popup scrolling,
search clearing, moving/resizing and reopening. Text and geometry assertions
support actual native views; neither alone is live gameplay acceptance.

## Translation text fitting, 30 October 2026

Daniel requires game-owned text to follow the selected language, including the
action bar, emotes, biome signs, shop labels and discovery counters. Keep the
original font face and default size when it fits. Fixed-size labels and buttons
may shrink below the usual preferred size when needed, with the original size
as their ceiling and eight pixels as the lower bound. Keep authored wrapping,
automatic layout and existing scaling. Never stretch lettering horizontally.
Rich-text sizes must be measured with the actual FontFace and markup. Preserve
names, brands, hotkeys, typed text and private review evidence. See
localization/README.md for coverage and actual verification.

Roblox-generated proximity prompt UI is engine-owned. Exclude its
ProximityPrompts tree from the translation bridge and text fitting. Translate
the source ProximityPrompt.ActionText and ObjectText instead. Never resize its
key glyph, add fitting constraints or change the native input-icon layout.

## Mirror wardrobe character preview, 30 October 2026

Keep a rotatable full-body character preview on the left and owned clothing and
headwear on the right, including phones. Use shared scrolling inventory tiles,
ProjectUI surfaces/fonts, borderless icon controls and Wear/Remove actions.
Clicking an owned item tile toggles Wear/Remove immediately through the existing
optimistic queue. Server confirmation still owns the saved outfit.
Keep the selected full name and action reachable with compact landscape tiles.

The outfit preview matches the birth certificate's automatic turn: ten degrees
per second facing forward, smoothly increasing to sixty facing backward.
Hold the viewport with mouse or touch to pause. Drag horizontally to turn in
the matching direction. Releasing a quick drag retains its signed velocity,
capped at six revolutions per second, then returns to the automatic turn with
exponential damping of 1.8 per second. A stationary hold longer than 0.12 seconds
before release discards the old flick. Release resumes automatic motion; no
permanent click-to-pause toggle or left/right arrow controls remain. Closing,
focus loss and destruction release pointer ownership. Reopening starts a fresh
automatic turn. Keep camera distance stable during rotation.

1 November 2026: the birth certificate creature preview shares this same
PreviewSpin controller and input contract. Preview holds, taps and drags never
acknowledge the certificate; OK and taps elsewhere retain dismissal. Reuse the
existing preview update, preserve the creature's front-facing offset, and
release all input connections on close. Evidence: output/certificate-drag-spin.

Settle the local avatar's body joints before fitting its accessories and
framing it. Freeze copied parts before solving their rest positions so moving
one limb cannot displace the connected assembly. Support Motor6D and current
AnimationConstraint joints without editing their authored attachment frames.
This affects only the local preview copy. See Roblox's
[AnimationConstraint reference](https://create.roblox.com/docs/reference/engine/classes/AnimationConstraint)
for the compatible joint aliases and attachment rules.

## Activity totals inside Player Stats, 30 October 2026

Running and Swimming each show a separate Total distance value in whole studs
with grouped digits, using the existing medium BuilderSans body size and card
palette. Keep loading distinct from a confirmed zero. Preserve the calculated
speed, XP, benefits and responsive wrapping, with no extra toolbar readout.
Use compact muted hints for running, swimming and jump/carry training outside
Home. Purchased treadmill and weights training remain available inside Home.

## Explicit server boost announcement exception, 30 October 2026

Daniel requested an Information banner to everyone when a whole-server boost
activates. The dedicated boost kind is allowed and reports who activated it,
the actual pet Cash income/skill XP or hatch-speed multiplier and minutes added. Emit only
after confirmed activation. Replays, failures, uncertain activation and queued
stock remain silent. Routine info/success remain suppressed. Keep the existing
passive banner and hidden-HUD behavior. See SERVER_BOOSTS.md.

## Shop search and active boost cards, 30 October 2026

Cash formatting uses no space between $ and its amount. Use $0.50 and $0.04
below one dollar, and round ordinary amounts of one dollar or more to whole
dollars. Keep exactly two decimal places, including trailing zeroes, in compact
K/M/B/T abbreviations. The toolbar's green symbol must have no separate
layout gap before its amount. Formatting never changes underlying prices,
balances or rewards. See CURRENCY.md.

Shop search shares the title row, uses InputFields styling, BuilderSans body
text and a 44-pixel borderless Material close control. Keep 24 pixels before
desktop Buy. Wrap tabs below on narrow screens and use side-by-side results and
checkout in short landscape. Filter names/descriptions, prefer current-tab
matches, preserve the query across automatic tab changes, and clear locally.

Active server boost cards are passive shared-theme dark surfaces with alpha
illustrations, native live values and separate booster attribution. Retain
Running green, Swimming blue and Strength purple. Never bake countdowns or
multiplier values into artwork. Preserve icon proportions and reserve the full
slow pulse footprint. Hide/camera controls also release warning-layout space.
Decorative aura is an explicit request; it is not a button outline.

# That's my Egg! UI rules

The developer creature preview controls are stand-owned: keep them visible while
the player is on the platform and hide them on exit. This panel has no close
button and remains outside exclusive-window dismissal. Retain mobile window
tracking and deliberate Hide UI/camera visibility controls. Restoring the HUD
while still on the stand must reopen the panel. This specific interaction rule
supersedes the general close-control and exclusive-window patterns for this panel.

Authoritative design contract, requested by Daniel on 29 October 2026.
Follow this document for new screens and changes to existing screens. The shared
tokens in `src/ui_theme.luau` and components under `ProjectUI` implement it.
Do not copy old screenshots or old hard-coded styles over this contract.

## Colour and surfaces

Animal income statistics use Cash per hour, including birth certificates,
inventory tiles/details, Garden totals, hatch comparisons, Collection,
encyclopedia, shop details and rankings. Use CurrencyFormat.HourlyRate for a
complete rate. Hourly income displays round to the nearest whole Cash, use grouped
digits and show no decimal points. Use CurrencyFormat.HourlyAmount when the
heading already supplies the unit, and HourlyRate when the value needs its
suffix. Internal income calculations remain per second. Actual credited Cash
amounts and sale quotes remain ordinary Cash amounts.

| Role | Hex | RGB | Use |
| --- | --- | --- | --- |
| Deep background | #0D0F14 | 13, 15, 20 | Recesses and staff window backgrounds |
| Window | #121419 | 18, 20, 25 | Main windows, dialogs and popup surfaces |
| Card and control | #1B1E25 | 27, 30, 37 | Cards, fields, secondary buttons and HUD tiles |
| Unselected tab | #20242C | 32, 36, 44 | Every unselected tab has a visible surface |
| Selected tab | #262B37 | 38, 43, 55 | Selected tab surface |
| Blue accent | #335FFF | 51, 95, 255 | Primary action, active underline, focus, progress |
| Border | #45474D | 69, 71, 77 | One-pixel window, non-interactive card and field borders |
| Main text | #F7F7F8 | 247, 247, 248 | Titles, names, body and selected tab labels |
| Secondary text | #D5D7DD | 213, 215, 221 | Supporting text, inactive tabs and placeholders |
| Success | #66DD70 | 102, 221, 112 | Discovered tick and success text |
| Warning | #FFD063 | 255, 208, 99 | Meaningful warnings |
| Destructive text | #FF5248 | 255, 82, 72 | Remove, delete and destructive confirmations |
| Collection silhouette | #FFFFFF | 255, 255, 255 | Uniform hidden-creature artwork; overrides the legacy shared grey tint |

Main windows and readable surfaces are opaque. BackgroundTransparency is zero
for window, row, input and button surfaces. Transparent layout containers,
artwork and modal dimmers are intentional and do not count as window surfaces.
The scene behind a window must not interfere with text or card readability.

Collection biome sections are an explicitly requested layered-art exception:
each section has one continuous landscape behind its heading and all tiles.
Discovered tile windows show the full landscape, hidden tiles apply 50 percent
black tint, and non-tile strips apply 90 percent black tint (10 percent artwork
visible). The biome heading row instead uses 30 percent black tint, with
rounded top-left and top-right corners and square bottom corners. Its discovery
count has no additional dark backing. Apply the surrounding 90 percent black
tint to the header corner cutouts and edge gaps, below its coloured border.
Each header has its own illustrated biome
icon and a two-pixel biome-coloured border. Align the header body with the
left edge of the first tile and the right edge of the last grid column, excluding
the border. Use the same responsive grid inset and width for every biome.
The title uses Heavy BuilderSans at
28 pixels on desktop and 22 on narrow layouts, with a two-pixel dark text outline.
Allow two title lines on phones; keep the icon and discovery count separate.
Leave a sixteen-pixel landscape strip between each biome header and the first
creature row. Discovery totals use 22-pixel text on desktop and at least
18 pixels on narrow layouts. Emphasize the discovered numerator at 36 pixels
on desktop and 30 on narrow layouts, using the same colour as the biome border.
On phones the discovered caption may wrap onto its own line, using 16 pixels
on the tightest layouts so full biome names still fit. Backyard and Farm
use green borders and matching green discovered numerators.
These are section artwork layers over the opaque window, never views
through to gameplay. Names retain dark readable backing. Do not repeat or restart
the landscape separately inside each tile.

Garden and Stored pet and egg tiles use that species' biome landscape, with a
centred aspect-fill crop of the full image. These
inventory tiles have independent crops; Collection keeps its continuous scene.
Collection creature tiles have rounded top corners and square bottom corners,
including their name strips and landscape masks. This applies only to Collection.
Garden and Stored tiles retain all four rounded corners. The Collection-only
change is installed under plan e20aa9122caf4cd18ca03de3a8ec9410; desktop and phone
Edit views and source verification are under output/collection-square-bottoms.
Garden and Stored use four rounded corners. Their bottom label strip layers
the biome artwork, then the existing quality texture at 70 percent opacity
(ImageTransparency 0.3), then names, rates, quality or hatch timers. Its Frame
background is transparent, with no dark fill obscuring the texture or landscape.
Keep square top corners and rounded bottom corners on that footer. Standard
has no quality texture; retain the existing text strokes for readability. Keep the existing
explicit Hatch action inside garden egg tiles and preserve selection behavior.
Collection creature artwork, hidden silhouettes and pet and egg inventory icons
have subtle passive alpha-shaped shadows. Keep their fade within 1 to 3 pixels:
the main shadow is offset 1 pixel right and 2 down at 25 percent opacity; a
10 percent soft layer is offset 1 pixel down and grows 2 pixels overall.
Add these as UI layers; keep source artwork unchanged.

Use the same blue throughout the experience. Do not create a different blue
for each screen. Quality colours, conservation meaning, currency/celebration
effects, warning/error notices and intrinsic artwork colours retain their
meaning. Quality colour may subtly tint a dark surface; it does not replace
the main palette. Native Roblox system menus are outside the game-owned theme.

Legendary UI uses champagne gold (#FFE397) from Theme.Legendary, replacing the
old mustard-yellow UI colour (#FFCD4D). Use Theme.qualityColor for quality text,
glow and announcement colour, and Theme.qualitySurface for quality-tinted card
and details surfaces. Other qualities retain their authored colours. Keep world
egg coatings, creature materials and quality gameplay independent of this UI
palette.

The Legendary surface is a static native UIGradient named LegendarySheen at
24 degrees. Its five colour stops are #1C222F at 0, #2F3643 at 0.36, #847959 at
0.48, #4D4D48 at 0.54 and #1C222F at 1. This gives a narrow metallic gold sheen
over dark slate rather than a flat brown fill. Reuse a single gradient on refresh
and remove it when the quality changes. Preserve existing surface opacity,
corners, typography, padding, blue actions and selected outlines. Use the card
footer above biome artwork, the whole surface for plain inventory/shop cards,
and the existing certificate tint layer. Do not add animated shimmer loops,
extra input layers, button outlines or downloaded texture dependencies.

## Fonts and text

2 November 2026: Standard-quality biome-backed creature tiles in Garden and
Stored use Theme.Colors.bg at 70% opacity behind the footer text. Keep the
rounded lower corners and existing quality textures for higher tiers. Cached
tiles reset the footer transparency when quality changes. Shared InventoryGrid
source was installed under plan b09ccf2fd91b4d04bf2f613383eeb8b8 with exact
readback. The 81 offline grid checks and 517 native Edit tile checks passed;
desktop and phone previews are under output/inventory-tile-finish. Fixtures
were removed and the camera restored. No gameplay, save or publication.

Cash shop packs may use taller illustrated offer cards. Keep the Cash amount,
full Robux price and Cash-per-Robux caption distinct. Use current client product
quotes for prices and comparisons. Lowest price and Best Cash rate require all
available pack quotes to be confirmed. Do not invent discounts, urgency,
scarcity or popularity. Failed quotes withhold rates and use Check Robux price.
Other inventories retain their existing card proportions and four rounded corners.

Server boosts use the same illustrated offer cards, taller grid proportions,
three-label details footer and blue purchase button as Cash packs. Lead with the
actual multiplier and benefit, show Everyone benefits above the artwork, and
keep the full Robux price, whole-server scope and duration visible. Cash + XP
offers use the existing treasure-chest artwork; hatch offers use the existing
Labraduck egg artwork. Hatch duration is prefixed with + because a purchase adds
that time. Use live product quotes and Check Robux price when unverified. Do not
claim discounts, popularity or scarcity. Preserve the real active countdown,
next-tier eligibility, unavailable states and direct native checkout.

Selected Cash offers use three separate footer labels: the exact dollar amount
in bold at 28 pixels (24 on narrow or short layouts), the pack name at 18 pixels
(16 on short layouts), and a 14-pixel supporting value or price-status line.
Use a dollar prefix on Cash amounts and value-per-Robux figures. Do not join the
amount and pack name with a pipe. Keep the price on the purchase button with
18-pixel text and at least eight pixels between the supporting line and button.
Round displayed compact unit values down to two decimal places; comparisons
continue to use exact verified prices and rates. Loading or unverified prices
never imply a confirmed unit value.

Use BuilderSans throughout interface text. Regular is for body copy, medium
for controls and values, and bold for titles, biome headings and creature names.
Use `Theme.Fonts` when accepting a theme, or the matching BuilderSans enum.
Do not introduce Gotham, Fredoka, SourceSans or a separate font per feature.
Text embedded in authored logos is artwork and retains its design.

The normal sizes are 20 for window titles, 18 for section headings, 14 for body
and controls, and 12 for captions. Narrow windows may use a 16-pixel title.
Prefer wrapping and responsive layout to shrinking interactive labels below
14 pixels. Do not use unlimited TextScaled on body copy. Preserve full names
where practical and never cut text under icons or action buttons.

Use clear player-facing words and consistent terms: Pets, Garden, Stored,
Collection, Cash and Discovered. Do not expose internal keys, requests, asset
IDs, storage details or debug instructions in ordinary player flows. Label
estimated or baseline statistics explicitly. Do not use Unicode U+2013 or
U+2014 in authored text, comments, headings or generated artifacts.

## Components

Pets, Collection and Inventory are stacked on the right edge in that order.
Shop remains on the left edge. The Collection action uses the blue selected fill
while the Collection tab is open; Pets uses it for either Garden or Stored.
Tab switches refresh these fills immediately, and closing the window clears them. Collection uses V and opens Pets on
Collection; Pets uses G and opens Garden; Inventory uses T or I; H stops the following pet; Shop uses B and opens
Shop from anywhere. Opening a different Pets page switches to that page rather
than closing the window. Emote remains on the bottom rail with its existing C
shortcut. Side rails retain shared button sizing, selected fills, hover names,
HUD/camera hiding and mobile window suppression. Use the matching illustrated
icons for Collection (Bunblebee, Froggle and Puglet), Shop (storefront), Pets
(Labraduck), Eggs (spotted
egg) and Emote (waving hand). This replaces the Material Shop request following
Daniel's illustrated-style selection on 30 October.
The 31 October creature replacements and upload receipts are retained under
assets/ui/creature-navigation-v2. Keep native icon fitting and existing controls.
The physical Home shop marker and proximity-triggered browsing are retired.
Never rebuild ShopPlaceholder. Preserve all shop transactions and other tabs.
Desktop, portrait-phone and landscape native views are under output/side-navigation.


The egg hotbar's reserved first slot shows a carried wild egg with the same
opaque #335FFF selected fill as an equipped rescued egg. Follow authoritative
wild carry state independently of running, swimming, inventory paging and a
temporarily streamed egg model. Show that egg's species artwork and description,
not an older stored egg. Clear the carry display on drop, loss, death or teardown
and resume the existing inventory slot. A detached client display descriptor
never becomes an owned inventory Tool or changes carry/equip rules. Evidence:
output/carried-egg-selection, including offline paging/lifecycle checks and
native Edit views. Actual gameplay acceptance and publication remain separate.

The clock, wallet and three skill controls share a screen-centred top toolbar.
Centre it on the full screen, accounting for the native topbar safe area's
asymmetric horizontal origin. When the centred row cannot clear native and
staff controls, keep it centred in the existing row below the topbar. Mobile
retains its full-width row with equal four-pixel side margins. Evidence:
output/centred-top-toolbar (31 October 2026).
Each pill is
44 pixels high to match Theme.Topbar.buttonSize, with fully rounded capsule
ends. Use at least four pixels of outer margin, six pixels of internal clock/Cash
padding and eight pixels between related sections (four in compact phone layouts). The wallet
uses a green dollar symbol. Reserve each amount digit's width using the widest
digit in its font, including space for the current commas, decimal point and
compact suffix. Cash digit changes within the same format must not move the
dividers, skills or toolbar layout; resize only when the digit count or format
changes. Keep the actual amount visible. Clicking
the dollar symbol or balance opens Shop on Cash from anywhere. Use the shared
borderless button feedback and preserve hidden-HUD, confirmation and purchase
guards. Button-opened Shop browsing stays open while moving around the world. Skill cells
show only an icon, level and coloured XP bar; clicking any skill opens Stats.
Only the Player Stats window shows current calculated Running and Swimming
speed, right-aligned beside each level as a compact value such as 18.9 s/s.
Keep the main toolbar clean. Preserve the separate base-speed details below
and use each skill's own server-calculated movement setting.
On mobile the clock, Cash and all three skills stay in one 44-pixel row spanning
the usable screen width with four-pixel side margins. Balance the clock and Cash
columns around their readable content, then divide the remaining space equally
between Running, Swimming and Strength. Keep Settings on the native row above.
Use compact internal spacing and 16-pixel clock/Cash text, or 14 on the narrowest
phones. Narrow skill cells may put the existing icon above its level within the
same 44-pixel control, with its XP bar at the bottom. Retain 44-pixel touch targets.
PC skill columns request 120 pixels each, with room for longer XP bars. Do not scale
the entire toolbar or move skills onto a second row. Reserve only the single-row
height for stamina and breath warnings, retain native topbar/staff/settings
clearance, and hide the toolbar with the existing HUD/camera visibility flags.

XP cell geometry, updated 30 October 2026: at widths of at least 80 pixels,
use a 27 by 27 icon at (3, 3), with the bold 14-pixel level caption starting
ten pixels after the icon. Give the caption the same vertical bounds as the
icon so their centers match. The six-pixel-high progress track starts at Y35,
with a four-pixel left inset and nine-pixel right inset. Daniel shortened all
three HUD XP tracks by five pixels at the right edge on 31 October 2026.
This leaves three pixels above the icon and
three below the track in the 44-pixel cell. Preserve the original icon aspect
ratio. At cell widths from 64 to below 80, retain an 18-pixel icon with the
same centered caption and ten-pixel gap. Below 64, retain the stacked phone
layout: 18-pixel icon at Y2, centered 12-pixel caption at Y19 with height16,
and track at Y36, giving equal two-pixel top and bottom padding. Keep the
existing mobile column allocation and 44-pixel touch height.

The single-row revision is installed in Edit under plans
31c5e0ca78454c8bbc4960d21fae8931 and eb0a12bc32444e4281afa71c654968ed.
Evidence is under output/mobile-top-toolbar: ten native layouts covered
280-pixel phones through tablets and PC, with full text fit, equal skill columns,
44-pixel touch targets, retained Stats and hidden-HUD behavior, camera restoration
and temporary-fixture cleanup. Offline toolbar, Cash, stamina and breath checks
passed 263 assertions. These Edit fixtures do not establish real-device input,
safe-inset behavior or live gameplay acceptance. No save or publication occurred.

Windows use a 12-pixel corner radius, a one-pixel border, 16-pixel outer padding
and consistent close positions. Use minimal, consistent spacing: align fixed
bottom details panels with the same 16-pixel outer inset used at the sides,
with an eight-pixel gap to the scrolling content. Do not reserve empty status
rows; allocate room only while a notice is present. Shop, Pets and Eggs have no manual Refresh
button; retain their automatic loading and reconciliation. Failed reads can
recover through existing polling or closing and reopening the window. Controls
use an 8-pixel radius. Use
8-pixel gaps between related controls and 16-pixel gaps between sections.
Share the existing WindowControls, InputFields, MaterialIcons and ButtonStates
components instead of recreating their behavior in each feature.

Every tab has a lighter charcoal surface in both states, readable text and
clear separation from its neighbours. A selected tab uses the selected surface
and a two-pixel #335FFF underline. The underline overlaps the horizontal divider
at the tab's bottom edge and draws above both the divider and hover layer.
The horizontal divider continues over every inactive tab's opaque surface and
hover/focus layer. The selected blue accent draws above that divider. Keep the
same baseline height through tabs and the gaps between them.
Never leave a gap or let a grey line paint over the blue accent.
Tabs use rounded top corners and square bottom corners, a subtle vertical depth
gradient and a small top highlight, matching Daniel's 29 October reference.
Apply gradients to a separate surface, keeping the caption bright and readable.
These bevel cues are fill treatments, not decorative button outlines.
Use `Tabs.select`; colour alone must not be
the only selection cue. Tabs fit the available width and remain in stable order.
Garden, Stored and Collection captions are bold, 18 pixels on desktop and
16 pixels on narrow layouts (window width below 560 pixels). Use
`Theme.Fonts.bold` for both the button and its visible TabCaption. The desktop
size matches the current Garden Eggs reference. Preserve the existing tab
boxes, heights, spacing, top corners, divider and selected blue underline.
Player Stats uses the same bold captions and 18/16-pixel desktop/narrow
sizes for Stats, Multipliers and Equipment, with eight pixels between tabs.
Keep its existing outer inset, 40-pixel tab height, divider and underline.
On phones, give tabs their own row when the title and controls need the space.
Each window keeps its last selected tab when closed and reopened during the
same session, including closure by opening another window. Defaults apply only
to the first opening: Pets starts on Collection. Reopening still refreshes data
for the remembered tab while preserving existing confirmation cleanup.

Primary buttons use the blue accent with white text. Secondary buttons use
the dark control surface. Destructive buttons use red text on the same dark
control surface, with an explicit confirmation for irreversible actions.
Disabled controls retain their geometry and are visibly unavailable.

All buttons are borderless: actions, tabs, toolbar controls, shop buttons,
hatch/confirmation buttons and clickable inventory tiles. Use BorderSizePixel=0
and no enabled button UIStroke. Indicate selection and controller focus with
the existing fill/highlight layer. The selected-tab blue underline remains.
Window, non-interactive card and search-field outlines are separate container
or input styles, not button borders. ButtonStates enforces this rule for bound
controls, including outlines added after binding.

Garden and Stored inventory selections are an explicit exception requested by
Daniel: show a three-pixel #335FFF outline around each selected pet or egg tile,
including every selected merge input. Draw it on a passive transparent selection
layer above artwork, labels and hover feedback. Match all four rounded tile corners. Do not tint the artwork, move the tile or outline ordinary
unselected buttons. Preserve the outline through refresh, scrolling and paging.

Fields use a dark control surface, a visible border, left-aligned text and a
blue focus border. Give every field an accessible label. Reserve space for
leading icons; icons must never overlap typed text or the placeholder.
Inventory search fields have no separate visible Search label above them.
Use the exact placeholder Search in every search box, localized as Cari in
Indonesian. Daniel shortened search placeholders on 2 November 2026 to improve
mobile fit. Keep contextual accessible labels and the search icon; placeholder
wording does not change which records can match.

The later 29 October Collection design removes its search entirely. Existing
pet and item inventory searches retain the short shared placeholder. Collection has no
separate total, progress bar or help label above the biome list; its window title
is x / y discovered, with a loading title until confirmed data is available.

Egg card clicks select and show details only. Only the explicit Hatch button
inside a ready garden egg's card requests a hatch. Do not add a duplicate Hatch
button to the bottom details panel. Stored eggs retain their separate slot
selection action; selecting an egg never implies hatching it. Instant hatch
and hatch-credit actions also stay on their egg cards. Preserve the separate,
permission-scoped developer test action for an incubating Garden egg. The
Garden details footer reclaims the unused action space, and metric values wrap
so the timer remains readable on narrow screens.

Use the installed Material icon set for common actions. Icon-only controls
need an AccessibleLabel. Creature logos are supplied artwork, not generic
icons or recreated illustrations. Never silently substitute older artwork,
placeholder art or a compromised treatment when requested assets are blocked.
Report the blocker and retain the intended design for Daniel to resolve.

Game navigation, emote, equipment, trap and trail artwork uses one matching
illustrated style: cute, rounded, softly dimensional forms, clear silhouettes, warm colours and restrained
highlights. Match the approved Collection pet group and the Shop, Pets, Eggs
and waving-hand navigation artwork. New icons in these families must follow
this style rather than mixing white Material glyphs, platform emoji or unrelated
illustration styles. Standard close, search, arrows and other utility controls
retain the shared Material set. Creature artwork retains its own identity.

Use genuine PNG alpha with no background, floor, cast/contact shadow, glow,
halo, embedded label or button frame. Centre each subject with consistent optical
weight and minimal safe padding. Preserve intrinsic colours with white image
tint. Check the actual icon on dark and selected blue surfaces at its display
size, including phone layouts, before accepting it. Retain original generated
files, prompts, hashes and upload receipts in the project.

Emote choices use assets/ui/emotes/illustrated-v1 with the existing 32 by 32
image boxes and separate 14-pixel captions at desktop scale. All eighteen
choices retain MenuImage, passive artwork/captions and disabled-state dimming.
Come here shows all four fingers beckoning together, with the thumb separate;
it must not use an index-only curl. Bow and Formal Bow need distinct shallow
and deep poses. Preserve the two rows, responsive sizing, shortcuts, labels,
targeting, world emoji, sound and animation behaviour. See EMOTE_ICONS.md for
provenance. This supersedes the earlier Material-style emote image rule.

The emote menu is fixed at the bottom centre inside device-safe bounds, with nine
choices per row and exactly two rows: 1 to 9, then Shift+1 to Shift+9. It never
scrolls or docks above the bottom tray. Fit its choice grid to the available
width on mobile, increasing the base icon and caption sizes before scaling so
they stay as readable as nine columns permit. Keep the target, Change and close
controls outside that scaling. While open, hide the main action bar, mobile
action row, expanded tray and its tooltip. Closing or disabling the emote menu
restores the dock under its existing HUD and covering-window rules. Do not
change gameplay emote requests, targeting or the existing shortcuts.

Cards use a consistent dark surface, measured image area and aspect-preserving
Fit. Do not stretch or crop a creature logo. Use a readable label and a separate
status line. Loading or failed artwork must be reported accurately; it cannot
grant discovery, hide a real error or falsely imply a complete visual check.

Full-garden and species-limit hatch choices share the same two-card layout.
Keep the new pet on the left and the lowest eligible garden earner on the right.
For the species limit, compare only existing pets of that species and use the
concise title You already have {count} {name}. Show each pet's icon, name, role and whole-Cash
hourly income above its own Select button. Recommend the greater earner with
the blue fill; ties favor the existing garden pet. Keep a corner close control
and explain below both cards that the unselected pet goes to storage. Short
screens scroll the comparison and actions together.

Failed hatch selections close the stale choice window and use the shared bottom
error banner. Never hide these errors below the comparison in scrolling content.
Keep successes and ordinary cancellation silent, and do not automatically retry
an uncertain selection. This follows Daniel's correction on 31 October 2026.

Hover, press and gamepad focus use the shared state layer. Feedback must not
move, grow, shrink or relayout the control. Sliders keep a stable rail/thumb
and retain their input ownership and drag cleanup.

## Layout and navigation

Respect device-safe insets. Main windows remain within the usable viewport.
Preserve the existing shared mobile covering-window and exclusive-window rules.
Opening one main menu closes the previous one. Closing a screen releases
focused fields and screen-owned input, connections and temporary views.

Player Stats opens from the Running, Swimming or Strength HUD buttons. Each
opens the Stats tab; there is no separate Stats action in the bottom dock.
Keep the shared exclusive-window registration, close/back controls and hidden
HUD guards when changing this entry point.
Running, Swimming and Strength use the generated transparent artwork in
`assets/ui/skills-v1`: a green running shoe, blue swimmer and purple dumbbell.
Use the same images in the HUD and Stats cards, preserving their colours,
aspect ratio and existing responsive icon boxes.
The Multipliers tab uses illustrated comparison cards with large multiplier
values, a concrete XP example and a single purchase action. Show the current
permanent boost and explain that higher tiers replace lower tiers and are sold
separately. Use confirmed client Roblox prices for charges and value comparisons;
show Best XP value only for a unique best additional-XP-per-Robux rate among
at least two verified available upgrades. Recalculate against the player's
current boost. Never imply popularity, a sale or savings without evidence.
Initial planned base prices are 99, 249 and 499 Robux for permanent 2x, 4x and
8x earned XP. Product IDs that have not been configured remain disabled and
show Coming soon with their planned price. Configured products use regional
price lookups, with Check Robux price when that lookup fails, and retain the
single action to native Roblox checkout. Owned and included tiers cannot be
repurchased. Cards use three columns on wide layouts and one on phones.
The Garden pets header shows the player's current server-authoritative total
pet income as $ x / second, right-aligned immediately before Close with a
16-pixel gap. Reserve separate space for the title and keep both readable on
phones, wrapping the income label when needed. Update from
CurrencyIncomePerSecond and show an unknown amount while the profile is loading.
This is the Garden total, independent of search, sort and tile selection.
A successful pet merge opens the new pet's birth certificate after the server
confirms that exact result in the owned pet list. Keep the new pet selected.
Do not open it for failed or uncertain merges, routine list refreshes, stale
merge sessions, a closed menu or disabled UI. The dedicated merge animation
remains a TODO in DEVELOPMENT_BACKLOG.md.

Use a stable order: title and window controls, tabs, summary/search/filter
controls, scrolling content, then relevant actions. Keep selection information
and action buttons separate from the card viewport. Avoid nested scrolling
unless a separate scroll region has a clear purpose.

Selecting another list item, updating its highlight or refreshing the same list
must preserve its scroll position. Row rebuilding must not briefly collapse the
canvas to zero. Clamp normally when the result set shrinks. A new search or
different list tab may deliberately start at the top; a new detail pane may
start at the top independently of its list.

On phones use at least two collection columns when the usable width permits,
with full-width biome headings. Desktop can add columns while retaining
readable card sizes. Do not add the mockup's right-hand creature detail panel.
Short landscape windows must keep a usable content viewport and reachable
actions; collapse supporting information before hiding required controls.

Prefer 44-pixel touch targets and 40-pixel standard controls. A 32-pixel compact
variant is reserved for short layouts and existing dense controls. Test touch,
mouse, keyboard and gamepad without hover-dependent actions. Escape and the
existing back/close controls must keep their documented behavior.

## Important notices only, 29 October 2026

Daniel restricted the bottom status banner to important information. It must not interrupt ordinary gameplay. Use GameErrorBanner only for a failed or blocked player action that needs explanation, uncertain transactions/custody, significant safety or availability problems, deliberate filtered administrator announcements and developer progress resets.

Do not publish pickups, drops, captures, rescues, returns, catches, deaths, day/night changes, welcome instructions, hatches, garden assignments, successful upgrades or routine purchase/sale/boost confirmations. Use the actual world/HUD/list change and the existing local panel status. Keep background read markers and sort-preference failures out. Failed hatch selections close the stale dialog and publish one shared bottom error banner, as Daniel corrected on 31 October 2026; never hide these failures in scrolling content or retry an uncertain selection. Existing purchase-shortfall feedback handles insufficient funds without a second banner; maximum-level prompts explain their own state.

Only error, warning, explicit announcement and the dedicated confirmed server-boost kind can publish or display. The boost kind follows the explicit 30 October exception above. Routine info/success and the retired BackyardMessage bridge are rejected, including legacy packets. Do not mislabel routine feedback as an error to bypass this rule.

Use a passive Frame and inactive message/icon/bounds. Only its separate 28 by 28 close control may receive input. Never make the whole banner a button, set Modal, bind movement keys, capture actions or automatically select a UI object. The notice stays above the action dock with an eight-pixel gap, at most 560 pixels wide and twelve-pixel side margins. BuilderSans text is 16 pixels, or 14 below 500 pixels wide, with measured wrapping, opaque semantic fill and no border.

One important notice may appear for four seconds (Daniel, 31 October 2026). Identical repeats do not restart its timer and have a short eight-second repeat interval from the first display. There is no queue or replay after expiry, dismissal, hidden HUD, camera UI hiding, respawn or teardown. Emote cooldown rejection is announced once per block instead of every second. The small close control supports deliberate dismissal without claiming the message body as a hitbox.

Red error, amber warning and blue announcement fills retain white readable text and semantic symbols. The historical GameErrorBanner name remains for compatibility. See UI_NOTIFICATIONS.md for the complete audited producer inventory, removals, retained exceptions and verification limits.

## Upgrade confetti, 29 October 2026

Daniel requested confetti whenever anything is upgraded and lacks it. Successful house, Garden and treadmill upgrades, pet-quality merges, newly activated server treadmill boost tiers and newly bought trails that increase the equipped speed multiplier use the existing silent confetti burst. PlayerProfiles emits the session-only UpgradeCelebrationSequence after the authoritative success. Failed, stale, unaffordable, maximum-level, replayed or uncertain operations never emit it. Loading, rejoining, resetting, equipping an existing trail, ordinary purchases, boost-stock grants and continuous running/swimming progress never count as a new upgrade.

EggDeliveryCelebration listens to that sequence alongside the atomic EggDeliveryNotice and reuses one bounded pool. Keep the established ordinary 1.3-second burst, with 36 passive pieces on High graphics and 18 for upgrades on Low. No upgrade sound, banner, modal, focus change, movement binding or control animation is added. First-species delivery has the separate banner treatment documented above. Hidden HUD/camera UI suppresses effects; repeated events reuse the pool and teardown disconnects all listeners. Existing hatch and away-reward confetti retain their own triggers without duplicate upgrade effects. Celebration sequences are not saved in player profiles.

Compile, Selene and analysis passed for the two changed sources with zero diagnostics. Offline checks passed 63 client effect assertions and 283 actual profile-adapter lifecycle assertions. These cover all six upgrade families, real upgrade/merge commits, failure/replay suppression, restoration, Low graphics, passive input, pool reuse and cleanup. Both sources were installed and verified by exact Edit readback in place 106981925573714 under plan 77ac55a8985c46e4a1ea4de4e12c9fe3, with no scene patches. Actual gameplay appearance and device/input acceptance remain untested; no gameplay, manual saving or publication was performed.

## Contextual hints

Public egg-drop confirmation closes when the player moves more than two studs
from its server-confirmed location. Recheck that distance on Confirm as well as
each Heartbeat. Dismissal keeps the egg, invalidates the visible token locally
and suppresses delayed replies for that location. Match the existing server
confirmation radius; moving away never submits a drop automatically. Guarded
plan 245ff7b0d9224de1a852ed3914b99c17 installed this behavior. Client confirmation
and drop-service checks passed, including movement, click races and delayed
packets. No gameplay, save or publication was performed.

Take egg uses Roblox's built-in ProximityPrompt with Style.Default. Keep
quality, species and weight as ordinary ObjectText, and retain native keyboard,
gamepad, touch and hold behavior. Do not replace the built-in interaction button
solely to colour the quality word. Prefer the built-in prompt wherever it meets
the interaction's needs, keeping controls consistent and simple. This supersedes
the earlier custom EggPickupPrompt and rich-text quality treatment.

Plan 2280adf19b0f48e5a493434a4210bb84 installed explicit default styles in both
egg builders. The two exact-source custom renderer scripts and their deployment
mappings were removed. All 84 installed TakeEgg prompts use the default style;
ten pickup properties per prompt were preserved. Source checks and existing egg
population/biome checks passed. Evidence is under output/native-egg-prompts.
No gameplay, manual save or publication was performed.

Keep tooltips to one short action or useful explanation, preferably below 60
characters. Do not repeat the adjacent item name or append unrelated rules.
Trap hotbar hints use the action and effect, such as Place to slow rivals.
Deployment limits remain in the equipped count label and shop/wiki guidance.

Roblox owns the built-in backpack tooltip font and container. Game-owned
world-space trap labels use BuilderSans Bold at a fixed 22 pixels, wrapping
within a 64-pixel area, without TextScaled reducing readability. Keep counts
and placement restrictions accurate. Panel body text retains the ordinary
shared size; this larger world-space guidance is an intentional exception.

## UX and confirmed state

Paid purchase buttons go directly to Roblox's native checkout after server
validation. Do not insert a game-owned confirmation, offer or completion window
between the player's Buy action and native checkout. Cash shortfalls select an
adequate pack through the same path. Keep one shared in-flight guard across
Cash, server boosts and permanent XP purchases; native prompt completion never
grants an item without a server receipt. Preserve confirmation for destructive
pet sales. Failed checkout preparation uses the existing important-error route.

Server boosts activate on verified purchase. Show only the next eligible tier,
its price, duration, whole-server scope and all-XP benefit. Do not show a Use
button or future locked purchase cards. Developers may see the clearly labelled
Dev: test boost action, backed by server Developer authorization and replay
protection. It must never open a paid prompt or fabricate a purchase receipt.

Show loading while authoritative data is unavailable. Do not display an
established player's progress as zero while a request is pending. Keep the last
confirmed data after a refresh failure, report the error and allow retry.
Show a clear empty state and a distinct no-search-results state.

Keep server authority for permissions, currency, purchases, custody and saved
discovery. UI selection is not a transaction. Report success only after the
existing server confirmation. Preserve drafts on failure, deduplicate queued
requests, retain existing ownership checks and clean up on close/destroy.

## Pets Collection contract

The Pets tabs are Garden, Stored and Collection. Collection is read-only and
uses the current full-body perspective artwork, as Daniel requested on 29 October.
Opening Pets always starts on Collection, including after browsing another tab.
Discovered cards show the creature in colour,
the current species name and a green discovered tick. Undiscovered cards show
the exact same full-body artwork's alpha silhouette in uniform white and the name ???.
Daniel confirmed white for every undiscovered cutout on 2 November 2026. Export
white RGB masks with the artwork's exact alpha and display them with white
ImageColor3. Tinting a dark source mask white cannot brighten its source pixels.
Hidden names never participate in search. Cards retain rarity/alphabetical
positions as discoveries change. One species has one entry, irrespective of
quality, size, number owned or pet nickname.

The tick is a green top-left overlay, with no visible Discovered caption. Keep
that status in the accessible label. Biome name and x / y discovered count share
one header row. Garden and Stored inventory tiles retain four rounded corners,
including artwork, label strips and interaction layers. Collection alone uses
rounded top corners and square bottom corners, as requested on 30 October.
Collection-specific images are named <creature>-CollectionArt.png beside the
creature's other images, with <creature>-CollectionArt-silhouette.png derived from
the exact final alpha. Preprocess these exports to 256 by 256 pixels with clear
margins. Retain generation masters and provenance outside the flat concepts folder.

Use saved DiscoveredSpecies, canonicalising legacy aliases. Successful hatching
reveals a species. Unhatched eggs do not. Selling, merging and removing pets do
not clear history. Refresh on open and after confirmed inventory changes.
The overall and per-biome totals count obtainable, current, non-retired species.
Unobtainable announced species have Coming soon and are excluded from the
obtainable total. Pool registration, not artwork alone, establishes availability.
Exclude retired and developer-only entries. Do not activate species as part of UI.

Sections follow this exact order:

1. Sunnyside Backyard
2. Clover Farm
3. Ripplewater Lake
4. Acorn Woods
5. Jungle Wilds
6. Cloudstone Caverns
7. Cloudtop Cliffs
8. Moonbeam Expanse
9. Golden Dunes
10. Ember Mountain
11. The Burning Depths
12. Rainbow Coral Reef
13. Deepwater Abyss
14. Lost World

Within a biome, sort from commonest to rarest using CreatureCatalog.SpawnScores,
then alphabetically for equal rarity. Empty assigned sections remain labelled
and may state that more creatures are coming soon.

## Verification and future changes

Read this document before changing UI. Extend shared tokens/components first,
then audit screens with direct styles so they follow the same scheme. Keep
game-specific theme changes isolated from other games' shared consumers.
Update these rules alongside an approved design change, rather than creating a
second contradictory style guide.

Check compilation and relevant behavioral regressions. Inspect actual installed
desktop, phone and short-layout views, including tabs, search, empty/loading/error
states, silhouettes, logos and discovered ticks. Verify counts, roster, ordering,
aliases and no hidden-name search leaks. Check existing Garden, Stored, merge,
shop and staff-tab behaviors after changing shared components.

Record source, installed Edit visuals and live acceptance separately. A mockup,
successful upload or source readback is not visual/gameplay acceptance. Restore
Studio before captures, use the writer lock and shared camera helper, inspect
actual scene content and clean up temporary fixtures. Do not start Play, save,
publish, modify the Asset Library or add ordinary-chat To review entries under
this document's authority.

## Current UI assessment, 29 October 2026

This contract records the existing shared implementation, not a new visual theme.
The following source assessment established the current reusable patterns:

| Area inspected | Existing pattern retained in these rules |
| --- | --- |
| `ui_theme.luau`, `ui_button_states.luau` | Opaque charcoal surfaces, blue primary actions, BuilderSans, borderless buttons and stable fill feedback |
| `ui_tabs.luau`, `ui_input_fields.luau` | Lighter tab surfaces, selected underline, bordered search fields and accessible labels |
| `garden_manager.client.luau`, `pet_collection_view.luau` | Garden/Stored/Collection navigation, sorting, search, creature icons, discovery silhouettes and stable lists |
| `egg_inventory.client.luau`, `hatch_replacement_ui.luau` | Explicit Hatch actions, confirmed server outcomes, safe-area dialogs and reachable short-screen actions |
| `pet_shop.client.luau` | Buy/Sell navigation, explicit prices, pending purchases, confirmation for permanent pet sales and server-confirmed receipts |
| `action_dock.luau`, `ui_window_controls.luau` | Shared bottom actions, exclusive windows, mobile input management and cleanup |
| `error_banner.luau` | One measured, dismissible notice above the dock with semantic severity |
| `admin_client.luau`, `social_emotes.client.luau` | Announcements and emote feedback now use the same notice view |
| `offline_income_popup.luau`, `progress_popup_pool.luau` | Structured reward dialogs and cosmetic value gains remain distinct from transient text messages |

The separate blue-outline Pets assignment notice, top emote toast and top
announcement panel were inconsistent and have been replaced by the shared
notification route for important notices. Shop receipts now stay in the shop,
and successful upgrades use silent confetti instead of a status banner.
Existing form status labels are contextual UI, not independent
toast implementations. This assessment does not claim every legacy screen has
been visually certified on every device. Source checks, native Edit views and
remaining live input/gameplay acceptance are recorded separately under
`output/ui-notifications`.

## Running stamina meter, 30 October 2026

Keep the passive top-centre STAMINA panel, running artwork, right-aligned whole
percentage, twenty segments and taller 50-percent restart marker. Reveal it
strictly below 90 percent and retain it until fully recovered. Hide it while
swimming, dead or using the existing hidden-HUD/camera modes.

The complete panel, including text, icon, track and fill, now breathes from its
fixed centre on a 1.2-second cycle. At 30 percent stamina its peak enlargement
is five percent; amplitude grows linearly to twenty-five percent enlargement
at 10 percent. Keep the full pulse at 10 percent and below, including empty.
Return to normal size each cycle, never below it. Scale the whole CanvasGroup
uniformly, with a centred AnchorPoint and one UIScale. Reserve the 1.25 peak
footprint when laying out the panel, keeping its centre and nearby controls
fixed. Base size is at most 460 by 70 pixels, shrinking to fit small viewports.
The full panel retains 80 percent opacity. Reset effects when hidden or removed.
This supersedes the earlier track-only two/three-percent pulse and exhaustion
contraction.

Keep the existing white-to-orange fill from 30 to 15 percent, soft red at
15 percent and below, gentle fill-opacity pulse, critical glow and brief empty
bar tint. These are intentional exceptions to blue progress.

YosocoolsGroup Heavy breathing (88247479280853) is running-stamina feedback
only. It starts at Sound.Volume 0.2 at 30 percent stamina, then rises linearly
to 1 at five percent. Five percent and below retain full volume. Recovery
reverses that curve; crossing above 30 percent starts a two-second linear fade
from the current audible volume to zero, then stops the loop. A brief low-stamina
dip during that fade does not interrupt it. Actual playback starts must be at
least 20 seconds apart, measured with a monotonic client clock. A continuing
warning is not restarted when the cooldown expires. A late-loaded sound starts
its cooldown only when Play actually runs. Reset, death, respawn and hidden UI
do not erase the cooldown. Swimming, underwater state, invalid running data,
hidden UI, character loss and teardown still silence immediately. Low swimming
oxygen never triggers it. Preserve loop continuity and loading guards.

## Low health warnings, 30 October 2026

Slow Heartbeat (176554627) and the passive dark red screen edges retain their
20-percent health threshold. Volume rises from zero at 20 percent health to
0.5 at empty. The screen centre stays clear. Hidden HUD/camera UI, death,
character loss and teardown clear warnings. Music volume remains independent.
Confirmed drowning bubbles and oxygen visuals retain their existing behavior.
Offline/native checks do not establish live listening or gameplay acceptance.

## XP gain feedback, 30 October 2026

Use the generated Running green, Swimming blue and Strength purple artwork
in each skill bar, in both the toolbar and Player Stats. Newly gained XP reveals
the matching greyscale artwork. Keep the internal colour boundary straight.
After one second without another gain of that skill, commit the greyscale portion
to its normal colour and show one accumulated +x XP popup. Never show the numeric popup
while that burst is still pending. Running, Swimming and Strength have independent timers.
Use authoritative TotalXP snapshots and the existing progression rules so
attribute ordering, level rollover and maximum level cannot duplicate gains.
Restoration, resets, invalid progress and hidden HUDs never replay old feedback.

A local +x XP popup begins at the visible XP bar's centre, pops outward and
fades away. Its target font is eight times the level label's current size, in
the skill colour, with a two-pixel black text outline and a three-pixel black
drop shadow. Fit oversized reward text within phone screens. Prefer the Stats
bar when that panel is open, otherwise its toolbar bar. Reuse at most one popup
per skill; repeated awards replace the previous transient label rather than
stacking text. Popups are passive and never resize controls, capture input or
change awarded/saved XP. See output/skill-feedback-ui for native views and
source/offline evidence. Live gameplay and audible acceptance remain separate.

### Illustrated XP fill, 1 November 2026

Keep the full artwork at the track's full width and reveal it with transparent
clipping frames. Never stretch the artwork to match the current XP fraction.
Use a full-width empty greyscale track under two reveal layers: greyscale
through the overall fraction, then colour through the committed fraction.
Tint only the empty track to RGB 72, 78, 88. Both fill images use white tint and
zero image transparency. Native 0.18-second Quad Out tweens reveal increases;
initial state, resets and level rollover set their fractions immediately.
Keep the existing one-second per-skill commit timing and reward cues.

Runtime artwork is 512 by 48 pixels, with identical alpha in each colour and
greyscale pair. Use SliceCenter (24, 20) to (488, 28), inset on both axes, and
SliceScale equal to the artwork's display height divided by 48. Full-height
slice bounds incorrectly rendered only the lower glow in thin tracks; native
desktop and phone previews confirmed the inset fixes this. Give empty, pending
and colour explicit ascending ZIndex values above the transparent logical track.
Keep the same full-width geometry at zero, partial and full progress; never
resize the texture to the revealed fraction. Reuse the existing uploaded art.
The logical HUD track stays six pixels high, with four pixels of artwork glow
above and below. Move its Y offset from 35 to 31 pixels on the wide layout and
from 36 to 32 on the narrow layout. Preserve icon, label and control positions.
The Stats track retains its eight-pixel height and existing position.
Keep originals, prompts, runtime PNGs and upload receipts under
assets/ui/xp-bars-v1. Native Edit layout evidence is under output/xp-art-bars;
it does not establish gameplay tween or reward acceptance.

## Immediate XP icon cue and reward audio, updated 2 November 2026

Every fresh confirmed XP increase may show a small cue at the centre of
that skill bar's pending white segment. Show only a skill-coloured plus sign
followed by the matching category artwork, with no amount. Prefer the visible
Stats bar, otherwise the toolbar. Use the existing bold font and skill colours.
Its resting scale is twice the earlier 48 by 28 cue, subject to screen fitting.
Native tweens grow it from 60 percent to 118 percent in 0.16 seconds, settle to
100 percent in another 0.16, then float 48 pixels clear of its source, straighten
its initial six-degree tilt and fade for 0.9 seconds. Top-tray cues float down;
lower cues float up.
Reuse at most one cue per skill. Ongoing gains share its active animation without
restarting or queueing it. Keep the effect passive and within screen bounds.
Hidden, restored, reset and invalid progress stay silent and do not replay cues.

Retain the separate accumulated numeric popup and its existing one-second quiet
timer. Place both XP cue types in the existing ScreenGui at DisplayOrder -1,
behind default-order UI, the HUD, windows and controls. Numeric totals have a
60 to 116 to 100 percent entrance and shrink slightly while fading. Simultaneous
totals share separate vertical bands in the existing update pass, fitting short
screens without overlap. Cash retains its own target size and display layer.

3 November 2026: immediate plus/icon cues are silent. Daniel removed the short
XP sounds while retaining the larger numeric reward sounds. Reuse the same
three sounds; skip unloaded or already playing clips, with no queue.
Only an actually displayed numeric burst above 100 XP requests the longer cue.
Exactly 100 XP and smaller Stats totals do not add another sound. Larger awards use the
approved SkillXPAudio tiers: 101 gives 0.8 pitch and 0.25 volume, rising to a
capped 1.5 pitch and 0.55 volume at 10,000 XP. See SKILL_PROGRESSION.md for the
full scale. Pitch uses native Sound.PlaybackSpeed and also changes clip duration.
Keep active reward clips uninterrupted and use full-clip playback. Never queue unloaded or hidden
reward audio. See output/xp-popup-polish-20261102 for scoped native and offline
checks. No extra update connection, particle, blur, asset or sound instance is
introduced. This is not measured gameplay performance or audible acceptance.

## Breath meter reference, 29 October 2026

Daniel's breath reference uses a navy rounded panel, a cyan
outline, illustrated cyan lungs and bubbles, the BREATH caption, remaining
seconds and a sixteen-segment watery cyan bar. This widget is an exception to
the shared blue progress accent. Keep its warning fill amber at ten seconds
and red at five seconds. Retain the existing progressive growth, shaking,
rotation, edge warning, desaturation, darkness, blur and confirmed drowning
audio. Only shake and rotate while underwater with both strictly less than
50 percent breath and strictly less than ten seconds remaining. Retain other
effects at their existing thresholds. The complete meter uses 80 percent
opacity through one CanvasGroup. Surfacing and lifecycle cleanup still reset those effects.

Keep the meter below the top status row, within safe screen bounds even when
enlarged. Smaller screens reduce its artwork, lettering and width. Warning and
refill hints remain readable. The complete meter is passive and captures no
movement or focus. The reference's 30s is example content; actual capacity
comes from the server's current Swimming level rules.

Toolbar XP number popups appear only when the settled burst totals more than
100 XP. Exactly 100 XP and smaller bursts still update and settle the progress
bar normally. Player Stats keeps its existing small-gain feedback.

## Costly button requests, 30 October 2026

Guardian theft !!! uses the existing gold 84-pixel text on a 140 by 100 native
BillboardGui. Use SizeOffset (0, 0.5) so its canvas extends upward, and cache
crown-to-head clearance plus 1.5 studs (0.42 metres) when the alert appears.
Follow the animated head in the existing update. Preserve the half-second
duration and distance/UI culling. Do not measure whole-model bounds per frame.

Expensive server actions use a client debounce and an authoritative server guard.
Allow at most one request per player and action every three seconds, and keep
that action locked for its entire pending request even when it lasts longer.
Keep ordinary navigation, passive reads, stopping and cancellation responsive.
Native purchase receipts retain their own idempotent processing.

Free hatch choices and inventory ready-egg hatches queue client-side while the
server guard is busy. For both GardenFull and SpeciesLimit comparisons, close
the window and release input immediately on either Select click, then run the
captured choice in the background. Do not keep a Selecting... window open.
Commit the hatch, pet destination and rewards only from server confirmation.
Temporary pre-mutation Busy replies are delayed and retried without an error.
Send two already waiting free hatch intents together in one native request;
the server processes each independently in order with the usual locks and
three-second pacing. Do not wait to fill a batch when only one intent exists.
Real failures use the existing bottom banner, even after the old window closed,
and must not close a newer comparison. Reset/teardown cancellation stays quiet.
Never replay an uncertain transport failure or an earlier successful batch item.

Assign best disables immediately and shows `Assigning...`. Only a confirmed
successful server snapshot changes it to `Best assigned`, still disabled.
Retain that state through refreshes and reopening the window. Reset it when
stored or Garden egg/pet membership, hatching, placement, following, quality or
ranking statistics change, or Garden capacity/species limits or the assignment
criterion changes. Name and Income share the same assignment criterion.
Routine income ticks, petting bonuses and seen flags do not reset it. Failures
and uncertain replies never show success; refresh authoritative state and
respect the three-second retry guard. Preserve existing sort-specific labels
when assignment becomes available again.

## Labelled action buttons, 30 October 2026

Action tiles retain the existing theme and selected blue fill. Use a raised
56-pixel icon, lowered by four pixels, and a centred uppercase caption in the same 13-pixel font size
as its hotkey, on the shared 80-pixel tile. Captions include SHOP, COLLECTION
and EMOTE. Keep minimal balanced visible padding above artwork and below text.
Touch tiles remain at least 80 pixels for readable captions, with existing safe
rails, scrolling and fullscreen-window suppression. Desktop tiles have a
64-pixel minimum. Toolbar skill displays use half their former width, 58 pixels
per skill, and compact L XX labels. Player Stats keeps its full level labels.

Mobile suppression requires visible covering content, not just an enabled
ScreenGui tagged MobileFullscreenUI. A closed Player Stats panel must leave
Shop, Pets and the bottom actions visible. Use existing window visibility
events to restore the dock after closing a covering window.

The treadmill purchase icon and Bubble, Honey, Spring, Banana and Water trap
icons use the matching set under assets/ui/items/illustrated-v1. Reuse each
trap image consistently in Shop, its tool texture and hotbar. Render only one
trap artwork layer per hotbar slot. Preserve prices, effects, shop/hotbar layout
and the distinct treadmill Stop control.

All sixteen trail Shop choices use matching illustrated ribbon icons from
assets/ui/trails/illustrated-v1, retaining their established palette and theme.
Rainbow has six joined colour bands with red at the upper edge. Keep Stars,
Aurora, Comet, Galaxy, Plasma, Solar, Void, Smoke, Fire and Lightning visually
distinct. Display through TrailShopArt.Draw with Fit and white image tint.
These Shop illustrations do not replace live trail textures, emitters or effects,
and never change prices, multipliers, ownership or equipment behaviour.

## Biome-backed birth certificates, 30 October 2026

Daniel explicitly requested the animal's biome landscape behind the full birth
certificate window. Use the shared current biome artwork, fill height and crop
the landscape sides, retain rounded image/tint corners, and overlay the prior
certificate colour at 40 percent opacity. UI remains above the tint. Keep the
background fixed when the content scrolls. Higher-quality aura borders use a
continuous soft falloff rather than visibly separated outline rings. This is
a certificate-specific artwork exception; other window surfaces are unchanged.

## Breath before stamina, 30 October 2026

Never show the breath and stamina meters together. Breath owns the meter slot
while underwater or while oxygen is recovering. The breath client publishes
its local BreathMeterActive presentation flag and immediately hides an already
visible stamina panel. Stamina retains its existing depletion/reveal state,
then resumes after breath fully recovers if stamina still needs displaying.
HUD hiding, death, respawn and cleanup preserve the priority. This changes
presentation only, not stamina, oxygen or their server calculations.
Source compilation/lint/analysis passed, with 65 stamina visibility checks and
30 breath runtime checks. Live HUD acceptance remains pending.
## Birth certificate reward presentation, 31 October 2026

Keep the biome artwork untinted. Do not add a colour wash, scrim or scene-wide
BlurEffect. White copy uses a stronger centred glyph shadow: three co-located
native black text layers with faint rounded stroke falloff at 2, 4 and 7 pixels.
There is no spatially offset duplicate word. Match the text's font, alignment,
wrapping, native sizing constraints and current opacity. Reuse layers on resize.

Use the four transparent, text-free reward cards under assets/ui/hatch-rewards-v1.
Display the existing purple Strength, green Running, blue Swimming and gold Cash
artwork with Fit scaling. Amounts and skill names are native localizable labels,
never part of a generated image. The supplied amount remains authoritative;
use CurrencyFormat.Balance for Cash, including two decimals for M/B/T values.
First-only gold heading and stars remain native so the heading translates.

31 October 2026, compact certificate correction: show the complete certificate
without scrolling. Canvas height equals visible panel height, scrolling is
disabled and the scrollbar is hidden. Allocate the portrait layout upward from
the visible 44-pixel OK button, with 12 pixels below it, four pixels between
reward cards and OK, four between the stats and reward heading, and two between
the name and stats. The creature viewport ends immediately above its name and
starts two pixels below the title. Short wide screens use the pet/name on the
left and stats, rewards and OK on the right. Their diagonal NEW/record corner
is 64 pixels so it clears the upper stat values. Preserve untinted artwork, native
rotation, dismissal and shared Primary styling.

Use two equal reward slots at every supported width, with an eight-pixel gap.
A single reward occupies one centered slot at exactly the same size as a pair.
Art width is min(264, (detailWidth - 8)/2), rounded down, at the retained 3:1
ratio. Keep the heading 28 pixels high, or 24 in short landscape, with two pixels
before the cards. Long translated headings may wrap within that existing row
on certificates below 300 pixels wide. Native labels remain inside the artwork: amounts use X40 to
95 percent and Y18 to 50 percent; captions use X40 to 95 percent and Y52 to
74 percent. Amount/caption font caps follow the rendered card height, up to
26/16, so small cards cannot overflow the art. Retain fitting constraints and
matching shadow constraints. Stats use their normal size where it fits, with
a smaller narrow-phone treatment and extra label width below 300 pixels.

Center the prepared model's actual bounding box at the preview origin. Fit a
fixed camera to the complete rotating horizontal envelope and vertical extent,
with a 2.5 percent safety margin. Do not change the pet's birth height, stored
scale, game model or rotation speed. This removes the old sphere framing's
unnecessary space without per-frame camera zoom or mesh inspection.

## Rare egg notice control, 31 October 2026

Use a passive top-centre Theme panel, radius 12 and horizontal padding 12.
Quality/creature uses BuilderSans Bold 20; the spawn/biome clause uses Medium
16. Egg icons remain 36 square and biome icons 28 square. Use a shared 6-pixel
spacing unit. The egg has a 2-pixel optical inset on each side to absorb its
transparent artwork padding, giving 4 pixels at both adjacent element edges.
The biome icon keeps a 6-pixel leading gap. Inline groups share the same
6-pixel unit and a 60-pixel card height. Narrow
layouts use two rows in an 88-pixel card. Text may shrink to 12 when necessary.
Reuse inventory egg artwork and the Collection biome atlas with Fit scaling.

Reserve the 120-percent overshoot inside safe viewport bounds, below the toolbar
and active boost cards. Enter at 60 percent, reach 120 percent in 0.2 seconds,
then settle to 100 percent in 0.1 seconds. Fade and shrink to 60 percent from
4.7 to 5 seconds. Each announcement and its queue slot last five seconds.
The card has no input, close button, focus or Modal behavior.
Popup, chat and sound share one queue. See WILD_EGG_ANNOUNCEMENTS.md.



## Unified inventory and numbered shortcuts, 31 October 2026

Inventory replaces the standalone Eggs window, including its dock entry. Use
T and I. Pets stay separate; H stops following. All, Eggs and Items show the
250-slot bag. Garden shows garden eggs and retains on-card Hatch/Hurry hatching
through the existing purchase and hatch services. Garden eggs are not bag slots.
Select does not hatch an egg. Keep native world hatch and developer test prompts.

Use the shared opaque panel, Theme fonts, ButtonStates, Tabs, InputFields,
Material icons, WindowControls and virtualized InventoryGrid. Panel width is
94 percent of safe available space, capped at 960 by 720. Leave the native
bottom hotbar exposed. Header is 56 pixels, or 44 in short landscape; outer
padding is 16, control gaps are 8, tabs are 44 high or 36 in short layout, and
search is 44 or 36 high with 38-pixel icon/clear gutters. Normal cards use a
128-pixel minimum; short bag views use 80 and garden action tiles add 40 height.
Normal details are 132 high with 44-high actions; short landscape uses a compact
44-high action footer and hides duplicate details. All counts are occupied
slots, with stack quantity shown on the tile. Warn at ten free slots or fewer.

Click a bag tile to select and equip it; there is no separate Select button.
2 November 2026: egg cards are click-only, with no native drag detector.
Clicking an owned bag egg immediately projects that egg into slot 1 using the
existing ordered shortcut-assignment queue, then reconciles server confirmation.
Rejecting an older click must preserve a newer selection. A held wild egg blocks
this assignment immediately. Garden eggs remain placed, with their own actions.
Use a primary Drop action and an ordinary secondary Discard action. During
confirmation, show Cancel and turn only the final Discard red. Creature and
egg tiles remain artwork controls. Discard requires a second deliberate click
and an unchanged stack quantity. Keep confirmed data through refresh failure.
The whole general-item stack is discarded; dropping a held stack releases one
item instead. A display-grouped egg card discards one saved egg and uses the
existing one-item confirmation.

The numbered dock has ten stable controls: 1 to 9, then 0. Slot 1 is egg-only
and is hidden when empty, including while Inventory is open. It appears for a
selected owned egg or carried wild egg. This 1 November update supersedes the
earlier always-visible slot and empty silhouette designs.
Show only the selected egg there. Other items, including the stick, use 2 to 9
and 0. Reject eggs in equipment slots and equipment in slot 1 on the server.
Preserve
its existing icon tile appearance, native horizontal scrolling and overflow
paging. Show empty equipment drop targets while Inventory is open. Hide other
navigation actions during inventory management, retaining Drop item and the
hotbar. Inventory is the explicit mobile-window exception that keeps this dock
visible. Reserve space above Dock.top; do not place its panel over the targets.

Use a native UIDragDetector on the tile image, CustomOffset, and a passive
72-pixel image ghost only after eight pixels of movement. Native GUI hit-testing
finds the destination. The original card stays in its virtualized grid. Dragging
assigned equipment swaps reservations; assigning an unassigned item replaces that
shortcut without deleting anything. Garden eggs are not shortcut candidates.
Closing, requests and destruction cancel the ghost. No drag polling loop runs.

All confirmed carried inventory types must stack where interchangeable.
Non-egg items support dragging to their permitted hotbar slot, including
wearable equipment. Eggs use the click-only assignment described above.
Keep different egg traits, birth data, garden placement and incubation timers
separate. Visual egg grouping retains individual authoritative IDs. Quantities
above one use a bottom-right badge above the item name on cards and hotbar
slots. Trap stock also shows x1. Do not repeat quantity in the subtitle.

For a validated shop purchase, show existing item artwork to the left of the
Inventory tray icon, then move it into the icon over one second while scaling
to ten percent and fading out. Use native TweenService and CanvasGroup, passive
input behavior, DisplayOrder 98 and the actual dock icon geometry. Retain a
passive Inventory destination while shop navigation is suppressed. Bound effects
to four at once and clean them up on completion and teardown. No frame loop or
routine success banner is needed. Emit once after authoritative confirmation,
never for a prediction, rejection, unknown outcome or equipment-only toggle.

Inventory egg Drop reuses the existing action, including the public-drop confirmation and own-garden placement. Bind the selected egg ID so a stale UI action cannot drop a different held egg.

## Fixed boost and stamina controls, 31 October 2026

Server boost cards use the existing dark panel, window radius and passive aura.
Keep scale exactly 1; animate aura opacity only. Use 12-pixel side padding,
16-pixel bold heading, 14-pixel medium attribution and countdown, 16-pixel bold
multipliers and 12-pixel captions. Attribution sits at the upper right and wraps
below the title on narrow cards. Center the complete stat group horizontally,
with four equal cells on wide cards or a two by two arrangement on narrow cards.
Each cell uses an 18-pixel icon, a four-pixel icon/value gap and its caption
beneath. Countdown is centered 26 pixels above the card bottom. The optional
Increase boost action uses the shared Primary role, a 44-pixel touch height,
12-pixel side inset and the existing native purchase flow. The button is the
only interactive card surface. Hide it when no stronger configured tier exists.
Do not replay effects because a card repaints or a late join reads attributes.

The stamina panel, track, fill opacity, labels and icon stay fixed. Below or at
30 percent, the three centered warning outlines expand by up to two pixels
per side and vary opacity over the existing 1.2-second cycle. Preserve the brief
empty-stamina tint. This visual effect does not alter stamina or its audio.

1 November bottom-clearance correction: the stamina panel is 78 pixels tall
on desktop and 70 pixels on narrow screens, adding eight pixels below the
unchanged progress track. The track remains centered at Y54 with height 20
on desktop, or Y46 with height 16 on narrow screens. The extra bottom space
contains the outer warning outline and its stroke at peak pulse.
Installed plan fc07439e616b402c8279110441b17e2d. Native Edit measurements at
peak pulse leave six pixels below the outer stroke on desktop and eight on
mobile. Both captures were inspected; 65 existing visibility checks and source
diagnostics passed. Evidence: output/stamina-bottom-spacing. Gameplay was not
started, and no place save or publication occurred.

Shop search retains its title row and existing search/clear behavior. Use the
shared Fields decoration, a 22-pixel Material search icon centered 20 pixels
from the field's left edge, 38-pixel left text padding, 44-pixel right padding
and the existing 44-pixel clear target. Reserve eight additional vertical pixels
between the search header and following tabs/content, including short landscape.
Existing tab, tile, navigation icon and top-tray appearances remain unchanged.

## Credits hierarchy, 31 October 2026

Use one large bold line per name and role: Daniel Barnes - Creator & Lead
Developer, then Barnathy - 3D Artist. Follow with a medium Playtesters heading
and two columns of small regular tester names. Settings uses title 20, heading
18 and body 14, with a 12-pixel column gap and 4-pixel row gaps. Keep automatic
height and wrapping instead of shrinking or clipping full names. Preserve the
roster's left-to-right order, role translations, public acknowledgement-only
semantics and the removed asset-creator section. World-board equivalents are
48, 36 and 28 pixels within the existing fixed native canvas.
## Icons and text on the same row, 1 November 2026

Always vertically center an inline icon with the text beside it. Give the icon,
label and any trailing value a shared row center, with TextYAlignment.Center
for text. Do not align an icon's top edge with the first line of text. Preserve
the common center when text wraps, fonts change or the layout becomes narrow.
For intrinsic transparent artwork, inspect the visible symbol as well as its
ImageLabel bounds; excess transparent padding must not shift its apparent center.
Apply this to stat rows, status rows, buttons, badges, menus and future controls.

The Statistics skill headings use a shared center at Y17: the 32-pixel icon
starts at Y1 beside labels at Y6 with height 22. Stamina's header center is Y22
on wide layouts and Y20 on narrow layouts. Shared generated Material captions
always center vertically beside their glyph, even if the source button requests
top alignment. These rules do not convert stacked artwork and captions into
inline rows, or change card, hotbar, emote and reward illustration layouts.

## Biome recommendation subtitles, 1 November 2026

Each official biome except Sunnyside Backyard has a smaller centered recommendation
below its ground title. Backyard keeps only its name. Reuse its existing SurfaceGui, BuilderSansBold, pale green text and
black stroke. Keep the main title's world position. Extend the invisible sign
height from 4.95 to eight studs beneath it. At 32 pixels per stud, the main
title retains its first 158 pixels; the subtitle starts at Y166 and has a
72-pixel height. Use native scaled text with a 32 to 64 font-size constraint.
TextWrapped must remain true while TextScaled is enabled, because native
Roblox turns scaling off when wrapping is subsequently disabled.

Use RECOMMENDED LEVEL {level} RUNNING for land progression and SWIMMING for
Coral Reef and Deepwater Abyss. Both templates have Indonesian translations.
Daniel selected Clover Farm level seven and proportional reductions elsewhere:
max(1, round(GuardianEscapeLevelByBiome[id] * 7 / 9)). These are display hints,
separate from guardian speed, level gates and progression calculations.

All fourteen installed captions passed native scene readback. Farm, Coral Reef
and Moonbeam Expanse captures were inspected and the camera/FOV restored. The
focused builder, placement-preservation and translation suite passed 56 checks;
the language client passed 418. Source diagnostics passed. Existing broad
tests/jungle_split.luau stops at its old fixed Jungle Z0 expectation, and
tests/game_text.luau stops at its compound Land/Water/Sky translation assertion.
Those failures precede the new recommendation checks; this task did not alter
biome bounds or the translation engine. No gameplay, save or publication.
See output/biome-recommendations/native.json and its three screenshots.


1 November correction: the first biome has no recommendation subtitle or extended
sign height. Water-route titles and subtitles face players arriving from the east;
cave and sky-route lettering faces arrivals from the west. Side-route lettering
is centered across the path to avoid walls. Main and fire routes retain their
existing orientation. Native readback covers 13 recommendations and the title-only
Backyard. The focused suite passes 80 checks. Gameplay remains untested.

Cave lettering sits above the bumpy entry floor at X225 before the raised hill climb;
with 2.2 studs of clearance; the previous X345 position was obscured by the ascent. Edit captures confirm
readable cave and Coral Reef lettering from their respective approach sides.

## Flower gift offers, 1 November 2026

Use the shared dark theme and raised Primary Accept/Secondary Reject word
buttons inside a compact passive top-right card, 320 by 144 pixels at desktop
size, capped to the safe viewport width minus 24. Offset it 12 pixels from the
right and 86 from the safe top (78 in short landscape). Keep 12-pixel internal
padding, 48-pixel flower artwork, 14-pixel wrapped offer copy, 12-pixel rarity and
44-pixel actions. Icons and their text share the same vertical center. There is
no full-screen frame, Modal, automatic keyboard/controller selection or input
binding. Do not make the gameplay wait for the recipient to decide. Hide the
card in a chase or behind full-screen UI. Expire it after twenty seconds and
never queue old offers for later display. Native E prompts remain the giver's
interaction. Acceptance/rejection closes the card on click; only confirmed
server inventory grants become usable.

## Shared house placement input, 2 November 2026

Boom Box and pot previews share HousePlacement. Q rotates left and E rotates
right in 15-degree steps while a world preview is active. Use the native
ContextActionService priority binding only for that placement lifetime; pass
typing through and release keys on cancel, menu suppression, unequip or teardown.
Keep existing pointer/touch/controller placement and cancel actions. Rotation
must update the local preview without a server request and persist with the
confirmed placement. Validate the rotated footprint on both client and server.
Use a complete native Model and PivotTo for its nested geometry. Preserve
existing green/red feedback, palette and layout. Evidence:
output/boombox-placement-rotation/report.md.

## Pot placement preview, 1 November 2026

Use the existing translucent pot preview with Theme.Colors.success for valid
placement and Theme.Buttons.Warning.fill for invalid placement. This requested
world-preview colour exception does not introduce button styles. Do not show a
redundant Place pot screen button. Keep direct world placement and the shared
cancel controls, with native input processing respected. Reuse the server's
placement geometry rules locally for immediate colour feedback.

## Emote placement, 1 November 2026

Emote uses the left action rail at order 3, directly below Shop at order 2
and Collection at order 1. Its C shortcut and existing menu behavior remain.
Source diagnostics passed and guarded plan ec02199989a343d5b6612809b0b5a386
installed with exact readback. No gameplay, save or publication.

## Secondary inventory Drop button, 1 November 2026

The inventory Drop action uses ButtonVariant Secondary and the shared secondary
fill, matching its supporting-action role. Its behavior and placement are
unchanged. Source diagnostics and exact guarded installation passed under plan
306629a2923c42808e06f5e024f566aa. No gameplay, save or publication.

## Tray quantity suffix, 1 November 2026

Historical design, superseded by the image-corner quantity overlay below.

Item tray captions reserve measured width for the complete quantity suffix before
truncating the name. Counts above one remain visible at the bottom, for example
POWERTHI...x2. The existing trap count also retains x1. Desktop and touch sizing
use the same caption font and fixed available width; names truncate instead of
shrinking text. Counts update through the existing InventoryQuantity listener.
The old count above the caption now occupies this suffix position.

Two sources passed diagnostics and exact Edit readback in guarded plan
e3b63a79ec444dcb9a2feec9976f6d15. Offline caption checks passed 72 assertions for
short and long names, two font sizes, counts through x9999 and single-item reset.
Native rendering and gameplay remain untested. No place save or publication.

## Tray image-corner quantity overlay, 2 November 2026

Hotbar stack counts use a separate bottom-right overlay on the item image,
matching Inventory cards. Image overlap is allowed. Never append the count to
the item name or reserve caption width for it. Keep the name centered below.
Use Theme bold white text with a dark native UIStroke (2 pixels, transparency
0.15). Anchor the label at its bottom-right, at the image area's lower edge,
with a 6-pixel right inset in the dock's 80-pixel base coordinates. Desktop
quantity text is 16 pixels; touch text is effectively 14 pixels. Existing count
visibility, x1 trap handling and quantity updates remain unchanged.

The installed shared dock and hotbar passed source diagnostics and native Edit
previews at desktop, phone and small-phone sizes, including x9999. Focused
overlay checks passed 192 assertions; hotbar paging passed 27. The separate
mobile dock fixture is stale because it still expects the former Eggs action.
No gameplay, place save or publication was performed.

## Shore exit hint, 1 November 2026

Reuse the existing blue bottom notice for the explicitly requested `Exit water
(Space)` control hint. Retain its font, measured width, four-second lifetime,
small close control, passive body and dock spacing. This narrowly scoped
contextual hint must not displace an existing important notice. Read the
existing shoreline sample rather than adding a UI raycast loop. Use the matching
A or up-arrow control label on controller or touch. See UI_NOTIFICATIONS.md.

## Boost banner clarity, 1 November 2026

Daniel requested removing the unclear decorative Cash + XP banner icon and
using a 20 percent transparent background. Income cards now omit that artwork
and its empty wide-layout space. Keep the familiar running, swimming, strength
and Cash stat symbols, clear xN Cash and xN XP title, attribution, timer,
Increase boost and fixed card scale. Both boost cards use BackgroundTransparency
0.2, with fully opaque text and controls. This is a scoped boost-HUD exception
to the ordinary opaque panel rule. Hatch artwork is retained.

## Consistent movement terminology, 1 November 2026

Use Running for the land movement skill, Run XP for compact HUD captions and
run speed for movement bonuses. Biome recommendations say RUNNING. Apply the
same concept in translations, using Berlari for the Indonesian skill label.
Keep Swimming distinct. Internal state and attribute identifiers are not
player-facing terminology and do not need a compatibility-breaking rename.

## Settings inside the top HUD, 1 November 2026

The Settings gear is the final clickable item after Strength inside the shared
clock, Cash and XP pill. CurrencyHUD reserves a 44 by 44 pixel slot and one
matching divider, with the existing 24-pixel Material settings glyph centered
on both axes. Keep its transparent icon-button treatment, shared hover/press
feedback and accessible Settings label. It is not a raised word button.
Desktop retains its wider skill cells. Mobile allocates the final slot within
the existing safe-width row. The entire row retains its 44-pixel height.

PlayerSettingsClient exposes the existing window through its local OpenSettings
BindableEvent. The former separate topbar/fallback launcher is removed. Opening
Settings needs no server call; existing window close, language, volume, graphics,
optimistic saves and HUD suppression remain. No player data format changed.

Guarded plan 64cab7d0368840d6aa18be06f3b0d2a0 installed both sources with exact
Edit readback and zero compile, lint or analysis diagnostics. Offline checks:
top toolbar 73 and Settings UI 28. Their fixtures were updated for the shared
opener and current image-progress, theme and cleanup dependencies. Native Edit
views at desktop, 390-pixel phone and 320-pixel phone widths were inspected,
with the gear inside the pill and no overlap. Camera state was restored and
all preview fixtures removed. Evidence: output/settings-toolbar. Live input
and gameplay remain untested. No place save or publication occurred.

## Extreme narrow HUD bounds, 2 November 2026

CurrencyHUD now budgets the clock and wallet inside the available width after reserving Settings and spacing. This fixes the 220-pixel geometry overflow without changing the native 44-pixel row height. At extreme widths only, the two numeric labels use native TextScaled with a UITextSizeConstraint capped at the current font size. Ordinary layouts retain their existing font sizes and wider skill columns. Existing Cash and Settings navigation remains.


## XP popup foreground, 2 November 2026

PlayerSkillXPFeedback uses DisplayOrder 98 so both small and accumulated XP gains emerge in front of the top tray (87) and Stats panel (97). Keep the separate passive overlay and existing source anchors, motion, input behavior and hidden-HUD suppression. This supersedes the previous negative XP overlay order.

3 November 2026: the server-wide hatch-speed boost card no longer displays its decorative egg artwork. Its multiplier, attribution, countdown and upgrade control remain. The income/XP boost stat symbols retain their existing treatment.

3 November 2026: numbered egg slot 1 reuses its existing Quantity label to show xN from EggInventoryCount, across every carried egg species and trait. Show x1 for one egg and hide the count at zero; garden eggs are excluded by the authoritative InventoryEggs projection. Refresh on EggInventoryCount changes without a new request or polling loop. Other item and trap quantity behavior is preserved. Guarded plan 2a30ad698a0f4865bc7688c96844bf3b installed with exact source readback; 30 offline hotbar assertions and source diagnostics passed. Gameplay was not started, saved or published.
