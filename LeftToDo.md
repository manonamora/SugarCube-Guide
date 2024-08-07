To include in the new version:
- Config.enableOptionalDebugging = true;
- Config.debug -> whole chapter on Debug
- The new SAve API



SugarCube v2.37.0 (2024-07-17)

- Fix issue with icon font styling.
- Fix issue with leftover event handlers.
- Update Config API:
- Update StoryInterface code passage:
- - Fix included passages being processed for data-passage attributes.

- Update Setting API:
- - Add Setting.addValue() static method.
- - Add Setting.getValue() static method.
- - Add Setting.setValue() static method.
- Update UI API:
- - Add UI.update() static method.
- Update UIBar API:
- - Deprecate UIBar.update() static method. -> UI.update()
- Update macros:
- - Fix <<if>> macro assignment error to ignore string internals during its checks and update it to default to opt-in, rather than opt-out.
- - Update <<for>> macro range syntax to accept a integer as the collection expression and made the value variable optional.
- - Update <<type>> macro to be compatible with <<capture>>.
- - Update widgets' _args special temporary variable to include a name property—i.e., _args.name.
- - Rename <<silently>> macro to <<silent>>. Added a <<silently>> alias for compatibility.
- - Add <<do>> and <<redo>> macros.
- Update markup:
- - Update <style> element image markup parsing to accept TwineScript.
- Update loadscreen to block full startup until dismissed.
- Add Serial API. This removes JSON extensions.
- Add utility functions:
- - Add triggerEvent().
- Add :uiupdate system event.
- Update bundled icon font and documented it.
    -> need to ask on the Twine server how to use in HTML as is
