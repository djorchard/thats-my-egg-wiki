## Premium shop wallet and native Robux captions, 10 November 2026

Cash, Boosts, XP and Donate omit the duplicate Cash balance and coin
icon inside the shop header because the main top HUD already displays them.
Keep the existing grocery and aisle wallet visibility, search, tabs, Close,
responsive geometry and input cleanup.

A verified Robux purchase action reads Buy for followed by Roblox's native
Robux text glyph (utf8.char(0xE002)), a space and the confirmed price. Reuse
the existing Trails checkout caption and Theme.Fonts.button. Donation actions
retain Donate or Donate again: before the same glyph and amount. Keep the
textual Robux unit in passive price explanations and accessible descriptions
where useful. Existing glyph-based purchase captions remain valid.

Unverified, unavailable, owned, maximum-level and Processing... states retain
their existing captions and checkout guards. This is a caption and visibility
change, with no new renderer, icon asset, checkout, polling or layout worker.

## Settings tabs and display preferences, 10 November 2026

Settings uses three native shared tabs: Settings, Icons and Language. Keep
their canonical icons and the current-language flag on the same row as Close,
without a duplicate Settings title. Measure captions independently of their
current fitted bounds so repeated tab changes keep stable widths. Keep
Language as the first row in Language, followed by Distance unit and Weight
units. The remaining preferences stay in Settings. F1 opens the same window
without consuming typing, Roblox menus, hidden-HUD or placement input.

Icons exposes Hide then Show for the shared action-tile allowlist, including
Sprint and Sneak. Default Emote, Trail and Discover to hidden on mobile and
visible on desktop. Persist independent device preferences, project changes
immediately and restore confirmed values on a failed request. Numbered hotbar
slots and their navigation controls have no hide setting. Community, Drop
fake egg, Music and Stop treadmill also have no hide setting, and older
hidden preferences cannot suppress those actions. Reuse actual input
mode for responsive layout, independently of sizing and visibility choices.

Distance unit defaults to Km and also offers Studs and Miles. Format public
speed displays consistently in the toolbar, stats, tooltips and local records,
using Studs/s, km/h or MPH as appropriate. Jump height, jump bonuses and total
distance use the selected distance unit with sufficient precision. Unit
selection changes presentation only. Keep movement and stored values intact.
See SETTINGS.md for the official conversion source and receipts.

## Compact mobile HUD and ordered size choices, 9 November 2026

Settings choices progress from smaller or lower to larger or higher. Graphics
is Low then High, and effects are Off then On. Button sizes are Auto, Tiny,
Small, Normal and Large in that order. Auto remains the default. Touch bottom
tiles use 48 pixels for Auto, or 36, 44, 56 and 64 pixels for the explicit sizes.
Touch side tiles use 44 pixels for Auto/Small, 36 for Tiny, 52 for Normal and
60 for Large. Artwork fits proportionally. Tiny is an explicit compact choice.
Size selection does not change the actual input mode or desktop meter design.

Landscape touch trays and their 44-pixel Previous/Next controls stay between
the native joystick and jump button. Portrait uses two rows above those native
controls. Read their current bounds and relayout when the controls move, resize
or become visible. Keep every action reachable through native swipe and paging.
Touch buff icons fit the tray corridor and end four pixels above its top.
The mobile Home pointer sits inside the side trays rather than overlapping them.

Mobile stamina and normal breath panels are at most 320 pixels wide and 40
pixels high. A breath warning can add an 18-pixel hint. Retain breath priority,
stamina reveal rules, urgency colour and existing desktop layouts: standard
stamina is 460x78 and breath is 600x76. Mobile announcements stack below the
visible meter. Reuse the actual view constructors and existing icons.

Evidence: output/mobile-compact-hud-20261109, including native clearance and
ordered Settings fixtures, plus labelled Edit composites in screenshot/needs-review.
Gameplay, real touch input and production persistence acceptance remain pending.

## Mobile tray overflow and stable Cash captions, 9 November 2026

9 November grass correction: garden grass keeps its original colour for every
viewer. Do not tint or desaturate other players' lawns to make the own lawn
greener. The separate owner and visitor house marker designs are retained.

Overflowing bottom rows retain native swipe scrolling and show Previous and
Next controls with 44-pixel minimum width. Reuse the canonical chevrons,
Theme row surface and ButtonStates feedback. Disable the unavailable endpoint
without moving its button. Keep the current scroll position through relayout,
clamped to the valid canvas. Fitting rows and desktop retain their full width.
HUD/camera hiding, placement and covering-window suppression include the pagers.
Do not shrink or distort illustrated tiles to expose additional actions.

CashButtonCaption uses explicit source-size text widths measured with the
button font role. Fit that stable width uniformly into the available button
area. Do not feed scaled automatic-layout bounds into a repeated sizing loop.
Prefix translations, amount changes and ancestor UI scale still update the fit.
Preserve the raised button renderer, shared Cash image and purchase authority.

Native Edit paging checks pass at 320x568, 390x844, 844x390 and 932x430, including
both ends, covering-window and HUD suppression, and desktop restoration. The
96-pixel Cash caption previously oscillated between scales about 0.487 and
0.562. After repair, 70 samples at each of 96, 140 and 220 pixels remain steady.
Home direction is hidden inside Home and follows its existing offscreen/HUD
rules outside. Evidence: output/mobile-tray-navigation-20261109 and labelled
Studio Edit stress captures in screenshot/needs-review/studio/2026-11-09/mobile-tray-navigation.
Camera restoration and fixture cleanup pass. Actual iPhone input and gameplay
remain pending in TME-306. Plan 0d40d5579899482fadc63e719ed63de1 installed the
three UI sources with exact readback. No Play, place save or publication.

## Mobile toolbar beside native controls, 9 November 2026

On touch devices with at least 280 pixels of usable TopbarSafeInsets width,
place the existing time, Cash, skills and Settings pill on Roblox's top row.
Use the actual safe ScreenGui size and reserve staff launcher space. The
passive developer version label remains behind higher-priority UI on mobile.
Narrow portrait regions retain the below-bar fallback. Do not position a bar
over Roblox controls or scale artwork out of proportion.

The current CurrencyHUD renderer, fonts, artwork and skill controls are reused.
Five actual placement cases and 88 existing toolbar checks pass. Two inspected
Studio Edit constructor fixtures place 524-pixel and 420-pixel pills inside a
604-pixel simulated native safe rectangle. Both camera restorations and fixture
cleanup passed. These fixtures do not establish actual phone/CoreGui acceptance.
Evidence: output/log-repairs-20261109/mobile-native.json and
screenshot/needs-review/mobile-topbar-20261109. Installed plan:
ae6512d063734732a535d609a006d8bb. Gameplay, saving and publication remain pending.

## Injured-player toolbar border, 8 November 2026

9 November earnings display: floating animal earnings use CurrencyFormat.FullAmount
after the existing whole-unit rounding. Examples are +999, +1,000 and
+1,234,567. This is presentation only; earning rates, timing and saved balances
are unchanged. The existing popup pool and reward typography are retained.
Plan 5489032267554782ae43f96a045a8d72 and
output/audio-and-income-20261109/verification.json retain installed evidence.

9 November correction: ordinary game scripts cannot connect the restricted
CoreGuiChangedSignal. PlayerHealthBorder now uses supported protected toggles
and the existing one-second CoreGui check pattern. That exception previously
aborted top-toolbar initialization. Four current native Edit layouts and exact
installed readback pass; see PLAYER_HEALTH.md and TME-296. Earlier evidence
below did not exercise real game-script event permissions.

The player's health meter sits behind the entire time, Cash, skill and Settings
toolbar as a six-pixel curved border. Reuse the existing CurrencyHUD pill and
its native UICorner curvature. PlayerHealthBorder uses transparent native
frames, UIStroke and a left-to-right UIGradient cutoff. Its inner stroke edge
meets the toolbar's outline, leaving the toolbar background, text, icons and
controls unchanged. No artwork or separate decorative renderer is introduced.

Remaining health uses the existing success, warning and danger colours. The
border appears only for a living injured character, hides at full HP, and
follows HUD/camera hiding, health buffs, Humanoid arrival and respawn. The
default CoreGui health meter is suppressed through StarterGui's supported
Health toggle, with restoration on owner teardown. Health, damage and healing
remain server-owned; the existing heartbeat and screen-edge warnings remain.
The existing layout reserves six extra pixels per outer edge on phones.

Plan 2d2d8e6e48664eb9b58b0c533304d9a8 installed the module and client integration
with exact Edit readback. Thirty health/CoreGui/lifecycle checks and the 88-check
toolbar suite pass, with zero compile/lint/analysis diagnostics. Native geometry
checks cover desktop, portrait phone, short landscape, injured and full HP.
Capture evidence and source hashes are in output/player-health-border-20261108.
These are isolated Studio Edit fixtures; gameplay and actual CoreGui transitions
remain untested. No place save or publication was performed.

## Callout background transparency, 8 November 2026

Egg callouts and garden or following-creature callouts use 20 percent background
transparency (80 percent opacity), following Daniel's request for a slightly
stronger background after the 30 percent version. Set ImageTransparency on the
existing QualityPanel artwork only. Preserve text, icons, stat surfaces, buttons
and layout opacity. Native Edit desktop and phone fixtures are retained under
output/callout-background-opacity-20261108/native-20percent. These fixtures do
not establish live Billboard appearance or input acceptance.

## Egg callout visibility and guardian clearance, 9 November 2026

Egg callouts retain the existing artwork, typography, action buttons and
bottom-centre BillboardGui anchor. Their preferred pointer is 0.5 studs above
the actual egg bounds top. The fixed ground-plus-10-stud minimum is retired
because it can place a small egg's card outside a close camera view.

Project the complete card into the viewport and keep its content inside the
screen margins. When it would cover a nearby CombatGuardian, choose a clear
position beside, above or below that guardian. Prefer the closest clear
position and stable placement across updates. If a narrow screen has no clear
position, minimize overlap rather than pushing the pickup action off-screen.
The pointer remains above the egg when there is room; screen fitting and
guardian visibility take priority when it must shift. StudsOffset remains zero.
The existing renderer also limits its width by available screen height, keeping
short landscape cards visible. The existing focus heartbeat handles camera
movement and viewport changes; no additional frame worker is introduced.
Pet callout placement and all server pickup rules are unchanged.

159 offline placement checks pass. Native Edit fixtures retain small/large
egg bounds, zero projected guardian overlap in four scenes, three phone/short
viewport fits and about 0.014 to 0.015 milliseconds per placement with one
guardian in a controlled 100-call sample. This is not a mobile frame-time
claim. The actual card and a static SurfaceGui copy were absent from the
captured viewport pixels despite valid native layout properties. Those captures
do not establish visual acceptance. Keep the real gameplay appearance check in
TME-214. Evidence: output/egg-callout-visibility-20261109. Both Edit fixture
cleanup and camera/selection restoration passed. No place save or publication.

Earlier fixed-height and camera-relative receipts remain historical evidence,
including output/guardian-egg-watch-20261108/native-callout.json.

## UI ownership of E, 5 November 2026

A visible foremost window with a primary E action owns the key. Register through
WindowControls.ownPrimary, check isForemost in the existing handler, and call
consumePrimaryKey before the action. The press stays consumed through release,
even when Begin closes its window. Restore world prompts after dispatch ends.
Preserve manual text focus. ActionDock.blockWorldPrompts shares one original
ProximityPromptService.Enabled value across PrimaryUI and HousePlacement owners;
the last owner restores it. Never snapshot an already suppressed false value.
No frame loop or network request is added. Focused and native Edit checks passed;
real keyboard and touch acceptance remain pending.

## Pet callout cell order, 5 November 2026

The garden pet callout uses two equal columns. Its first row is creature title on the
left and quality on the right. The second row is income on the left and DNA
on the right. Keep each stat icon and its shadow with the corresponding value,
vertically centred on the same row. Visible action buttons follow underneath.
Reuse GardenCreatureTile, the existing callout artwork, quality underlays,
DNA reveal and shared action controls. Preserve desktop/compact dimensions,
text-fitting caps and prompt availability. Egg callout order is unchanged.

The following pet callout keeps the name and quality above two action rows.
Send home (H) and Mount (M) share the first row when mounting is available.
Praise (R) spans the second row and becomes Feed while holding suitable food.
The top and bottom clearance matches the sides of the callout body. Native
nine-slice sizing preserves the existing bevel and tail. The shared keycap
artwork follows the current input mode.

## Trail tile readability, 5 November 2026

Trail price and run-speed underlays are 35 and 33 pixels tall, with 8-pixel horizontal and 2-pixel vertical content insets. Their text scales up to 15 pixels, shrinking only to fit. Artwork uses 60 percent tile width to reserve room for these rows. Display run bonuses with a leading plus, such as +100% run speed.

## Semantic typography standard, 5 November 2026

Use the single role table under [Fonts and text](#fonts-and-text). It resolves
the overlapping font recommendations: routine titles and large balances use
BuilderSans ExtraBold; creature names, quality captions and earned reward
amounts use Fredoka One. Buttons and tabs use BuilderSans Bold, supporting
copy uses BuilderSans Medium, and special celebration headlines alone use
Luckiest Guy. Font family is determined by the role, not by text size or a
screen-specific preference. Existing size, fitting, spacing and artwork rules
still apply. Earlier evidence and screenshots retain their historical fonts.

## Compact passive quality chip, 5 November 2026

Individual pet details use Theme.DetailSkins quality underlays as nine-slice
passive decoration, adapting the approved glossy renderer with deep saturated
faces and a brighter, thicker bevel. The chip is 26 pixels high, measured to its
Theme.Fonts.quality caption with 12 pixels of horizontal inset on each side, and centred
vertically beside the title with an 8-pixel gap. Reuse the skin's bevel and
shadow. White text has a separate two-pixel downward dark depth layer; no
text stroke or added border outline. The face is symmetric; the main caption
is one pixel above centre and its depth one pixel below, centring the combined
lettering. This supersedes the earlier outline and pale-skin trials. It is not
a button and does not receive input or button states. Existing egg and garden
pet callout quality treatments continue using their own unchanged skins.

## Creature detail card colour and stat rows, 5 November 2026

PetBuffView.Card with DetailStyle=true matches its buff graphic colour using
the existing DetailSkins palette. Regenerator uses green; water and breath
buffs use blue; gold and honey use gold; combat and health use red. Pale icons
use a neutral skin. The active following-buff HUD uses the same card. All buff
emblems have a shadow, using the artwork silhouette for image icons and the
shared soft shadow for emoji.
Keep Income, Height, Weight and DNA values on the same shared stat-panel
background without dark value pills. All rows retain the same text alignment
and vertically centred icons.

## Certificate input owns covered game editors, 5 November 2026

The birth certificate's E acknowledgement must not become text in a covered
game search field. Release a focused field belonging to PlayerGui when the
certificate opens, and prevent background fields taking focus while it remains
visible. Preserve Roblox menu and core/external text input ownership. Reuse the
same acknowledgement function as clicking, and disconnect modal focus listeners
on every close path. Do not autofocus a replacement field.

## Pet management action order and input, 4 November 2026

Inside the merge picker, E activates the enabled final Merge action through
the same guarded submit function as clicking. An incomplete selection or
pending submission still consumes E and cannot trigger a background action.

Garden places its primary assignment action first on the left. Stored places
its primary Merge action second, immediately after Send to garden. Both use
the shared E keycap. Give long primary labels additional space on phones.
The foremost window owns its primary key through ContextActionService and
consumes inactive E presses so they cannot trigger background world actions.
Respect typing and higher modal input owners. Arrow selection must update the
same tile outline/state as clicking and scroll the selected tile into view.

## Reuse item flight for pet transfers, 4 November 2026

Individual Store pet and Send to garden actions reuse ItemPurchaseFeedback,
targeting the corresponding counted header tab. Use the existing pet tile
artwork and capture its centre and size before the projected move rerenders
the grid. Configure Speed = 2 for every tween phase and Notice = false for
silent cleanup after absorption. Keep default shop/pickup timing unchanged.
Do not introduce another flight renderer, frame loop or purchase notice.

## Stackable Shop actions and pending quantities, 4 November 2026

Use the existing blue primary buttons for the single-item action on the left
and Buy 10 for on the right. Both use ButtonCashPrefix / ButtonCashAmount with
the canonical coin and full grouped total. A one-owned item has no bulk action.
Retain the existing three quantity buttons for traps. Reuse InventoryGrid's
passive Cash row for grocery tile prices, including cards without a stat row.
The separate counted overlay shows xN owned stock, or xN pending immediately
after input. Pending stock is presentation only and does not enable a grant.
Native acceptance must check the visible caption, not only its prefix attribute.

## Full Cash prices and merge explanation, 4 November 2026

Cash purchase buttons display the complete grouped price beside Theme.Images.Cash,
without a dollar character or K/M/B/T suffix. Use CurrencyFormat.FullAmount and
the shared ButtonCashAmount / ButtonCashPrefix renderer, including bulk-buy totals.
Keep native Robux checkout labels and unrelated compact HUD values.
Merge mode has a Back action on the left and a wrapped explanation beside it,
above the pets. Explain matching creature/quality, higher income and replacement
of the inputs. Size that row from its measured text so it cannot overlap pets.
Back shares Cancel logic and cannot cancel an already submitted merge.

## Inventory equipment primary, 4 November 2026

When an equippable inventory item is selected, the footer's primary blue action
is Equip or Unequip according to its current projected equipment state. Keep
Discard secondary and preserve its confirmation. Native Tool ownership remains
server-authoritative; unequipping returns the selected tool to Backpack and
does not disturb a different held item. Turbo Boost keeps its existing wearable
service. Eggs and instant hatch credits retain their own actions. Equipment
intent feedback uses the existing ordered queue and rollback path.

## Discover labels and Inventory header, 4 November 2026

The player-facing Collection navigation label is Discover. Its counted tab
uses X / Y discovered. Internal keys and discovery history remain unchanged.
Inventory puts its capacity title, existing tabs and Close on one row. Keep
all five tabs visible on desktop. On narrow screens use native horizontal
scrolling inside the same row, retaining readable captions and touch targets.
Search and content begin below that row. Capacity warnings keep a separate
short notice only when required.

## Trail badge alignment, benefit fills and dual checkout, 4 November 2026

Trail tile backgrounds and item names keep their trail colours. Rainbow uses
repeating red, orange, yellow, green, blue and purple letters, including after
Indonesian translation. Only the two information badges use neutral grey:
confirmed Owned is green and Equipped is blue. Icons align left, captions right,
with 12 pixels of horizontal inset and the existing vertical inset.

The run-bonus badge has a passive native fill behind its content. Divide the
bonus by the strongest configured trail's bonus, currently 160 percent. Thus
10 percent fills 6.25 percent, 20 percent fills 12.5 percent and 160 percent fills
100 percent. Match the fill to that trail's colours and brushed texture,
including Rainbow's multicolour gradient. Use the badge's full-size nine-sliced
outline inside a horizontal native clip, below its readable icon and caption.
The asset alpha matches the neutral badge, without an inset or stretched corner.
Captions read "10% run speed" with the actual tier and no plus sign. No frame
worker or recurring animation is needed. The shared fill asset and approved
renderer provenance are in assets/ui/trail-benefit-fill-v1/manifest.json.

The Trails footer is 60 pixels high with no detail text above its buttons. Reuse
the selected tile's texture and colours. Cash checkout is on the left with the
canonical Cash image; native Robux checkout is on the right with Roblox's text
currency symbol. Owned trails retain a full-width Equip or Unequip action.
The shared ButtonCashAmount caption uses the existing raised renderer, font,
outline and native centred list layout, scaling the whole inline group to fit.
Its icon must be marked ButtonDecoration so it does not disable word-button
styling. Preserve the normal footer for other shop categories.

Evidence: output/trail-shop-refinement-20261104. Desktop, portrait and landscape
native geometry passed, and actual tile/footer images were inspected. Real
input, payment and rejoin acceptance remain separate; no Play, save or publication.

## Hatch decision storage feedback, 4 November 2026

Keeping the existing garden creature in either hatch decision window sends the
incoming left portrait to the Pets tray icon. Reuse ItemPurchaseFeedback with
its silent pickup option: no Bought text or purchase sound. Capture the portrait
centre before closing, release the chooser, then start the cosmetic native
flight immediately. Retain the existing background server request and error
handling. Selection does not create a usable pet or confirm a grant. Other
choices do not run this storage feedback. See HATCHING.md for verification.

## Emote keeps menu navigation available, 4 November 2026

The Emote action does not hide the entire ActionDock while its panel is open.
Keep the desktop side shortcuts reachable so Shop or Trails can replace Emote
through WindowControls.setOpen. Preserve the shared mobile covering-window
rule, HUD hiding, Emote selection and C shortcut. A covering mobile window
still restores its shortcuts when closed.

Installed by guarded plan c28fe85dd7664bf6933bc15c276a4602, with exact source
readback. The shared route and actual Emote registration passed controlled
Emote-to-Shop and Emote-to-Trails checks. Published input remains untested.

## Selected tile outlines and tab icons, 4 November 2026

Every selected tile uses a solid 3-pixel blue border outline in
Theme.Colors.accent (#335FFF). Apply this consistently to Inventory, Garden,
Stored, Shop and Trails offers, Wardrobe and custom selectable creature,
emote, flower, tray and hotbar tiles. InventoryGrid provides the default
outline; custom tiles reuse Grid.SetTileSelected(tile, Theme, selected).
Persistent developer Camera/Spectate choice cards use the same outline.
Use the owning component's actual selected ID, multi-select set, active emote
or toggled/equipped predicate. Do not invent selection on momentary buttons
or passive reward artwork.

The outline is a passive transparent layer above artwork and hover feedback.
Set UIStroke.BorderStrokePosition to Enum.BorderStrokePosition.Inner and
StrokeSizingMode to FixedSize so the full 3-pixel outline remains inside
clipped scrolling and tile boundaries.
Preserve each tile's corner shape, dimensions, hit area, spacing, counts,
footers and input ownership. Never scale, move or tint the artwork to indicate
selection. Hover and controller focus remain separate from selection. Keep
functional equipped/enabled colours, availability and transaction feedback.
Drag destination highlights remain separate from selected hotbar slots.
This rule supersedes older selection-fill-only examples. Regular action
buttons remain borderless, and tabs retain their selected blue underline.

Pets Garden, Stored and Collection use one text-only counted tab row, without
a separate window title. Left to right: X / Y in garden, X / Y stored,
X / Y discovered, optional coin income and Close. Reuse Tabs.select for the
surfaces and selected underline. Fit the three captions inside
their controls with eight-pixel horizontal insets. The optional Garden income
uses the canonical coin icon and a compact two-decimal amount such as 4.44M/h.
Hide that entire income group before reducing space needed by the tabs.
The tools and content move up into the reclaimed space. Merge mode keeps its
instruction heading while its tabs are hidden.
This supersedes the earlier tab-icon direction for these three tabs only.

See UI_TILES.md for the native tile example, state table, shared API and
interaction rules. The wiki component reference includes the selected tile.

## One large main window at a time, 4 November 2026

Shop, Trails and other shop categories, Inventory, Pets, Wardrobe and similar
large registered main windows share one visible slot. Use the existing
WindowControls registry and its synchronous setOpen route. Close the previous
window through its owning cleanup before showing the next one. Preserve the
last selected tab, existing search/focus cleanup and transaction reconciliation.
Late replies must not reopen a closed window. Closing the new window never
automatically restores the previous one.

Child confirmations remain owned by their main window. HUD, tooltips,
callouts and the documented stand-owned creature inspector keep their
existing separate behaviour. Do not create a second exclusivity registry.
The documented paired Developer Panel and Tools workspace remains separate
from the player-facing shop, inventory and pet window family.

## Shared dropdowns and trail shop information, 4 November 2026

Select triggers and styled text inputs suppress Roblox's large automatic
selection outline. Mouse opening keeps the current focus. Controller opening
and deliberate keyboard navigation still use the dropdown's in-row focus.

Use ProjectUI.Dropdown and [DROPDOWNS.md](DROPDOWNS.md) for all select fields and
their options. Dropdown entries are flat listbox rows, not raised action-button
artwork. The closed field shows its current value and chevron. The selected
option has both a checkmark and blue surface. Focus is independent of selection.
Keep native scrolling, Escape/controller Back and outside dismissal, focus
return, owner-close cleanup and the shared keyboard/controller navigation.
Select fields may have their normal one-pixel field border; ordinary action
buttons remain borderless. Reuse canonical check and chevron glyphs.

Trail shop tiles retain their current shared InventoryGrid appearance and
selection outline. Add only passive information inside the existing footer:
a native cost/ownership surface with the canonical Cash icon, or a checkmark
and Owned after confirmation, followed by the canonical directions_run glyph
and the actual bonus, such as 10% run speed. Pending ownership says Confirming
and never receives an Owned tick. Preserve the existing card dimensions,
artwork, click behavior and purchase button. The top hint explains the visual
trail and run-speed effect rather than listing names or counting trails.

Shop tiles and confirmed inventory flights share shopArtwork in PetShop.
Snapshot the selected item's actual image/decorator in each queued intent.
All sixteen trails use TrailShopArt.Image(id); the item/category audit also
covers purchasable inventory definitions, hats, flowers, training equipment and
traps. Keep confirmation timing, pending feedback, target, path and native
tweens unchanged. Artwork changes never authorize a usable predicted grant.

Evidence: output/shared-dropdown-20261104, output/trail-tiles-20261104 and
output/lake-drop-icons-20261104. Shared dropdown checks pass 22 assertions;
Shop client 122 plus 20 artwork cases; inventory grid 99 including six trail
information cases. Settings and Developer consumer flows retain their tests.
Native Edit screenshots were inspected; gameplay, saving and publication were
not performed.

## Distinct lake and Water icons, 4 November 2026

Ripplewater Lake uses the ImageGen pond with reeds and a lily pad. Water
movement retains the existing three-wave icon. The replacement atlas retains
512 by 512 dimensions, 128-pixel cells and all 13 other cells byte-for-byte at
the pixel level. All source consumers and two authored encyclopedia images use
the new atlas. Earlier atlas and icon originals remain retained.

Drop Egg uses the new illustrated ImageGen egg and downward arrow, registered
under the existing MaterialCatalog standalone drop_egg name. Keep the original
and 128-pixel runtime PNG in assets/ui/action-icons-v2. Prompts, hashes, upload
receipts and light/dark/HUD review are in output/lake-drop-icons-20261104.

## Button and egg callout font limits, 4 November 2026

Theme.ButtonCaption.maxSize is the hard 20-pixel maximum for shared game action
button captions. A larger source TextSize, existing text constraint, custom
caption size or resized button must not raise that maximum. Retain native
fitting below the cap when space is limited, and preserve the shared button
renderer, keycap treatment and actual actions.

Egg callouts use separately fitted foreground roles: Quality has a 14 to
22-pixel range, EggName has a 14 to 36-pixel range, and EggWeight has a 12 to
18-pixel range. Each label uses TextScaled, one UITextSizeConstraint and
UIOwnsTextFit. The name is the focal label, above Quality at 22, weight at 18
and action captions at 20 when space permits. Native fitting still shrinks long
names inside the existing 268 by 44 row. Keep the approved art and row geometry.
This keeps kg and lb values compact. These current limits supersede older large-text examples
below. Reuse the approved Callout Card Gen artwork, layout and native actions.

The later published-game screenshot exposed a reproduced BillboardGui engine
behavior in this callout path: TextScaled ignored UITextSizeConstraint maxima.
Native text bounds were 41.58 pixels for weight and quality despite their 18
and 22 caps, and 39.6 for Hurry despite its 20 cap. Earlier SurfaceGui previews
used a different native container and missed this behavior. Publication mismatch
is not the established cause; Daniel confirmed he had published.

Plan 036fc3d1bab84693ac7b6a952ab00544 installs the correction in GardenHatchTimer,
GardenCreatureTile and ButtonStates, with exact Edit source readback. Each
foreground text frame now has a finite height centered inside its existing row,
retaining the same width, hit rectangle and approved art. Keep native TextScaled,
constraints and shrink-to-fit behavior. No worker, listener or RichText fitter
was added. The timer factory/state checks pass 160 and 24 assertions; the
creature tile passes 143, with zero source diagnostics.

Six installed real-Billboard cases pass native TextBounds, TextFits and cap
checks, including unknown, incubating, ready, pounds, narrow and long-name
states. Camera/selection restoration and fixture cleanup pass. The Billboard
screenshots were blank, so these are property checks, not visual acceptance.
Earlier SurfaceGui visual evidence remains useful only for that container;
live Billboard acceptance is pending. Current evidence:
output/egg-callout-runtime-mismatch-20261104/installed-native/verification.json.
See the [historical Roblox acknowledgement](https://devforum.roblox.com/t/uitextsizeconstraint-doesnt-work-in-billboardguis-with-textscaled/1195511)
and [current size-constraint documentation](https://create.roblox.com/docs/ui/size-modifiers).
The local reproduction, rather than the old thread alone, establishes this
project's failure. No gameplay, save or publication was performed by Codex.

5 November 2026 follow-up: exact published V2030 contains these native text-frame
limits, verified by offline source equality for the three renderers, Theme and
GameLanguage. This confirms release contents, with live appearance still pending.
See output/published-fixes-20261105/verification.json.

The preceding revision, with a 24-pixel name cap, was installed in Edit with
exact source readback. The 120 actual
callout factory assertions and 24 existing state checks pass. Five native
SurfaceGui Edit states/layouts cover unknown/hour, known/minute, ready, pounds
and a narrow ready card; text fitting and role caps pass there, with camera/selection restoration
and fixture removal verified. Evidence:
output/callout-font-margin-20261104/garden-eggs/verification.json.
Live gameplay remains pending. No gameplay, place saving or publication was
performed, and no review catalogue was changed.

Daniel's later 36-pixel focal-name refinement is installed with exact source
readback under plan fbf392ad7d894a0e9bfc286a3e9d69f4. The 120 factory and 24 state
checks pass again. A prepared native preview was inspected before installation;
six installed garden SurfaceGui views and one wild SurfaceGui view pass fitting
and cleanup. Labraduck Egg renders at 36 pixels in that preview; Crocodoodle
Doo Egg fits at 30 pixels on the narrow SurfaceGui card. Evidence: output/egg-name-focus-20261104/verification.json.
The earlier receipt remains historical evidence for the 24-pixel revision.

## Search clear and screen lifecycle, 4 November 2026

Every search field shows the canonical close X while its text is nonempty, including whitespace. Placeholder text uses Theme.Colors.placeholder (#9298A3), a darker grey than entered text; entered text retains Theme.Colors.text. Use InputFields.search(field, owningWindow, existingClearButton) to reuse the clear control or create a borderless trailing control, reserve 44 pixels for it, and reset text/focus on screen close. Tab changes alone retain the query. Do not capture focus automatically. Subscribe to native property signals, without polling or global descendant scans.

## Trail navigation and shop panels, 4 November 2026

The Trail tray tile sits below Emote and always uses the normal dark tray
colour. Click or L opens Trails; repeating it closes the open Trails window.
Do not offer a trail on/off control or blue
enabled fill. Keep the equipped canonical artwork and White fallback.
Trail cards keep the shared tile outline and dimensions, with smaller artwork,
matching textured backgrounds and larger theme-coloured names outlined black.
Use approved ui-underlay-gen skins for passive price/Owned and bonus panels.
Align icons left and captions right with 12-pixel horizontal padding. Show
"10% run speed" with the tier's
actual percentage and the canonical running icon. Owned uses a confirmed tick;
pending purchases never imply a usable grant. See TRAILS.md and the underlay
manifest for renderer provenance and assets.

## Current compact garden callout, 4 November 2026

Use the existing Callout Card Gen renderer and approved v17 Theme.Callout art,
including its quality texture, bevel and shadow; no illustrated biome background
or creature portrait. Native foregrounds reuse the canonical Cash/DNA/keycap
icons, shared raised action buttons and current title/caption fit rules.
Desktop 420 by 194 retains the image proportions and reduces the former 260-pixel
height by 25.4%. Phone 316 by 286 preserves 56-pixel action targets. The
whole DNA underlay is its clipped meter. Native Stay displays Following without
changing its actual prompt action. Earlier biome-image, 70/35% tint and
14 to 44 name examples below are historical implementations, superseded by the
approved current renderer and its existing font caps. Retain the latest shared
Primary button styles and Standard quality treatment.

The runtime adapter is src/garden_creature_tile.luau. Renderer provenance,
exact hashes, inspected native desktop/phone/short views and pending live checks
are retained in output/garden-creature-hover/verification.json. This change
reuses existing art and does not introduce a competing renderer or icon set.

## Retired biome symbols, 4 November 2026

Use only the 14 ImageGen biome symbols in assets/ui/collection-header-icons-v2.
The earlier procedural Reef, Deep Ocean and other biome symbols, their atlas,
comparison sheet and icon-gallery thumbnail/download copies were removed at
Daniel's request. The old generator is removed and the upload helper now only
accepts v2. The current packer reads its own manifest instead of the deleted
v1 manifest. Keep the new originals and runtime PNGs unchanged.

The Collection already used the new atlas. Two retained world encyclopedia
images still used the old one; these now use the new atlas with their existing
128-pixel crops. The icon gallery now contains only the 14 current biome symbols,
without a previous-biome category. Retired upload identity and file hashes remain
in assets/ui/retired-biome-icons.json as small provenance records, not artwork.
See output/retire-biome-icons-20261104 for removal and verification evidence.
No place save or publication was performed.

## Praise keyboard shortcut, 4 November 2026

Praise uses R on keyboard, with the existing native prompt and dynamic keycap
hint reading KeyboardKeyCode. Follow remains F, and controller Praise remains
ButtonX. Mobile tapping and the Praise interaction itself are unchanged.
HomeGarden creates new PetGardenCreature prompts with R. Plan
0bfd96eef64b47c3bdcd9e4060ca4f88 installed the source with exact readback and
zero diagnostics. Prompt-stack tests passed 53 checks including the R hint.
The scoped Edit installer found no existing runtime Praise prompts to update.
No gameplay, place save or publication was performed.

## Illustrated creature face icons, 4 November 2026

Use [CREATURE_ICON_RULES.md](CREATURE_ICON_RULES.md) for new or replacement
creature face icons. Match the original Alpanda, Bunblebee and Cockapoodle
illustrations: floating front-facing head only, rounded forms, clean shading,
soft dark outlines, glossy expressive eyes and genuine transparent alpha.
Preserve species identity and use the shared PetIcons owner. Model crops,
shoulders and full-body artwork do not belong in this icon role.

## Relaxed Garden egg callout range, 4 November 2026

Garden egg callouts and their native hatch/hurry focus now use a four-stud
horizontal gap from the actual shell footprint, increased from 1.5 studs.
GardenPromptStack uses one shared constant for card visibility and focus.
The size-aware elliptical footprint and vertical guard remain. This applies
to incubating and ready Garden eggs; wild eggs retain native pickup range.
The single nearest callout rule and egg priority are unchanged. No extra
updates, effects, remote calls or change to server validation are introduced.

Plan 0c308d7bd9344d829a338da9fade3dd5 installed the shared module with exact
source readback and zero diagnostics. Prompt-stack checks passed 53 assertions,
including the exact four-stud boundary; interaction focus passed 31 checks.
No gameplay, place save or publication was performed.

## Top-income house overlay, 4 November 2026

The crown, stars and illumination belong to a separate passive TopEarnerOverlay.
Only the highest live pet-income earner in the current server displays it.
Compare unrounded CurrencyIncomePerSecond from ready player profiles. Positive
income is required. Ties choose the lowest user ID, consistently across clients regardless of
profile loading order or each viewer's earlier winner. Ranking refreshes with the existing
one-second house-label update and responds to income changes and joins/leaves.
Nonleaders retain their normal name, unique-discovered-species and hourly-income callout. Hidden
overlays do not advance their sprite animation. This grants no saved reward,
Cash or gameplay benefit. The approved round 96-frame crown is installed at 25 fps. The entire callout, crown and stars scale together by 1.25.

## Front-facing crown preview revision, 4 November 2026

The current installed design uses the same approved fixed crown model with
a more frontal camera at (0, -6, 2), looking at (0, 0, 0.55). It has 96 actual
rendered angles in 3.75-degree steps. At 25 fps, each rotation takes 3.84 seconds,
half the earlier angular speed. The crown composites after the window and its
base overlaps the upper rim by three preview pixels. Stars retain their earlier
twinkle speed. Review GIF: output/round-crown-preview-v3-front-96. Source frames
and editable scene: assets/ui/house-crown-model-v3-front-96. Installed with the proportional house callout update.

## Reduced button and egg/pet callout typography, 4 November 2026

Daniel reduced the recently enlarged text by approximately 25 percent, rounded
to whole pixels. Shared word-button captions now prefer 20 pixels instead of
27. ButtonStates applies Theme.ButtonCaption.sourceScale of 0.75 to larger
consumer caption preferences and fitting caps too. Keep native fitting and
existing minimum sizes. Icon/tray/hotbar controls remain outside word-button
styling. Hit rectangles, artwork, icons, padding and keycap sizes are unchanged.

Pet callouts use quality 20, creature name 23, income 16 and DNA 16 pixels.
Egg callouts use quality 20, name 17, weight 18 and remaining/ready 18 pixels.
Matching native text constraints use those same caps. Shared callout layouts
and desktop/compact geometry remain unchanged. This supersedes the larger
callout text sizes recorded below.

Plan e6b87107d89f4c04887dcab2a58a50c0 installed the five scoped sources with exact
readback and zero diagnostics. Native shared-button verification passed 155
checks, and desktop/narrow egg and pet fixtures passed 15 text-fit checks.
Actual captures were inspected; cameras and temporary fixtures were restored.
Evidence: output/callout-buttons-reduced-20261104 and
output/callout-fonts-reduced-20261104. No gameplay, save or publication.

## Round crown animation preview, 4 November 2026

Daniel approved an offline fixed-model render exception for this crown after
ImageGen turntable sheets changed gem sides between frames. The new candidate
uses one hollow annular six-point crown and a parented front ruby, rendered at
48 yaw angles in 7.5-degree steps. Its GIF preview includes separately twinkling
ImageGen stars and the existing glow. It is a preview candidate, not installed.
Model and exact frames: assets/ui/house-crown-model-v1. Review GIF and gem-position
checks: output/round-crown-preview-v1. The general ImageGen icon and renderer-reuse
rules remain unchanged outside this explicitly approved crown source.

## 2D house crown turn, 4 November 2026

The crown uses an ImageGen eight-frame turning atlas, four columns by two rows
with 256 by 160 cells. Native ImageRectOffset advances at eight frames per second
through HomeGarden's existing 10 Hz sweep, only within 180 studs of the camera
and while the label is enabled. No new frame connection or 3D geometry is added.
The glow remains a separate static layer. Source artwork, frame preparation,
alpha verification and upload receipts live under assets/ui/house-crown-spin-v1
and assets/ui/house-crown-glow-v1. The current placement retains the 10-pixel down
and 2-pixel right adjustment.

## Crown illumination and placement, 4 November 2026

The house crown keeps its separate canonical icon. A separate ImageGen alpha
layer provides a soft gold halo and translucent fan of shine rays behind it,
rendered at 55 percent opacity. The crown and illumination move together:
10 actual UI pixels down and 2 pixels right from the previous position.
The layer stays passive, preserves aspect ratio and adds no frame worker.

## House ownership callout, 4 November 2026

Use the approved callout-card renderer through tools/generate_house_callout_skill.py,
retaining its brushed texture, embossed border, underlay skins and soft shadow.
The owner frame is light blue, other owners use grey. The pet-count component is
centred; player-name and income underlays have equal widths. Reuse canonical Pets
and Cash icons as separate layers. Show total owned hatched pets, including
storage, and compact live hourly income labelled / hour. The ImageGen crown
with exactly two flanking stars is a separate canonical overlay above the frame.
Keep image proportions with Fit.
Artwork and provenance: assets/ui/house-callout-v5-hourly. The source renderer
path and SHA-256 are retained in its provenance manifest.

## All new icon artwork uses ImageGen, 4 November 2026

Daniel requires ImageGen for every new or replacement icon, including simple
white symbols, action icons and navigation artwork. Do not hand-draw icons in
Python, SVG, canvas or procedural geometry as a substitute. Reuse suitable
existing canonical icons first. When creating replacement artwork, use the
built-in ImageGen tool and inspect matching existing game icons as references.
Keep full-resolution originals and separately sized runtime PNGs. Resizing,
lossless PNG preparation and atlas assembly may use deterministic tools, but
those steps must not invent or redraw the icon artwork. Register the result
in the shared owning catalogue and reuse it across consumers.

## Drop Egg and Shift Boost replacement status, 4 November 2026

Daniel rejected the hand-drawn action-icons-v1 artwork after installation.
Its successful loading and technical checks do not establish visual acceptance.
Replacement ImageGen artwork is pending. Boost should be a white running
figure with fire streaming behind it. Preserve the canonical drop_egg and
sprint_boost keys, tray geometry, captions, hotkeys and input behaviour when
replacing the assets. The Turbo Boost backpack remains a separate item icon.
Retain v1 files and output/action-icons-20261104 as historical evidence only.

## Birth certificate window shadows, 4 November 2026

The birth certificate uses two passive nine-slice layers of the shared blurred
alpha shadow artwork behind its biome backdrop: a soft surrounding shadow and
a lighter drop shadow six pixels below it. Both resize with the certificate.
Text, creature preview, quality aura and the biome background remain crisp.

## Creature detail artwork, 4 November 2026

Collection creature details and both encyclopedia board faces show the main
habitat illustration without the five bottom image-preview controls. The shared
PetCollectionDetail renderer no longer creates the habitat/front/side/back/egg
thumbnail strip. Retain source artwork assets for their other existing uses.

## Single nearest callout and close egg focus, 4 November 2026

Only one creature/egg callout may be visible. GardenPromptStack arbitrates
native action cards and pointer-only previews together, including wild eggs,
incubating/ready Garden eggs and creature cards. Choose the nearest eligible
egg first, otherwise the nearest eligible creature. Equal distances retain
the current owner. A creature moving under the pointer cannot replace an
eligible egg callout. Walking away, removal, death and HUD hiding release it.

Egg visibility requires the avatar root to be within 1.5 studs horizontally
of the shell footprint, using the actual PrimaryPart width/depth and rotation.
The footprint is elliptical, so a large bounding-box corner cannot grant extra
reach. A vertical guard excludes other floors. Large eggs therefore use the
same edge gap as small eggs rather than a fixed centre distance. Garden egg
native actions use this close focus too; wild prompts retain their existing
server-authoritative validation and native eligibility, while their card uses
the close display threshold. Other native world interactions are unchanged.

Reuse the existing 20 Hz focus update and registered cards; do not add another
RenderStepped worker, new artwork or a second prompt stack. The owning module
updates visibility directly when hover/native events change and retains its
existing positioning, skins, input and cleanup.

Installed plan 94566093cf3e45439996905d81852c93 has exact source readback and zero
diagnostics. Existing suites passed 31 focus, 47 prompt-stack and 513 hover
checks. An isolated native Edit fixture checked eight pet/small-egg/giant-egg,
hover, movement, removal and death cases, with exactly zero or one card visible
as expected. The selected card's native appearance was inspected; fixture and
camera cleanup passed. Evidence: output/single-callout-20261104. No gameplay,
place save, publication or saved-data changes occurred.

## Embedded nearest-creature review controls, 4 November 2026

The Developer tools Creature issues section uses its existing 44-pixel
accordion header, extreme-right chevron and shared command-search behavior.
Its command starts at 124 pixels high: 12-pixel side padding, a wrapped
48-pixel target/helper row, an 8-pixel gap and a 44-pixel selection action.
After selection it expands to 588 pixels. The reviewer starts at Y124 with
12-pixel bottom clearance and its own native vertical scroll surface.
Use shared Theme fonts, row/card surfaces, primary selected rating states,
ButtonStates and InputFields. The canonical reviewer supplies rating rows and
optional comments. Keep the target fixed during editing and hide the roster
picker here. The tools window's existing resize, drag and outer scrolling
remain the owners of responsive placement. Native Edit views at 460 and
300 pixels wide were inspected with isolated sample reviews.

## Mobile callout text fitting, 4 November 2026

Callout labels and shared word-button captions own their native text fitting.
Translation must preserve UIOwnsTextFit components and their size constraints.
Related action captions use the same preferred font size and shrink only to fit.
Income uses compact currency on one line, including translated hourly units.
Keep text bounds close to the intended single-line height so native fitting
does not wrap short labels into oversized multiline boxes.

## Wild egg callout and held pickup, 4 November 2026

Wild TakeEgg prompts reuse the compact egg callout: quality, discovered species
name or Unknown egg, weight in the selected units and a Secondary Pick up action
with its live E keycap. There is no incubation bar or separate ready status.
The custom pickup fill uses the native ProximityPrompt.HoldDuration directly.

5 November 2026: the held pickup fill starts dark blue, passes smoothly through
lighter blue at halfway and reaches light green at 100 percent. Reuse
Theme.PromptHold and the shared ButtonStates.bindPromptHold component, including
its existing raised-button gradient recipe with neutral shading. Native tweens
own both colour halves and fill width. A native TakeEgg completion displays full
green until custody hides the card. Cancellation, restart, unavailable prompts
and teardown cancel both channels and restore the dark-blue starting colour.
This cosmetic progress never grants an egg or sends progress messages.

The server sets and replicates the native hold duration from the egg's quality:

| Quality | Native hold and visible fill | Server minimum |
| --- | --- | --- |
| Standard | 1.5 seconds | 1.4 seconds |
| Fine | 1.7 seconds | 1.6 seconds |
| Superior | 1.9 seconds | 1.8 seconds |
| Epic | 2.1 seconds | 2.0 seconds |
| Legendary | 2.3 seconds | 2.2 seconds |

This supersedes the earlier separate visual timer and early-submit design on
4 November 2026. The 100 ms is now a server timing allowance. Only the native
Triggered handler can claim the egg. The prediction request queues its receipt
token until that handler completes; either message order acknowledges the same
claim. If native completion reaches the server before its minimum has elapsed,
it waits the remaining time, then revalidates the current hold and existing
custody/range/profile rules. It does not reject that legitimate timing difference.
Longer active holds remain valid. Release cleanup, death, unavailable prompts,
replaced characters and model destruction cancel stale work. A bounded underwater
lock release does not expire a continuing native hold. Quality changes update
the native duration on the server without streaming progress messages.

The installed revision passed 88 pickup/reconciliation checks, the shared hold
fill and underwater lifecycle suites, and 47 prompt-stack assertions. Native
Edit prompts match all five durations and react to a server quality change.
Guarded plan 6eab6bdd9a514b59b71ee660de5f04bf installed the service and shared fill
with exact source readback and zero diagnostics. Evidence:
output/native-pickup-timing-20261104. Physical input, gameplay, saving and
publication were not performed.

Underwater wild eggs use this held pickup, superseding their earlier instant
pickup. On 4 November Daniel selected approach first, then hold still. The root
locks locally and on the server after arrival. Release, completion, death, model
removal, unavailable prompts and a bounded timeout restore movement. Dry-land
holds use native approach without anchoring. See HATCHING.md for reused clips,
native movement and verification. Breath and normal swimming outside this action
retain their existing behavior. Wild cards respect native activation range;
only garden egg cards use the close 1.5-stud (0.42-metre) shell gap.

The server requires a matching timed hold before claiming an egg and retains
its existing profile, inventory, range and custody validation and idempotent
acknowledgement. Releasing early cannot redeem an old hold later. Existing
inventory-dropped transfers and special treasure interactions are unchanged.

Plans f38d165897494840860d96d2fb3d0a99 and
2dbb869f2d2c43ca80ef108fb5b3e84a installed the scoped sources with exact readback.
Source diagnostics, 62 pickup/reconciliation checks, 45 prompt-stack checks,
shared hold-fill checks and the local underwater lifecycle fixture passed.
Native Edit examples cover desktop, narrow layout and pounds. See
output/wild-egg-callout. No gameplay, manual save or publication was performed.

## Component names, tray tiles and current egg cards, 4 November 2026

Use tray tile for a square illustrated shortcut in the side or bottom tray.
Use hotbar slot for the numbered inventory version. They retain small plain-text
shortcut hints, their square icon artwork and the existing hover/selected states.
Do not apply action-button keycaps, raised word-button skins or action-caption
rules to tray tiles. Regular action buttons retain the shared keycap styling.
This explicit distinction supersedes earlier broad hotkey-label styling.

An incubating egg card has quality, name, weight, hatch progress and Hurry.
A ready egg card has only quality, name, weight and Hatch. Remove the redundant
ready-status row entirely and reduce the card from 340 by 386 to 340 by 326.
Preserve equal side and bottom clearance. Weight and hourglass artwork have
slight alpha-shaped shadows and additional left clearance inside the underlay.
Reuse the existing Collection weight icon. Kilograms and pounds use two decimals
and the saved Weight units setting. Canonical game data remains kilograms.

Callout texture sampling must use only the source image's interior texture.
Never sample an old border or pointer into the new window. Extend the texture
through the whole silhouette, including the pointer, before applying its mask.
Use the maintained renderer and preserve earlier generated revisions.

The shared stock glyphs have been replaced by original project geometry in all
77 existing atlas slots, in three styles, with matching 64-pixel cells. Own
hourglass, touch and aiming artwork replace the remaining authored UI stock
images. Existing illustrated icons remain canonical. Native Roblox menus,
operating-system controls and world particle textures are separate from game UI.

The component reference on this page gives each reusable component a screenshot,
name and description. Its native Edit examples use sample data and do not prove
live gameplay or mobile performance acceptance. Current source hashes and image
provenance are retained in wiki/ui-components.json.

## Roomier garden egg callout, 4 November 2026

The egg callout is now 340 by 326 pixels, with a 36-pixel content inset,
268 by 44 cells and 16-pixel row gaps. The quality, name, timer and action rows
start at Y 36, 96, 156 and 216. Clearance from the action to the straight rim
is approximately 27 pixels on the left, right and bottom, excluding the pointer.
This supersedes the earlier 300 by 300 egg geometry below.

All five quality backgrounds were regenerated at the matching aspect ratio,
with 30-pixel shadow padding. Narrow layouts scale the geometry proportionally,
round to whole pixels and keep equal left/right action insets. Preserve the
shared native button and its caption fitting. No hatch or purchase behavior changed.

Plans f10495b008b440ada72676bd63ff0cc0 and e2228ef5e11e4f6d810ba5c0b88e8b78
installed Theme and GardenHatchTimer with exact source readback and zero
diagnostics. Native Edit checks verified unknown/hour, known/minute and ready
states plus a 316-pixel narrow card, including text fit, progress clipping,
background proportions, balanced margins and cleanup. See
output/garden-egg-callout-roomy-final and assets/ui/egg-callout-v2-roomy.
No Play, place save or publication.

## Larger callout text and automatic button fitting, 3 November 2026

Creature and egg quality labels use 27-pixel text. Creature income and DNA use
21 pixels; egg remaining/ready text uses 24 pixels. These are 50% larger than
the preceding sizes. The compact creature layout is 316 by 286 pixels with
56-pixel cells and matching regenerated backgrounds, preserving equal cell
geometry and natural image proportions. Desktop geometry remains unchanged.

Creature income uses CurrencyFormat.CompactHourlyRate, with two decimal places
and K, M, B, T and later suffixes, for example 1.01K / hour. The canonical cash
icon supplies the currency symbol. Existing full currency formatting elsewhere
is unchanged. Rounding across a suffix boundary carries into the next suffix.

Guarded plans eb94551553694dc6a8bece04ee421d46 and
f6d5bdcd826644d1bc8dd21c4d2c7cc3 installed the typography, compact currency and
shared native button fitting. Native Edit verification passed eight creature
layouts, three egg states and 155 shared button checks, including a long label
inside a 120 by 40 hotkey button. Currency checks passed 35 cases. Camera
restoration and temporary fixture removal passed. Evidence is in
output/garden-callout-large-text, output/garden-egg-callout-large-text and
output/callout-shared-buttons-auto-fit. No Play, save or publication.

## Canonical Pets paw icon, 3 November 2026

Pets now uses the requested standalone white paw print with a dark navy outline
and subtle cool shading. It has four toe pads and one central pad, with genuine
transparent alpha and no baked button background. Shared MaterialCatalog
standalone keys nav_pets and pets both point to asset 138694023697499, so existing
Pets navigation and other Pets controls reuse one canonical image. Collection
retains its separate current icon and all action/hotkey bindings are unchanged.
The user explicitly requested this replacement; earlier creature navigation art
remains preserved. Full-resolution pets-original.png, 128-pixel pets-icon.png,
preparation and upload receipts are in assets/ui/pets-paw-v1.

Plan c170a5e591e9416885c4f4eb4b8d03ec installed only MaterialCatalog with exact
readback and zero diagnostics. Native Edit previews verified all twelve image
instances loaded at 32, 40 and 56 pixels on dark, light, blue and purple surfaces.
Camera restoration and fixture removal passed. See output/pets-paw-20261103.
No gameplay, manual place save or publication was performed.

## Two visible pet rows, 3 November 2026

4 November update: Garden, Stored and Collection share the same responsive
window, including creature information. It occupies 92% of available width and
78% of available height, capped at 1350 by 900 pixels, with its center at 50%
across and 45% down. Tab changes and opening or closing creature information
must not resize or move the window. Device-safe ScreenGui insets remain active.

The shared bounds are installed by plan 07be81d662d445d9ab0568ff946a0764 with
exact source readback and zero diagnostics. Sixteen native Edit states cover
Garden, Stored, Collection and open creature information at four viewport sizes.
Garden and Stored desktop/portrait views and short landscape Garden were
visually inspected. The Collection capture was blank and is not visual evidence;
its native bounds passed. Existing tab-memory checks passed. Evidence:
output/pet-window-size-20261104/completion.json. Live gameplay and publication
remain separate.

Garden and Stored InventoryGrid opts into FitRows=2. Tiles retain their column
widths and aspect-fit artwork, while height is capped to fit two rows including
grid padding and gaps. A 90-pixel readable minimum preserves the existing text
footer and selection outline. Three or more rows use the normal virtualized
scroll path. Other shared grid consumers retain their existing geometry.

Narrow layouts use a compact tab/search header, 80-pixel summary and three
columns of footer actions over two rows. Metrics use their semantic font roles
at the existing sizes and fit above the actions. Narrow summary/action spacing is eight pixels;
desktop retains twelve. Exceptionally short windows keep scrolling rather than
compressing cards below their readable minimum. The two-row guarantee was
verified for desktop 860 by 660, smaller desktop 700 by 564 and portrait-phone
340 by 534 panel sizes. Very short landscape windows remain a separate limit.

Guarded plan 532616c6de53494f8b451f65a907a9d7 installed GardenManager and
InventoryGrid with exact readback and zero diagnostics. Existing grid checks
passed, plus nine two-row/third-row/minimum-height threshold checks. Native Edit
previews use the actual production layout, footer and grid. Each verified no
scroll for two full rows, scrolling after one item begins row three, and footer
bounds and label fit. Camera restoration and fixture removal passed. Evidence:
output/pet-two-rows-20261103/native.json. These are static layout checks, not live
input or mobile device performance tests. No Play, save or publication.

## Garden egg callout, 3 November 2026

Garden eggs use a 300-pixel-wide callout matching the creature card's quality
art, texture, bevel, shadows and keycap buttons. Show quality, then the species
display name followed by Egg, or Unknown egg until the local player's confirmed
HatchedEggSpecies history contains that species. Visitor hover remains cosmetic.

Use the whole hatch underlay as progress, with identical empty/full images and
left-to-right clipping. Remaining time and fill derive from EggHatchClock's
boost-aware remaining value and the saved incubation duration. Show an hourglass
and Xh Xm or Xm Xs. At zero, replace them with a green circle, white check and
Ready to Hatch! The owner sees the existing E Hurry purchase prompt before ready
and native E Hatch action afterward. Preserve close Hurry range, hatch range,
hold duration, purchase/developer checkout and server validation. Neither action
is granted to visitors. The separate text-only world countdown remains above each incubating shell,
using the same boosted remaining time. Keep the new callout too, reserving
40 screen pixels below it while incubating. Hide the separate countdown at
readiness and when HUD/camera UI is hidden. Reuse the existing update loop and clean up
streamed/replaced prompt identities and hover state.

Installed plans 29a18279b63b4e8e8dcee138981f74cd and
60332a2085124cc988361b83df570195. Native Edit evidence is in
output/garden-egg-callout-installed. No gameplay, purchase, save or publication
was performed during verification.

## Approved callout installed, 3 November 2026

Daniel explicitly requested installation after approving the v17 design.
GardenCreatureTile now uses its five desktop and compact textured backgrounds,
the approved passive underlays, larger canonical icons and soft shadows. The
whole DNA underlay is clipped from left to right with its centred X / Y rating.
Both native prompt actions use shared Primary buttons, outlined white captions,
keycaps and the shared button shadow. A single Praise action stays on the left.
The new shared ButtonStates caption/shadow style is installed; the earlier
preview-only descriptions below are historical for this installed revision.

Creature mouse hover shows its callout without a golden Highlight. Only garden
eggs retain the local golden hover Highlight, per Daniel's latest correction.
Guarded plan ad5461cdcc514bb2828bab2a5f17850b installed and read back all five
sources. Native Edit verification covers five qualities, two compact examples
and the single-action case; shared button verification passes 152 checks.
No gameplay, place saving or publication was performed.

## Callout card generator, 3 November 2026

The textured window with a downward V-shaped pointer is a callout card. The
projection is its pointer or tail. The approved v17 design and complete Python
generator are packaged in the local callout-card-gen skill with
the required raster assets, underlay generator, transparent layer exports and
layout manifest. Use that skill for matching windows. Installation remains
separate from approval of the visual design.

## Hotkey buttons and garden DNA underlay, 3 November 2026

Buttons with keyboard shortcuts retain the established Theme.Buttons role,
Theme.buttonGradient, shared fonts, radius, feedback and disabled states. Show
the shared Theme.Images.Hotkey keycap with the live key centred inside it,
beside the action label. Reserve space for the keycap without shrinking or
overlapping the label. Keep controller/touch input glyphs and focus guards.
The keycap does not introduce a separate button skin, colour role or hit target.
Garden Praise and Follow use these established buttons, not the decorative
quality/money/DNA underlay artwork.

Named keys such as Space, Shift and Enter use the separately generated
Theme.Images.HotkeyWide artwork at its original 3:1 aspect ratio, with native
Fit sizing. Never stretch the square keycap to make a named key. The shared
Hotkeys renderer reserves 20 percent of the wide image width on each side of
the text area and caps word text at 20 pixels for a 32-pixel cap. Reserve the
resulting cap width before fitting the action caption; widen the button when needed.
Keep the approved text alignment at one pixel below the original position.
Changing any image's aspect ratio requires Daniel's explicit permission first.
Single-letter caps keep their existing sizing. Verify actual text bounds and
inspect the visible face, since fitting inside the outer image alone can still
crowd the artwork.

Latest button-caption direction: shared raised word buttons use bold white
captions with a black text outline, through Theme.ButtonCaption. Their preferred
size is 20 pixels after Daniel's later reduction from 27. Use native TextScaled
with a UITextSizeConstraint capped at the preferred size, allowing smaller text
when the actual available width or height requires it. Keep at least twelve
pixels between each word caption and the left/right control edges, and a
two-pixel vertical inset. Respect larger caller padding without doubling it.
Reserve the keycap area before fitting hotkey captions. Respect caller
padding and recalculate naturally as the control or caption changes. Preserve
existing Primary, Secondary and Warning fills, bevel gradients and disabled-state
contrast. This supersedes older Medium 14 button-caption guidance only, not body
text or icon-only controls. Both garden actions use Primary. Vertically centre
the creature name on the DNA underlay. These shared refinements are installed.

Shared word-button shadow direction: add a soft passive shadow resembling the
underlays' shadow, with a slight downward offset. Keep its image/configuration
in the shared Theme/ButtonStates owner, never reimplement it per screen. It
must not change hit bounds, capture input or move the control during feedback.
Keep existing semantic fills, bevels and disabled/hover/pressed states. This
shadow was subsequently installed through the shared component with the approved callout.
Standard word actions use the shared ButtonStates renderer and Theme; tabs,
icon controls, HUD trays and inventory artwork remain explicit exceptions.

For the garden DNA rating, the full underlay is the progress bar. Render an
empty underlay and an identically positioned full underlay at identical size.
Reveal the full image from left to right through a clipping container sized
to score / maximum. Keep the full image at its original full size inside the
clip, never squash it to the percentage width. Centre the numeric X / Y rating
above both layers, with spaces around the slash. No separate inset rail or
"DNA Score" words. Cash and DNA icons remain separate, proportionally enlarged
layers. Daniel approved this design and explicitly requested its installation
after the preview iterations on 3 November.

## Duplicate-pet primary E shortcut, 3 November 2026

Both SpeciesLimit and GardenFull hatch-choice dialogs bind E to their primary
Select action, choosing the existing income-based recommendation. The shortcut
was previously bound only for GardenFull. Both show Select [E] on the primary
button. Existing high-priority input ownership, chat focus protection, immediate
local close, queued server validation and unbinding on every close route remain.
Guarded plan d6df7161d8e34f4faee61d0e3e3d4db8 installed HatchReplacementUI with
exact readback and zero diagnostics. Offline choice, input ownership and pending
lifecycle checks pass, including both recommendation directions in SpeciesLimit.
Live keyboard acceptance remains untested. No place save or publication.

## Shared icon reuse and layered garden hover cards, 3 November 2026

Inspect the existing icon library before generating an icon. Repeated meanings
reuse their canonical shared image, including Theme.Images.Cash everywhere Cash
is represented. Do not bake reusable icons into backgrounds or create local
duplicates. DNA and hotkeys use Theme.Images.DNA and Theme.Images.Hotkey.

Daniel approved a layered replacement for the earlier garden hover treatment:
one neutral speech-bubble panel tinted by quality, with identical geometry for
all five qualities. Native quality badges, stat boxes, text, DNA progress and
action buttons overlay it. Cash and DNA icons are separate passive ImageLabels;
hotkey letters overlay the shared blank keycap. Quality is a separate badge,
not a duplicate prefix on the creature name. The biome image and quality texture
instructions below are historical for this hover card only, superseded here.
Preserve hover visibility, visitor cards, native prompt range, ownership checks,
Feed fish and mount substitutions, and server validation. DNA fill is the actual
score divided by its species maximum, never a fixed ten-point assumption.

Later refinements: the quality, money, DNA and action boxes have identical
dimensions in a two-column grid. Keep a single Praise button on the left at
its normal width. Use even margins and row gaps, with generous clearance below
the buttons. DNA displays its icon, numeric rating and progress bar, without
the words "DNA Score". Generate the textured window after laying out its
contents. Desktop and compact background images preserve their aspect ratios
through ScaleType.Fit, never Stretch. The diagonal imprinted texture remains
visible. Garden creature and garden egg pointer hover reuse one local native
golden Highlight, occluded by the world and cleared on suppression or teardown.

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
Integrate the existing R Praise and F Follow buttons in its footer, keeping
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
Keep the established dark row, blue selected option, semantic Theme fonts and scrolling
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

Reuse ActionDock, Theme.Buttons.Secondary, Theme.Fonts.button, control text size
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

8 November 2026: each biome reward has a centered gold Reward heading using
Theme.Fonts.heading, a black contextual stroke and one slight native text
UIShadow. The item name and count retain the existing footer. Hovering grows
the artwork to 130% over one second and reveals gold radial light beams behind
it. Leaving returns it over one second and immediately stops the looping choir.
Window close, tab changes, scrolling, focus loss and teardown clear the effect.
The native rays and tweens are passive and do not create a render loop. The
headline is a section label, distinct from the earned reward role in the reveal.

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

The confirmed ribbon headline uses Theme.Fonts.celebration (Luckiest Guy), its large
reward item name uses Theme.Fonts.reward (Fredoka One), supporting copy uses
Theme.Fonts.body (BuilderSans Medium), and the blue primary action uses
Theme.Fonts.button (BuilderSans Bold). A separate creature display name uses
Theme.Fonts.creatureName. These roles supersede the 3 November implementation
that used Fredoka One for both ribbon text areas; its receipts remain historical.
Pending Claiming text uses Theme.Fonts.title until confirmation. Keep both
ribbon text areas in their existing raised positions. The acknowledgement reads
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
text. Use Theme.Fonts.celebration for the New Egg headline, a red text outline
and restrained text depth.
4 November title placement: move both the heading and its matching depth layer
up by 2% of the banner width (about 11 pixels at the maximum width), retaining
their existing relative offset and the egg/artwork positions.
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
name header. The two-row trait grid contains biome first, conservation status second,
then diet and each supported travel mode. Use the existing biome atlas and
distinct conservation artwork, retaining the Alien marker where applicable.
Every symbol has a visible, centred caption underneath. Allocate equal-width
slots so symbol centres are evenly spaced within each row. Labels wrap within
their column. The 4 November two-row decision supersedes the original single-row arrangement. Reuse Theme.Fonts.caption
12, 32-pixel symbols, theme colours and opaque article/card surfaces. This
supersedes the separate discovery/biome badge row and conservation section.

Collection keeps its description, named buff card and three species stat rows.
Individual Garden, Stored and Merge details omit the description and add DNA
as a fourth stat. The baseline caption is removed from both variants by the
4 November decision. The buff card measures its actual wrapped text instead of reserving
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

## Creature viewer search layout, 4 November 2026

Reuse InputFields.decorate, theme control radius, Theme.Fonts.input at 14,
and canonical MaterialIcons search/close artwork. Viewer Search is at (12,72),
width minus 24 and height 44. Text reserves 38 pixels on the left and 44 on the
right; the clear action is 40 by 44 at the right edge. Center both glyphs
vertically. Placeholder is only Search. Keep native deliberate text focus.

The viewer's existing controls move down by 52 pixels: Previous/Next starts
at Y126, animation actions at Y164, speed track at Y198 and speed caption/value
at Y202. Reviews begin at Y244. Standard viewer height is 248; reviewer height
is 534, clamped to viewport height minus 24 with the existing review scrolling.
Preserve 12 pixels below the panel. Search must not overlap existing controls
or rebuild a matching preview on each keystroke. See CREATURE_VIEWER.md.

## Manual text-field focus, 2 November 2026

Daniel removed automatic text-box focus because opening a window consumed other
hotkeys. All windows and tabs, including the explicit Shopkeeper browser and
proximity-opened aisle screens, use native click/tap or deliberate controller
editing to start text entry. Opening a window must not call CaptureFocus or
automatically open the touch keyboard. Once the player deliberately edits a
field, native typing and editing shortcuts retain priority over gameplay keys.
Keep filtering in the owning component. Search queries clear when their owning screen closes or its ScreenGui is disabled. Preserve selected tabs across reopen.

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

9 November 2026: ActiveBuffHUD unifies following-pet, food and server bonuses.
Settings offers Auto, Expanded and Icons. Auto chooses Icons on touch devices
and Expanded on larger screens. Retired saved Minimized values render as Icons;
they are accepted for compatibility but are not offered in Settings.
Expanded cards form a narrow bottom-right stack above the action dock. Keep
its bottom edge fixed when content changes. Retain Personal and Server headings
and native overflow scrolling. Clicking a card toggles just that card between
full content and its icon, unchanged title and countdown. Hide its description
and optional action when collapsed. Newly gained or renewed buffs go to the
bottom and expand automatically; earlier automatic cards are compressed.
Keep manual expansions open too. Track acquisition locally using stable source
identities and deadlines. Countdown ticks and expiring community contributions
must not reorder cards. Group headings follow the chronological order and may
repeat when Personal and Server cards alternate. Manual expansion or compression overrides the
default for that card during this view's lifetime, including timer refreshes,
display-mode changes and HUD hiding. This is local presentation state.
Icons shows the countdown below each timed icon. Hover or controller focus
shows one card directly above that icon. Clicking or tapping pins it open;
clicking the same icon again closes it. Unpinned cards close after leaving the
icon/card, with a short gap-crossing allowance. A pinned card stays fixed when
another icon is hovered. Position details before making them visible.
Neither mode uses an enclosing window, title bar, close button or outside-click
backdrop. HUD descriptions use readable 14-pixel Theme.Fonts.body summaries. Buff titles
retain their existing 18-pixel heading style. Timed cards show only the clock,
without the word remaining, at the top right. Creature information retains its
full descriptions and original 14-pixel body text.
Show server multiplier values in the title, such as Hatch Luck x2. Following-pet
quality suffixes use the same bracket-free form, such as Mighty companion x2.
Keep the source multiplier semantics and avoid repeating server values in the
description. Hatch Luck is the approved name for the former Quality luck buff.
Personal and Server headings identify scope. Hide empty groups and expired
effects from the same replicated state. Existing HUD, camera and covering-window
suppression closes the popup without changing effects.

All cards reuse PetBuffView.Card and the approved DetailSkins. Server Cash and
XP is gold with the canonical Cash icon, hatch speed is blue with Hourglass,
and quality luck is purple with HouseCrownStar. Retain individual community
contribution timers and the existing server-validated upgrade/join actions.
Every buff icon has shared circular dark shading fading outward from the
centre, with a mild blurred drop shadow offset two pixels downward. Use
Theme.BuffIconShadow for both image and emoji icons, including Icons mode.
In Icons mode, also retain a separate soft aura in that buff's own card colour.
Use the shared white radial texture in Theme.BuffIconAura and the card's
BuffAuraColor attribute; keep the dark drop shadow as a separate layer.
The texture reuses the ui-underlay-gen renderer's actual Gaussian shadow pass;
provenance is in assets/ui/buff-icon-shadow-v1/manifest.json.

Historical standalone HUD layout: the accompanying-pet HUD used the compact styled PetBuffView.Card with the buff
name, shadowed emblem and visible wrapped description. It sits at the bottom
right with a 16-pixel margin and a width of up to 300 pixels. Reserve 120 pixels
below it on desktop. Clamp that reservation to the safe
viewport after measuring the card. The card is passive and follows the
existing HUD and camera hiding flags. Mountable species show a Mountable
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
muted text, Theme.Fonts.caption and existing caption scale. Keep it visible for
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
use xN above the name, aligned bottom-right in the art region. Use
Theme.Fonts.count at 16 pixels, theme text colour and a two-pixel theme-background
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

Creature name text uses Theme.Fonts.creatureName at 38 pixels, or 30 in a narrow
column. Description text uses Theme.Fonts.body at 16, section headings use
Theme.Fonts.heading at 20, labels use Theme.Fonts.caption at 14, and stat values
use Theme.Fonts.stat at 16. The baseline
caption is removed by the later 4 November rule. Measure wrapping title/description heights through native
TextService on text/width changes, cache results and allow four extra vertical
pixels. Native list flow sizes the article, and scrolling retains short-screen
access. Stat rows are 48 pixels with 32-pixel icons inset 12 pixels. Values
align right and labels wrap independently. Collection details omit the redundant
Discovered label and give the name the full header width. Individual Garden and
Stored details retain their quality badge at the right of that header. Biome and conservation
lead the two-row trait grid with 32-pixel symbols and centred captions. Retain
the Alien accessory and the actual conservation state text where applicable.
All wording remains native/localized; artwork contains no text. The 4 November
shared Pets window rule above applies the same 1350 by 900 maximum to Garden,
Stored, Collection and its creature detail view.

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
Theme.Fonts.heading at sizes 38, 42 and 47, white text and the existing black stroke.
Begin at canvas X 50 percent, Y 35 percent; rise 30 percent and drift right
30 percent over the existing 2.4-second cycle. Anchor above fitted eyes or a
raised head fallback, following the current transform. Preserve ordinary world
occlusion and reuse all three labels. This animal exception does not resize
player bed letters or change general interface typography.

Use ProjectUI.Theme directly and select the semantic font role from
[Fonts and text](#fonts-and-text). Default sizes are title
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
| Window | Fit inside available viewport with at least 8 pixels on each side; normal content inset 16 | Theme.Fonts.title 20; content may scroll; footer remains outside scrolling body | Opaque panel #121419, radius 12, separate 1-pixel window outline |
| Window header | Reserve 56 pixels normally; close control has its own 44-pixel slot | Title left-aligned and vertically centered; leave 12 pixels before close slot | Drag area stops before close/actions; dragging never swallows action clicks |
| Close icon button | 44 by 44 hit area, aligned to header's right edge | Material close 24 by 24, centered, no visible caption | Borderless row surface; accessible Close label; no title overlap |
| Section/card | Full content width; 16-pixel gap from unrelated section | 12-pixel internal padding and 8-pixel gaps between related rows | Opaque row #1B1E25, radius 8; decoration remains passive |
| Primary action | 40-pixel desktop height; 44 for touch; 32 only in explicitly compact layouts | Theme.Fonts.button; shared raised word-caption cap 20, existing compact captions 14; centered, 12 horizontal padding; allow wrapping if required | Accent #335FFF; borderless; stable shared fill feedback |
| Secondary word action | Same dimensions and baseline as primary peers | Same caption role; word-only content | Theme.Buttons.Secondary raised charcoal face; borderless; icon controls retain their previous design |
| Destructive word action | Same rectangle as peer actions | Theme.Fonts.button; shared word-caption cap 20, existing compact captions 14; clear action verb; full amount/target belongs in confirmation | Theme.Buttons.Warning raised red face with white caption; disabled state must block activation |
| Disclosure/section header | Full width, 44 high; 12 gap between Developer tools sections | Caption left 12, right reserve 44; Theme.Fonts.button 18; 24-pixel trailing chevron at right inset 4 | Theme.Colors.tab; whole row clickable; full-width shared feedback; no root UIPadding |
| Dropdown/select trigger | Same column width and control height as neighbouring fields | Caption left 12, right reserve 44; Theme.Fonts.button 14; same trailing-icon geometry | Trigger and open list share horizontal edges and width; do not shrink only the popup |
| Dropdown list | Match trigger width; 4-pixel vertical gap; open above if needed; bound height and scroll | Options have 12 horizontal padding and 44-pixel touch rows; Theme.Fonts.button 14 | Opaque row surface; selected/focus uses fill; no decorative button borders |
| Text field | Full assigned column width, normal height 40 or touch 44 | Theme.Fonts.input 14; normal 10 horizontal padding, 6 for a narrow numeric field | InputFields.decorate; row surface; separate input outline 1, accent 2 while focused |
| Search field | 44 high; align its outer edges with results below | Leading icon 22 in a separate slot; text inset 38; reserve 38 for clear button | Preserve typed text during filtering; no result-driven width changes |
| Search clear | Inside trailing slot, at least 32 by 32; use 44 when space permits | Material close 20, centered; empty accessible caption only | Borderless; show only for nonempty query; clearing restores the normal list |
| Checkbox | 44-pixel full label-row hit area | Indicator 20, gap 8 before Theme.Fonts.button 14 actionable label; wrap full label | Shared native-style check icon/state; do not rely on colour alone |
| On/off control | 44-pixel row; keep label and switch in separate slots | Theme.Fonts.caption 14 descriptive label at left; state action uses Theme.Fonts.button at right | Both states distinct; same bounds when toggled; authoritative pending state where needed |
| Slider | At least 44-pixel interactive row; separate title/value and track rows | Label Theme.Fonts.caption 14, value Theme.Fonts.stat 14; endpoint fields use Theme.Fonts.input; thumb at least 24, track 4 | Value changes never move neighbouring controls; touch/controller input retains cleanup |
| Numeric stepper | 44-pixel row with equal minus/plus slots and 8-pixel gaps | Centered passive numeric value Theme.Fonts.stat 14; editable value uses Theme.Fonts.input; Material add/remove icons | Stable target sizes; bounded values; disable impossible steps |
| Tabs | Equal widths within the same tab row; 8-pixel peer gap | Theme.Fonts.tab 18, or 16 in the existing narrow layout; centered; do not squeeze text | Lighter tab surfaces in both states; selected blue underline 2; underline stays separate |
| Scroll region | Uses remaining body height; 5-pixel scrollbar and 10-pixel right gutter where used by Developer tools | Layout gaps determine row spacing; include 8 bottom padding | Clip contents; canvas follows content; do not move the footer into the canvas |
| Inventory tile | Use shared InventoryGrid sizing and responsive column rules | Artwork fills tile; names/values stay in their assigned footer/overlay slots | Preserve artwork proportions, selection, discovered state and loading placeholders |
| Progress/stat bar | Track fills its assigned column; caption/value have reserved rows | Current stat vocabulary, Theme.Fonts.caption labels and Theme.Fonts.stat 14 values; never put text under a neighbour | Passive unless an existing stat action owns the whole card; no layout changes on updates |
| Tooltip | 8-pixel inset around wrapped body text; bound to viewport | Theme.Fonts.body 14, full readable caption; no image distortion | Passive, opaque dark surface; never steal movement/focus |
| Status/error text | Caption 12 below its owning control with 8-pixel gap | Theme.Fonts.caption, muted for ordinary state; meaningful errors use established semantic colour | Feedback belongs locally unless UI_NOTIFICATIONS.md explicitly allows the global banner |
| Resize handle | Invisible 32 by 32 bottom-right hit region, inset 4 from window edges | Empty visible text; accessible resize label only | No resize icon, diagonal marks, dot pattern, grip lines, box or decorative hover fill; retain mouse/touch/controller resizing |

A control's disabled state must agree with Active, Interactable and Selectable.
Loading must not look like a confirmed zero or success. Inputs keep their own
outline; buttons do not gain one for focus. Icons use ScaleType.Fit and remain
square. Mouse, controller and touch operate the same logical control.

### Developer tools exact layout

The normal preferred window is 420 by 660, minimum 300 by 280, clamped to the
current safe bounds. The title/drag region is 44 high and reserves the close
slot; the title is offset (16,6), size 20 with Theme.Fonts.title. The obsolete scope caption was
removed at Daniel's request on 31 October 2026. Search is at (12,52), width
window-24 and height 44. Its result caption starts at (16,100), is 18 high and
uses caption size 12. The section scroll starts at (12,126), width window-24,
reserving the existing footer and resize region.

Section rows share the scroll content width, including its single 10-pixel
scrollbar gutter. Each header is 44 high, has an 8-pixel radius, and is followed
by an 8-pixel gap to expanded content. Its transparent caption begins at X12,
has width header-56, full header height, Theme.Fonts.button 18 and left alignment. Its
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
assigned semantic font face and original default size when it fits. Fixed-size labels and buttons
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
with grouped digits, using Theme.Fonts.stat at the existing body size and card
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

Shop search shares the title row, uses InputFields styling, Theme.Fonts.input
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
The title uses Theme.Fonts.heading (BuilderSans ExtraBold) at
28 pixels on desktop and 22 on narrow layouts, with a two-pixel dark text outline.
Allow two title lines on phones; keep the icon and discovery count separate.
Leave a sixteen-pixel landscape strip between each biome header and the first
creature row. Discovery totals use Theme.Fonts.number at 22 pixels on desktop and at least
18 pixels on narrow layouts. Emphasize the discovered numerator at 36 pixels
on desktop and 30 on narrow layouts, using the same colour as the biome border.
On phones the discovered caption uses Theme.Fonts.caption and may wrap onto its own line, using 16 pixels
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
uses Theme.Fonts.number at 28 pixels (24 on narrow or short layouts), the pack
name uses Theme.Fonts.heading at 18 pixels (16 on short layouts), and the
supporting value or price-status line uses Theme.Fonts.caption at 14 pixels.
Use a dollar prefix on Cash amounts and value-per-Robux figures. Do not join the
amount and pack name with a pipe. Keep the price on the purchase button with
18-pixel Theme.Fonts.button text and at least eight pixels between the supporting line and button.
Round displayed compact unit values down to two decimal places; comparisons
continue to use exact verified prices and rates. Loading or unverified prices
never imply a confirmed unit value.

The following table is the single current font standard, adopted on
5 November 2026. Every role has one font. Use the same role in every component, including
world-space labels, HUD, tiles, details, callouts, dialogs and developer UI.
This replaces the former BuilderSans-only rule, Fredoka ban and competing
recommendations for quality badges, titles, buttons and values. Do not choose
a different font for an individual screen.

| Semantic role | Required font | Exact use |
| --- | --- | --- |
| `title` | BuilderSans ExtraBold | Routine window titles and general prominent titles |
| `heading` | BuilderSans ExtraBold | Passive section/card/biome headings and prominent routine world labels |
| `number` | BuilderSans ExtraBold | Prominent routine wallet balances, large counters and summary numerators |
| `creatureName` | Fredoka One | Creature display-name labels in tiles, details, callouts and announcements |
| `quality` | Fredoka One | Creature/egg quality captions: Standard, Fine, Superior, Epic and Legendary |
| `reward` | Fredoka One | Large amounts or item-name labels presenting an earned/granted reward |
| `button` | BuilderSans Bold | Action captions, dropdown options, checkbox action labels and keycap captions |
| `tab` | BuilderSans Bold | Navigation tab captions, including their inline counts |
| `stat` | BuilderSans Bold | Ordinary stat values, numeric readouts and passive prices |
| `count` | BuilderSans Bold | Ordinary stack quantities and compact counters |
| `body` | BuilderSans Medium | Descriptions, help, paragraphs and tooltip copy |
| `caption` | BuilderSans Medium | Supporting labels, status, rarity/conservation text and discovery captions |
| `input` | BuilderSans Medium | Search, text and numeric field contents, including placeholders |
| `celebration` | Luckiest Guy | Explicit special celebration headlines, such as New Egg, new discovery or victory |

See the current native Edit examples at [desktop width](#component-typography-desktop)
and [phone width](#component-typography-phone). These use actual shared fonts
and button components with sample text; they demonstrate appearance and fit,
not live gameplay or device performance.

Use `label.FontFace = Theme.Fonts.<role>` for native text. When an existing
API needs an Enum.Font, use the same role from `Theme.FontEnums.<role>`.
`Fonts.regular` and `Fonts.medium` are compatibility aliases of BuilderSans
Medium, `Fonts.bold` of BuilderSans Bold, and `Fonts.extraBold` of BuilderSans
ExtraBold. Matching FontEnums aliases exist. New and modified code names the
semantic role instead of relying on an alias to imply purpose. Fredoka One
and Luckiest Guy are naturally thick faces; their native Regular weight is
correct and does not mean they should be replaced with a BuilderSans weight.

The ReplicatedFirst LoadingStatus caption is an explicit bootstrap exception
to importing Theme: it uses fixed Enum.Font.BuilderSansMedium for its `caption`
role before ProjectUI replication. Do not wait for Theme from this early
loading screen. This exception changes dependency order, not the chosen font,
and does not permit feature screens to create their own font maps.

Resolve mixed content by its actual label role, in this order:

1. An action caption, tab caption or editable field uses its control role,
   even if its words mention a creature, quality, price or reward. Buy
   Legendary Egg is a button caption, so it uses `button`.
2. Passive content within a clickable tile keeps its own role. Its creature
   name uses `creatureName`, quality uses `quality`, stack uses `count` and
   price uses `stat`. The tile's clickable root does not turn these labels
   into button captions. A separate Buy action still uses `button`.
3. An explicit celebration headline uses `celebration`. A separate creature
   name or large earned amount inside that celebration uses `creatureName`
   or `reward`, respectively. Do not use Luckiest Guy for ordinary windows,
   ongoing status, reward amounts or every successful click.
4. Other passive labels use their content role. A wallet balance and a shop
   offer's large Cash amount use `number`; a granted +Cash popup uses `reward`.
   An ordinary stat/price uses `stat`, not `number` merely because it contains
   digits. Body size alone does not turn supporting copy into a title.

Quality means the five named creature/egg quality tiers above. Biomes,
conservation status, creature rarity, shop rarity and equipment rarity use
their normal heading/caption roles. They do not acquire `quality` from their
colour or the presence of the word Legendary. A species display-name label
uses `creatureName` even when it is the largest title on a detail view.

Measure text with its actual assigned FontFace, size, wrapping and rich text.
Prefer native GetTextBoundsAsync with GetTextBoundsParams.Font copied from
that FontFace; existing GetTextSize callers must use the matching FontEnums
role. Cache measurements with the font role and relevant layout inputs.
Do not estimate a Fredoka or ExtraBold label using the previous font's widths.

Preserve existing text sizes, responsive caps, outlines, shadows, padding,
wrapping, localization and fitting ownership. This is a font-role change,
not authorization to enlarge text, add fitting loops or replace approved
underlay/button renderers. Authored logo/image lettering retains its artwork;
Roblox-owned CoreGui and native prompt interfaces retain engine ownership.
Historical captures and immutable evidence remain dated examples of their
original implementation, not current font references.

For example, a creature tile and its separate action use:

```lua
nameLabel.FontFace = Theme.Fonts.creatureName
qualityLabel.FontFace = Theme.Fonts.quality
quantityLabel.FontFace = Theme.Fonts.count
priceLabel.FontFace = Theme.Fonts.stat
buyButton.FontFace = Theme.Fonts.button
```

Use the existing shared component rather than copying its renderer. See
[UI_TILES.md](UI_TILES.md) for selection, input, pending state and window rules.

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
`Theme.Fonts.tab` for both the button and its visible TabCaption. The desktop
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
readable card sizes. The 4 November shared Collection detail-panel decision
below supersedes the earlier restriction on a right-hand creature detail panel.
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

Use a passive Frame and inactive message/icon/bounds. Only its separate 28 by 28 close control may receive input. Never make the whole banner a button, set Modal, bind movement keys, capture actions or automatically select a UI object. The notice stays above the action dock with an eight-pixel gap, at most 560 pixels wide and twelve-pixel side margins. Theme.Fonts.caption text is 16 pixels, or 14 below 500 pixels wide, with measured wrapping, opaque semantic fill and no border.

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
world-space trap labels use Theme.Fonts.heading at a fixed 22 pixels, wrapping
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
6. Golden Dunes
7. Ember Mountain
8. The Burning Depths
9. Cloudstone Caverns
10. Cloudtop Cliffs
11. Moonbeam Expanse
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
| `ui_theme.luau`, `ui_button_states.luau` | Opaque charcoal surfaces, blue primary actions, semantic font roles, borderless buttons and stable fill feedback |
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
Stats bar, otherwise the toolbar. Use Theme.Fonts.reward and the existing skill colours.
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
Quality and creature labels use Theme.Fonts.quality and Theme.Fonts.creatureName
at 20; the spawn/biome clause uses Theme.Fonts.caption at 16. Egg icons remain
36 square and biome icons 28 square. Use a shared 6-pixel
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

Use one large Theme.Fonts.heading line per name and role: Daniel Barnes - Creator & Lead
Developer, then Barnathy - 3D Artist. Follow with a Theme.Fonts.heading Playtesters heading
and two columns of small Theme.Fonts.body tester names. Settings uses title 20, heading
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
below its ground title. Backyard keeps only its name. Reuse its existing SurfaceGui,
Theme.Fonts.heading for the main title, Theme.Fonts.caption for the recommendation, pale green text and
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
## X closes the frontmost window, 3 November 2026

X dismisses the frontmost open game window. It remains ordinary text while a
TextBox has focus and yields to the native Roblox menu. With no window open,
existing gameplay X actions remain available. Existing Escape, controller,
button and menu shortcuts stay intact.

WindowControls.exclusive automatically registers windows with the shared
closeOnX input owner. Supply the existing close callback as its third argument
when closing needs cleanup or state reconciliation. Independent modal windows
register with WindowControls.closeOnX(panel, screenGui, closeCallback) without
joining main-window exclusivity. Highest ScreenGui DisplayOrder wins, followed
by nested modal ancestry, ZIndex and most recent opening. Hidden ancestors and
disabled or destroyed screens are excluded. One press closes one window only.
Busy confirmations retain their existing guards. Never fire or simulate a
button event to dismiss a window. Reuse the real close action.

The creature viewer stays dismissed until the player leaves its stand, so X
does not immediately reopen it. Shop search cleanup, wardrobe preview teardown,
away-reward dismissal and hatch-choice cancellation reuse their owning actions.
Eleven shared close checks, ten exclusivity checks and the existing certificate,
away-income and hatch-choice suites passed offline. Source diagnostics passed.
Live keyboard/gameplay acceptance remains untested. No save or publication.


## Hyper-speed edge overlay, 4 November 2026

Approved speed streaks are passive decoration, not controls. Use eight cached
thin white gradient Frames at the outer left/right edges, native looping tweens,
and DisplayOrder zero so ordinary HUD/windows remain above them. Keep the centre
clear. They must not become Modal, Active or Selectable and must never capture
input. Enable only during the actual local moving boost; cancel and hide on
release, blocked gameplay and teardown. Low graphics disables the overlay.
Do not create a per-frame image/Frame stream or extend it over the centre.
See RunningBoostStreaks, RUNNING_SPEED_BALANCE.md and its native preview evidence.
## Shared hotkey keycaps, 4 November 2026

All authored buttons that expose keyboard shortcuts use ProjectUI.Hotkeys and
Theme.Images.Hotkey (80443119022364) for single characters and
Theme.Images.HotkeyWide (124245982875248) for named keys, with live text layered
on each blank cap. The wide artwork was regenerated at Daniel's request on
9 November 2026 and uses its original 3:1 ratio with Fit sizing. Reuse these
canonical assets. This decoration preserves each
button's existing skin, action, binding, focus and hit target. Native Roblox
ProximityPrompts retain their built-in input UI.

Raised word buttons accept a Hotkey string attribute or an existing final
shortcut suffix such as Select [E] or Cancel (X). ButtonStates extracts the
caption for presentation, reserves the cap width plus spacing before text fit,
and leaves the original Text available for translation and accessibility.
Keys are hidden for touch input. Existing garden action keycaps remain intact.
Birth-certificate OK explicitly declares E. Toolbar, hotbar number and emote
hints use Hotkeys.bindLabel; multiple hints such as ! / P draw separate caps.
Shift and Space use a wider cap. Icons, creature tiles, tabs and stat trays
retain their existing visual roles and do not become raised word buttons.

Native Edit previews checked ordinary shortcuts, explicit-key OK, Shift, Space,
number keys, paired keys, dynamic removal/restoration and a 120 by 40 compact
button. The existing 155 shared button-state checks passed. Camera restoration
and fixture removal passed. See output/shared-hotkeys-20261104. Guarded plan
d0da8dfa086d4aa891d398cca996a661 installed the eight combined keycap and guardian
presentation sources with exact readback and zero diagnostics. No gameplay,
place save or publication was performed.
## Doubled New Egg preview, 4 November 2026

The New Egg delivery popup's ViewportFrame is now 48% of banner width on each
axis, doubled from 24%. Its fitted camera and model remain unchanged, doubling
the egg's displayed width and height. The layout raises the egg while retaining
its former lower edge beside the caption, and offsets the artwork/text within
the existing canvas to prevent clipping. A top inset protects short screens;
normal artwork remains near one third down the safe screen. Confetti originates
behind the new egg centre. Rotation, drag/inertia, entrance and fading are kept.
Guarded plan 23fc42de05b448a1b124ad63eeaea396 installed NewEggBanner with exact
readback and zero diagnostics. Existing banner checks passed 134 assertions.
Evidence is retained in output/new-egg-banner-double-20261104. No gameplay,
place save or publication was performed.
Native Edit previews for desktop, portrait phone and short landscape also passed
layout, text fit, actual egg rotation, drag/inertia and source-template checks.
The retained images use an inert Frame snapshot because SurfaceGui does not
composite CanvasGroup in Edit. The initial blank captures were rejected and
replaced with inspected previews. Camera restoration and fixture removal passed.
## Egg mouseover highlight removed, 4 November 2026

Garden egg mouseover keeps its interaction card and normal prompt selection,
without creating a Highlight, tint or outline. GardenRoamingClient no longer
allocates LocalGardenHover. Quality effects and creature hover information keep
their existing behavior. Guarded plan 243198dc74ab4de589653fb3efc2b65b installed
the single source with exact readback and zero diagnostics. Existing hover
runtime checks passed 513 assertions. No gameplay, save or publication.
## Developer Panel summary text, 4 November 2026

The testing Developer Panel's selected-entry description is now 20 pixels,
increased from 15. Existing automatic vertical sizing, word wrapping and the
details scrollbar keep long summaries readable. Titles, steps and metadata
retain their current sizes. Guarded plan a7c8645b733e4f80934cdee0b5f9ae03
installed the single source with exact readback and zero diagnostics. A native
Edit preview verified the actual 20-pixel summary with longer wrapped text;
camera restoration and fixture removal passed. Evidence is under
output/developer-summary-text-20261104. No gameplay, save or publication.
## Pet summary DNA and merge visibility, 4 November 2026

Garden, Stored and Merge now reuse PetCollectionDetail itself for the selected
individual. Use the Collection header, illustrated trait icons,
following-buff card and statistic rows. Replace Discovered with the individual's
quality and add DNA as the fourth stat row with Theme.Images.DNA. Use the pet's
own confirmed height, weight, conservation, income and CreatureScale. Missing
DNA inputs display Unavailable. Following income retains Following you.

The details occupy a narrower right-hand panel when window width permits.
Search and Sort stay together above the left-hand grid, allowing the details
to start at the same tools-row height below the tabs. Descriptions are hidden
for Garden, Stored and Merge individuals, while Collection retains its
description. This later refinement supersedes the initial shared-description
version below. Current native views are under output/pet-full-height-detail-20261104.
Phone layouts stack the same scrollable component above actions. Short windows
retain native scrolling. Repeated refreshes preserve detail scroll position;
selecting another individual returns to its header. All stat icons reuse the
shared owning catalogues. No icon artwork was created or uploaded.

Collection and individual details share a two-row trait grid, including the
biome, conservation status, diet and travel types. Remove Standard baseline
from both. Collection retains its Discovered badge and species values. Its
right article uses 36 percent of the content width instead of 42 percent.

Merge mode retains the details for the last clicked pet. Selection count appears on the Merge action.
Merge and Cancel remain the only visible actions. Cancelling retains the inspected
pet. Mutation rules and server confirmation remain unchanged.

Plan bc808286eedf4e85835574bcb946714c installed four sources with exact readback
and zero diagnostics. Collection information passed 157 checks; Merge menu 40,
Collection projection 243 and preload handling 5. Nine isolated native Edit
states checked desktop, phone, short, large, Collection and DNA scrolling.
Evidence: output/pet-shared-detail-20261104/native.json and native-extras.json.
Camera state was restored and fixtures removed. Live gameplay, saving and
publication were not run. The previous bottom summary and its historical
evidence under output/pet-summary-dna-20261104 are superseded.

## Own-home visibility, 9 November 2026

Use Theme.Images.GardenOwner from assets/ui/house-callout-v6-owner-blue for the
strong saturated owner-blue frame. The maintained
tools/generate_house_callout_skill.py adapter reuses the Callout Card Gen
renderer; the renderer and adapter hashes are retained in provenance.json.
Preserve the original geometry, real alpha, separate icons and Fit rendering.
The existing grey GardenVisitor artwork remains canonical for other players.

GardenStatusView scales the whole visitor marker to 60 percent of the owner
equivalent in both dimensions and limits visitors to 180 studs; the own sign
retains 1,200 studs. A local transparent anchor retains the own sign after the
house streams out. HomeNavigation's small passive Home pointer reuses the
canonical arrow_forward, native rounded panel, Theme colours and body font.
It stays in the safe screen area, appears only outside Home for an off-screen
own marker, and follows HUD/camera hiding. The existing heartbeat owns updates.

Native constructor snapshots and exact installed source checks passed. The
sample widths are 760, 360 and 600 pixels; these are not live device tests.
See HOME.md and output/home-navigation-20261109/native.json for the six native
grass slots, restoration checks and separate gameplay acceptance limits.

