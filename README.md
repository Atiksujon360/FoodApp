#ResturentNearMe 
Resturent Near Me designed by Atikur Rahman using React Native and Yelp API.

## Screenshots
 
 ![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/Home.png?raw=true)|![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/ResturentList.png?raw=true)
![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/ResturentDetails.png?raw=true)| ![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/success%20add%20to%20cart.png?raw=true)![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/view%20cart.png?raw=true)
![](https://github.com/Atiksujon360/ResturentNearMe/blob/master/assets/Screenshots/success%20add%20to%20cart.png?raw=true)
 ## Directory Structure
```
Folder PATH  listing:
├───.vscode
│   └───.react
├───android
│   ├───.gradle
│   │   ├───6.9
│   │   │   ├───executionHistory
│   │   │   ├───fileChanges
│   │   │   ├───fileHashes
│   │   │   ├───javaCompile
│   │   │   └───vcsMetadata-1
│   │   ├───buildOutputCleanup
│   │   ├───checksums
│   │   └───vcs-1
│   ├───app
│   │   ├───build
│   │   │   ├───generated
│   │   │   │   ├───ap_generated_sources
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───res
│   │   │   │   │   ├───pngs
│   │   │   │   │   │   └───debug
│   │   │   │   │   └───resValues
│   │   │   │   │       └───debug
│   │   │   │   │           └───values
│   │   │   │   ├───rncli
│   │   │   │   │   └───src
│   │   │   │   │       └───main
│   │   │   │   │           └───java
│   │   │   │   │               └───com
│   │   │   │   │                   └───facebook
│   │   │   │   │                       └───react
│   │   │   │   └───source
│   │   │   │       └───buildConfig
│   │   │   │           └───debug
│   │   │   │               └───com
│   │   │   │                   └───practiceapp
│   │   │   ├───intermediates
│   │   │   │   ├───aar_metadata_check
│   │   │   │   │   └───debug
│   │   │   │   ├───annotation_processor_list
│   │   │   │   │   └───debug
│   │   │   │   ├───app_metadata
│   │   │   │   │   └───debug
│   │   │   │   ├───compatible_screen_manifest
│   │   │   │   │   └───debug
│   │   │   │   ├───compile_and_runtime_not_namespaced_r_class_jar
│   │   │   │   │   └───debug
│   │   │   │   ├───compressed_assets
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           └───assets
│   │   │   │   │               └───fonts
│   │   │   │   ├───data_binding_layout_info_type_merge
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───desugar_graph
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           ├───currentProject
│   │   │   │   │           │   ├───dirs_bucket_0
│   │   │   │   │           │   ├───dirs_bucket_1
│   │   │   │   │           │   ├───dirs_bucket_2
│   │   │   │   │           │   ├───dirs_bucket_3
│   │   │   │   │           │   ├───jar_fc4fb7b01e2aa79eb27c31f3662ef80f9242d5f682682960e4d5a0b678169614_bucket_0
│   │   │   │   │           │   ├───jar_fc4fb7b01e2aa79eb27c31f3662ef80f9242d5f682682960e4d5a0b678169614_bucket_1
│   │   │   │   │           │   ├───jar_fc4fb7b01e2aa79eb27c31f3662ef80f9242d5f682682960e4d5a0b678169614_bucket_2
│   │   │   │   │           │   └───jar_fc4fb7b01e2aa79eb27c31f3662ef80f9242d5f682682960e4d5a0b678169614_bucket_3
│   │   │   │   │           ├───externalLibs
│   │   │   │   │           ├───mixedScopes
│   │   │   │   │           └───otherProjects
│   │   │   │   ├───dex
│   │   │   │   │   └───debug
│   │   │   │   │       ├───mergeExtDexDebug
│   │   │   │   │       ├───mergeLibDexDebug
│   │   │   │   │       │   ├───0
│   │   │   │   │       │   ├───1
│   │   │   │   │       │   ├───10
│   │   │   │   │       │   ├───11
│   │   │   │   │       │   ├───12
│   │   │   │   │       │   ├───13
│   │   │   │   │       │   ├───14
│   │   │   │   │       │   ├───15
│   │   │   │   │       │   ├───2
│   │   │   │   │       │   ├───3
│   │   │   │   │       │   ├───4
│   │   │   │   │       │   ├───5
│   │   │   │   │       │   ├───6
│   │   │   │   │       │   ├───7
│   │   │   │   │       │   ├───8
│   │   │   │   │       │   └───9
│   │   │   │   │       └───mergeProjectDexDebug
│   │   │   │   │           ├───0
│   │   │   │   │           ├───1
│   │   │   │   │           ├───10
│   │   │   │   │           ├───11
│   │   │   │   │           ├───12
│   │   │   │   │           ├───13
│   │   │   │   │           ├───14
│   │   │   │   │           ├───15
│   │   │   │   │           ├───2
│   │   │   │   │           ├───3
│   │   │   │   │           ├───4
│   │   │   │   │           ├───5
│   │   │   │   │           ├───6
│   │   │   │   │           ├───7
│   │   │   │   │           ├───8
│   │   │   │   │           └───9
│   │   │   │   ├───dex_archive_input_jar_hashes
│   │   │   │   │   └───debug
│   │   │   │   ├───dex_number_of_buckets_file
│   │   │   │   │   └───debug
│   │   │   │   ├───duplicate_classes_check
│   │   │   │   │   └───debug
│   │   │   │   ├───external_file_lib_dex_archives
│   │   │   │   │   └───debug
│   │   │   │   ├───external_libs_dex_archive
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───external_libs_dex_archive_with_artifact_transforms
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───incremental
│   │   │   │   │   ├───debug-mergeJavaRes
│   │   │   │   │   │   └───zip-cache
│   │   │   │   │   ├───debug-mergeNativeLibs
│   │   │   │   │   │   └───zip-cache
│   │   │   │   │   ├───mergeDebugAssets
│   │   │   │   │   ├───mergeDebugJniLibFolders
│   │   │   │   │   ├───mergeDebugResources
│   │   │   │   │   │   ├───merged.dir
│   │   │   │   │   │   │   ├───values
│   │   │   │   │   │   │   ├───values-af
│   │   │   │   │   │   │   ├───values-am
│   │   │   │   │   │   │   ├───values-ar
│   │   │   │   │   │   │   ├───values-as
│   │   │   │   │   │   │   ├───values-az
│   │   │   │   │   │   │   ├───values-b+sr+Latn
│   │   │   │   │   │   │   ├───values-be
│   │   │   │   │   │   │   ├───values-bg
│   │   │   │   │   │   │   ├───values-bn
│   │   │   │   │   │   │   ├───values-bs
│   │   │   │   │   │   │   ├───values-ca
│   │   │   │   │   │   │   ├───values-cs
│   │   │   │   │   │   │   ├───values-da
│   │   │   │   │   │   │   ├───values-de
│   │   │   │   │   │   │   ├───values-el
│   │   │   │   │   │   │   ├───values-en-rAU
│   │   │   │   │   │   │   ├───values-en-rCA
│   │   │   │   │   │   │   ├───values-en-rGB
│   │   │   │   │   │   │   ├───values-en-rIN
│   │   │   │   │   │   │   ├───values-en-rXC
│   │   │   │   │   │   │   ├───values-es
│   │   │   │   │   │   │   ├───values-es-rUS
│   │   │   │   │   │   │   ├───values-et
│   │   │   │   │   │   │   ├───values-eu
│   │   │   │   │   │   │   ├───values-fa
│   │   │   │   │   │   │   ├───values-fi
│   │   │   │   │   │   │   ├───values-fr
│   │   │   │   │   │   │   ├───values-fr-rCA
│   │   │   │   │   │   │   ├───values-gl
│   │   │   │   │   │   │   ├───values-gu
│   │   │   │   │   │   │   ├───values-h360dp-land-v13
│   │   │   │   │   │   │   ├───values-h480dp-land-v13
│   │   │   │   │   │   │   ├───values-h720dp-v13
│   │   │   │   │   │   │   ├───values-hdpi-v4
│   │   │   │   │   │   │   ├───values-hi
│   │   │   │   │   │   │   ├───values-hr
│   │   │   │   │   │   │   ├───values-hu
│   │   │   │   │   │   │   ├───values-hy
│   │   │   │   │   │   │   ├───values-in
│   │   │   │   │   │   │   ├───values-is
│   │   │   │   │   │   │   ├───values-it
│   │   │   │   │   │   │   ├───values-iw
│   │   │   │   │   │   │   ├───values-ja
│   │   │   │   │   │   │   ├───values-ka
│   │   │   │   │   │   │   ├───values-kk
│   │   │   │   │   │   │   ├───values-km
│   │   │   │   │   │   │   ├───values-kn
│   │   │   │   │   │   │   ├───values-ko
│   │   │   │   │   │   │   ├───values-ky
│   │   │   │   │   │   │   ├───values-land
│   │   │   │   │   │   │   ├───values-large-v4
│   │   │   │   │   │   │   ├───values-ldltr-v21
│   │   │   │   │   │   │   ├───values-lo
│   │   │   │   │   │   │   ├───values-lt
│   │   │   │   │   │   │   ├───values-lv
│   │   │   │   │   │   │   ├───values-mk
│   │   │   │   │   │   │   ├───values-ml
│   │   │   │   │   │   │   ├───values-mn
│   │   │   │   │   │   │   ├───values-mr
│   │   │   │   │   │   │   ├───values-ms
│   │   │   │   │   │   │   ├───values-my
│   │   │   │   │   │   │   ├───values-nb
│   │   │   │   │   │   │   ├───values-ne
│   │   │   │   │   │   │   ├───values-night-v8
│   │   │   │   │   │   │   ├───values-nl
│   │   │   │   │   │   │   ├───values-or
│   │   │   │   │   │   │   ├───values-pa
│   │   │   │   │   │   │   ├───values-pl
│   │   │   │   │   │   │   ├───values-port
│   │   │   │   │   │   │   ├───values-pt
│   │   │   │   │   │   │   ├───values-pt-rBR
│   │   │   │   │   │   │   ├───values-pt-rPT
│   │   │   │   │   │   │   ├───values-ro
│   │   │   │   │   │   │   ├───values-ru
│   │   │   │   │   │   │   ├───values-si
│   │   │   │   │   │   │   ├───values-sk
│   │   │   │   │   │   │   ├───values-sl
│   │   │   │   │   │   │   ├───values-small-v4
│   │   │   │   │   │   │   ├───values-sq
│   │   │   │   │   │   │   ├───values-sr
│   │   │   │   │   │   │   ├───values-sv
│   │   │   │   │   │   │   ├───values-sw
│   │   │   │   │   │   │   ├───values-sw600dp-v13
│   │   │   │   │   │   │   ├───values-ta
│   │   │   │   │   │   │   ├───values-te
│   │   │   │   │   │   │   ├───values-th
│   │   │   │   │   │   │   ├───values-tl
│   │   │   │   │   │   │   ├───values-tr
│   │   │   │   │   │   │   ├───values-uk
│   │   │   │   │   │   │   ├───values-ur
│   │   │   │   │   │   │   ├───values-uz
│   │   │   │   │   │   │   ├───values-v16
│   │   │   │   │   │   │   ├───values-v17
│   │   │   │   │   │   │   ├───values-v18
│   │   │   │   │   │   │   ├───values-v21
│   │   │   │   │   │   │   ├───values-v22
│   │   │   │   │   │   │   ├───values-v23
│   │   │   │   │   │   │   ├───values-v24
│   │   │   │   │   │   │   ├───values-v25
│   │   │   │   │   │   │   ├───values-v26
│   │   │   │   │   │   │   ├───values-v28
│   │   │   │   │   │   │   ├───values-vi
│   │   │   │   │   │   │   ├───values-w360dp-port-v13
│   │   │   │   │   │   │   ├───values-w480dp-port-v13
│   │   │   │   │   │   │   ├───values-watch-v20
│   │   │   │   │   │   │   ├───values-watch-v21
│   │   │   │   │   │   │   ├───values-xlarge-v4
│   │   │   │   │   │   │   ├───values-zh-rCN
│   │   │   │   │   │   │   ├───values-zh-rHK
│   │   │   │   │   │   │   ├───values-zh-rTW
│   │   │   │   │   │   │   └───values-zu
│   │   │   │   │   │   └───stripped.dir
│   │   │   │   │   ├───mergeDebugShaders
│   │   │   │   │   ├───packageDebug
│   │   │   │   │   │   └───tmp
│   │   │   │   │   │       └───debug
│   │   │   │   │   │           └───zip-cache
│   │   │   │   │   └───processDebugResources
│   │   │   │   ├───javac
│   │   │   │   │   └───debug
│   │   │   │   │       └───classes
│   │   │   │   │           └───com
│   │   │   │   │               ├───facebook
│   │   │   │   │               │   └───react
│   │   │   │   │               └───practiceapp
│   │   │   │   ├───manifest_merge_blame_file
│   │   │   │   │   └───debug
│   │   │   │   ├───merged_assets
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           └───fonts
│   │   │   │   ├───merged_java_res
│   │   │   │   │   └───debug
│   │   │   │   ├───merged_jni_libs
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───merged_manifest
│   │   │   │   │   └───debug
│   │   │   │   ├───merged_manifests
│   │   │   │   │   └───debug
│   │   │   │   ├───merged_native_libs
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           └───lib
│   │   │   │   │               ├───arm64-v8a
│   │   │   │   │               ├───armeabi-v7a
│   │   │   │   │               ├───x86
│   │   │   │   │               └───x86_64
│   │   │   │   ├───merged_res_blame_folder
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           ├───multi-v2
│   │   │   │   │           └───single
│   │   │   │   ├───merged_shaders
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───mixed_scope_dex_archive
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───navigation_json
│   │   │   │   │   └───debug
│   │   │   │   ├───packaged_manifests
│   │   │   │   │   └───debug
│   │   │   │   ├───processed_res
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───project_dex_archive
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           └───com
│   │   │   │   │               ├───facebook
│   │   │   │   │               │   └───react
│   │   │   │   │               └───practiceapp
│   │   │   │   ├───res
│   │   │   │   │   └───merged
│   │   │   │   │       └───debug
│   │   │   │   ├───runtime_symbol_list
│   │   │   │   │   └───debug
│   │   │   │   ├───signing_config_versions
│   │   │   │   │   └───debug
│   │   │   │   ├───stripped_native_libs
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   │           └───lib
│   │   │   │   │               ├───arm64-v8a
│   │   │   │   │               ├───armeabi-v7a
│   │   │   │   │               ├───x86
│   │   │   │   │               └───x86_64
│   │   │   │   ├───sub_project_dex_archive
│   │   │   │   │   └───debug
│   │   │   │   │       └───out
│   │   │   │   ├───symbol_list_with_package_name
│   │   │   │   │   └───debug
│   │   │   │   └───validate_signing_config
│   │   │   │       └───debug
│   │   │   ├───outputs
│   │   │   │   ├───apk
│   │   │   │   │   └───debug
│   │   │   │   └───logs
│   │   │   └───tmp
│   │   │       └───compileDebugJavaWithJavac
│   │   └───src
│   │       ├───debug
│   │       │   └───java
│   │       │       └───com
│   │       │           └───practiceapp
│   │       └───main
│   │           ├───assets
│   │           │   └───fonts
│   │           ├───java
│   │           │   └───com
│   │           │       └───practiceapp
│   │           └───res
│   │               ├───mipmap-hdpi
│   │               ├───mipmap-mdpi
│   │               ├───mipmap-xhdpi
│   │               ├───mipmap-xxhdpi
│   │               ├───mipmap-xxxhdpi
│   │               └───values
│   ├───build
│   │   └───kotlin
│   │       └───sessions
│   └───gradle
│       └───wrapper
├───assets
│   ├───animations
│   ├───icons
│   ├───images
│   └───Screenshots
├───components
├───ios
│   ├───PracticeApp
│   │   └───Images.xcassets
│   │       └───AppIcon.appiconset
│   ├───PracticeApp.xcodeproj
│   │   └───xcshareddata
│   │       └───xcschemes
│   └───PracticeAppTests
├───node_modules
│   ├───.bin
│   ├───@ant-design
│   │   └───icons-react-native
│   │       ├───es
│   │       ├───fonts
│   │       └───lib
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   └───transformation
│   │   │   │       ├───file
│   │   │   │       └───util
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───source-map
│   │   │   │       ├───dist
│   │   │   │       └───lib
│   │   │   └───src
│   │   │       ├───config
│   │   │       │   └───files
│   │   │       └───transformation
│   │   │           └───util
│   │   ├───generator
│   │   │   ├───lib
│   │   │   │   ├───generators
│   │   │   │   └───node
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───source-map
│   │   │           ├───dist
│   │   │           └───lib
│   │   ├───helper-annotate-as-pure
│   │   │   └───lib
│   │   ├───helper-builder-binary-assignment-operator-visitor
│   │   │   └───lib
│   │   ├───helper-compilation-targets
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───helper-create-class-features-plugin
│   │   │   └───lib
│   │   ├───helper-create-regexp-features-plugin
│   │   │   └───lib
│   │   ├───helper-define-polyfill-provider
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   │   ├───browser
│   │   │   │   ├───node
│   │   │   │   └───visitors
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───src
│   │   │       ├───browser
│   │   │       └───node
│   │   ├───helper-explode-assignable-expression
│   │   │   └───lib
│   │   ├───helper-function-name
│   │   │   └───lib
│   │   ├───helper-get-function-arity
│   │   │   └───lib
│   │   ├───helper-hoist-variables
│   │   │   └───lib
│   │   ├───helper-member-expression-to-functions
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-optimise-call-expression
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-remap-async-to-generator
│   │   │   └───lib
│   │   ├───helper-replace-supers
│   │   │   └───lib
│   │   ├───helper-simple-access
│   │   │   └───lib
│   │   ├───helper-skip-transparent-expression-wrappers
│   │   │   └───lib
│   │   ├───helper-split-export-declaration
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   ├───lib
│   │   │   └───scripts
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helper-wrap-function
│   │   │   └───lib
│   │   ├───helpers
│   │   │   ├───lib
│   │   │   │   └───helpers
│   │   │   └───scripts
│   │   ├───highlight
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───types
│   │   │       ├───has-flag
│   │   │       └───supports-color
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-proposal-class-properties
│   │   │   └───lib
│   │   ├───plugin-proposal-export-default-from
│   │   │   └───lib
│   │   ├───plugin-proposal-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-proposal-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-syntax-async-generators
│   │   │   └───lib
│   │   ├───plugin-syntax-bigint
│   │   │   └───lib
│   │   ├───plugin-syntax-class-properties
│   │   │   └───lib
│   │   ├───plugin-syntax-dynamic-import
│   │   │   └───lib
│   │   ├───plugin-syntax-export-default-from
│   │   │   └───lib
│   │   ├───plugin-syntax-flow
│   │   │   └───lib
│   │   ├───plugin-syntax-import-meta
│   │   │   └───lib
│   │   ├───plugin-syntax-json-strings
│   │   │   └───lib
│   │   ├───plugin-syntax-jsx
│   │   │   └───lib
│   │   ├───plugin-syntax-logical-assignment-operators
│   │   │   └───lib
│   │   ├───plugin-syntax-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-syntax-numeric-separator
│   │   │   └───lib
│   │   ├───plugin-syntax-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-syntax-top-level-await
│   │   │   └───lib
│   │   ├───plugin-syntax-typescript
│   │   │   ├───lib
│   │   │   └───test
│   │   │       └───fixtures
│   │   │           └───disallow-jsx-ambiguity
│   │   │               ├───type-assertion
│   │   │               ├───type-parameter
│   │   │               └───type-parameter-unambiguous
│   │   ├───plugin-transform-arrow-functions
│   │   │   └───lib
│   │   ├───plugin-transform-async-to-generator
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoped-functions
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoping
│   │   │   └───lib
│   │   ├───plugin-transform-classes
│   │   │   └───lib
│   │   ├───plugin-transform-computed-properties
│   │   │   └───lib
│   │   ├───plugin-transform-destructuring
│   │   │   └───lib
│   │   ├───plugin-transform-exponentiation-operator
│   │   │   └───lib
│   │   ├───plugin-transform-flow-strip-types
│   │   │   └───lib
│   │   ├───plugin-transform-for-of
│   │   │   └───lib
│   │   ├───plugin-transform-function-name
│   │   │   └───lib
│   │   ├───plugin-transform-literals
│   │   │   └───lib
│   │   ├───plugin-transform-member-expression-literals
│   │   │   └───lib
│   │   ├───plugin-transform-modules-commonjs
│   │   │   └───lib
│   │   ├───plugin-transform-object-assign
│   │   │   └───lib
│   │   ├───plugin-transform-object-super
│   │   │   └───lib
│   │   ├───plugin-transform-parameters
│   │   │   └───lib
│   │   ├───plugin-transform-property-literals
│   │   │   └───lib
│   │   ├───plugin-transform-react-display-name
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-self
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-source
│   │   │   └───lib
│   │   ├───plugin-transform-regenerator
│   │   │   └───lib
│   │   ├───plugin-transform-runtime
│   │   │   ├───lib
│   │   │   │   └───get-runtime-path
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───src
│   │   │       └───get-runtime-path
│   │   ├───plugin-transform-shorthand-properties
│   │   │   └───lib
│   │   ├───plugin-transform-spread
│   │   │   └───lib
│   │   ├───plugin-transform-sticky-regex
│   │   │   └───lib
│   │   ├───plugin-transform-template-literals
│   │   │   └───lib
│   │   ├───plugin-transform-typescript
│   │   │   └───lib
│   │   ├───plugin-transform-unicode-regex
│   │   │   └───lib
│   │   ├───preset-flow
│   │   │   └───lib
│   │   ├───preset-typescript
│   │   │   └───lib
│   │   ├───register
│   │   │   └───lib
│   │   ├───runtime
│   │   │   ├───helpers
│   │   │   │   └───esm
│   │   │   └───regenerator
│   │   ├───template
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───traverse
│   │   │   ├───lib
│   │   │   │   ├───path
│   │   │   │   │   ├───generated
│   │   │   │   │   ├───inference
│   │   │   │   │   └───lib
│   │   │   │   └───scope
│   │   │   │       └───lib
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───scripts
│   │   │       └───generators
│   │   └───types
│   │       ├───lib
│   │       │   ├───asserts
│   │       │   │   └───generated
│   │       │   ├───ast-types
│   │       │   │   └───generated
│   │       │   ├───builders
│   │       │   │   ├───flow
│   │       │   │   ├───generated
│   │       │   │   ├───react
│   │       │   │   └───typescript
│   │       │   ├───clone
│   │       │   ├───comments
│   │       │   ├───constants
│   │       │   │   └───generated
│   │       │   ├───converters
│   │       │   ├───definitions
│   │       │   ├───modifications
│   │       │   │   ├───flow
│   │       │   │   └───typescript
│   │       │   ├───retrievers
│   │       │   ├───traverse
│   │       │   ├───utils
│   │       │   │   └───react
│   │       │   └───validators
│   │       │       ├───generated
│   │       │       └───react
│   │       └───scripts
│   │           ├───generators
│   │           └───utils
│   ├───@bcoe
│   │   └───v8-coverage
│   │       ├───dist
│   │       │   └───lib
│   │       │       └───_src
│   │       └───src
│   │           ├───lib
│   │           └───test
│   ├───@callstack
│   │   └───react-theme-provider
│   │       ├───lib
│   │       └───typings
│   │           └───__tests__
│   ├───@cnakazawa
│   │   └───watch
│   │       └───scripts
│   ├───@eslint
│   │   └───eslintrc
│   │       ├───conf
│   │       ├───lib
│   │       │   ├───config-array
│   │       │   └───shared
│   │       └───node_modules
│   │           ├───.bin
│   │           └───globals
│   ├───@hapi
│   │   ├───hoek
│   │   │   └───lib
│   │   └───topo
│   │       └───lib
│   ├───@istanbuljs
│   │   ├───load-nyc-config
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   └───schema
│   ├───@jest
│   │   ├───console
│   │   │   └───build
│   │   ├───core
│   │   │   ├───build
│   │   │   │   ├───assets
│   │   │   │   ├───cli
│   │   │   │   ├───lib
│   │   │   │   └───plugins
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───rimraf
│   │   ├───create-cache-key-function
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       ├───@jest
│   │   │       │   └───types
│   │   │       │       └───build
│   │   │       └───@types
│   │   │           └───yargs
│   │   ├───environment
│   │   │   └───build
│   │   ├───fake-timers
│   │   │   └───build
│   │   ├───globals
│   │   │   └───build
│   │   ├───reporters
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       └───istanbul-lib-instrument
│   │   │           ├───dist
│   │   │           └───node_modules
│   │   │               └───.bin
│   │   ├───source-map
│   │   │   └───build
│   │   ├───test-result
│   │   │   └───build
│   │   ├───test-sequencer
│   │   │   ├───build
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───transform
│   │   │   └───build
│   │   └───types
│   │       └───build
│   ├───@react-native
│   │   ├───assets
│   │   ├───normalize-color
│   │   └───polyfills
│   │       └───__tests__
│   ├───@react-native-community
│   │   ├───cli
│   │   │   ├───build
│   │   │   │   ├───commands
│   │   │   │   │   ├───config
│   │   │   │   │   ├───doctor
│   │   │   │   │   │   └───healthchecks
│   │   │   │   │   ├───info
│   │   │   │   │   ├───init
│   │   │   │   │   │   └───errors
│   │   │   │   │   ├───install
│   │   │   │   │   ├───link
│   │   │   │   │   └───upgrade
│   │   │   │   └───tools
│   │   │   │       ├───config
│   │   │   │       ├───generator
│   │   │   │       └───windows
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       ├───ansi-regex
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       └───strip-ansi
│   │   ├───cli-debugger-ui
│   │   │   └───build
│   │   │       ├───middleware
│   │   │       └───ui
│   │   │           └───assets
│   │   ├───cli-hermes
│   │   │   ├───build
│   │   │   │   └───profileHermes
│   │   │   └───node_modules
│   │   │       └───chalk
│   │   │           └───source
│   │   ├───cli-platform-android
│   │   │   ├───build
│   │   │   │   ├───commands
│   │   │   │   │   ├───logAndroid
│   │   │   │   │   └───runAndroid
│   │   │   │   ├───config
│   │   │   │   ├───link
│   │   │   │   │   └───patches
│   │   │   │   └───utils
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───chalk
│   │   │           └───source
│   │   ├───cli-platform-ios
│   │   │   ├───build
│   │   │   │   ├───commands
│   │   │   │   │   ├───logIOS
│   │   │   │   │   └───runIOS
│   │   │   │   ├───config
│   │   │   │   ├───link
│   │   │   │   │   └───common
│   │   │   │   └───link-pods
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───chalk
│   │   │           └───source
│   │   ├───cli-plugin-metro
│   │   │   ├───build
│   │   │   │   ├───commands
│   │   │   │   │   ├───bundle
│   │   │   │   │   └───start
│   │   │   │   └───tools
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───chalk
│   │   │           └───source
│   │   ├───cli-server-api
│   │   │   └───build
│   │   │       └───websocket
│   │   ├───cli-tools
│   │   │   ├───build
│   │   │   │   └───releaseChecker
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       ├───chalk
│   │   │       │   └───source
│   │   │       └───shell-quote
│   │   │           ├───example
│   │   │           └───test
│   │   ├───cli-types
│   │   │   └───build
│   │   ├───eslint-config
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   └───eslint-plugin
│   │       └───__tests__
│   ├───@react-navigation
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───commonjs
│   │   │   │   ├───module
│   │   │   │   └───typescript
│   │   │   │       └───src
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───escape-string-regexp
│   │   │   └───src
│   │   ├───elements
│   │   │   ├───lib
│   │   │   │   ├───commonjs
│   │   │   │   │   ├───assets
│   │   │   │   │   └───Header
│   │   │   │   ├───module
│   │   │   │   │   ├───assets
│   │   │   │   │   └───Header
│   │   │   │   └───typescript
│   │   │   │       └───src
│   │   │   │           └───Header
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───src
│   │   │       ├───assets
│   │   │       └───Header
│   │   ├───native
│   │   │   ├───lib
│   │   │   │   ├───commonjs
│   │   │   │   │   └───theming
│   │   │   │   ├───module
│   │   │   │   │   └───theming
│   │   │   │   └───typescript
│   │   │   │       └───src
│   │   │   │           ├───theming
│   │   │   │           └───__mocks__
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───escape-string-regexp
│   │   │   └───src
│   │   │       ├───theming
│   │   │       └───__mocks__
│   │   ├───native-stack
│   │   │   ├───lib
│   │   │   │   ├───commonjs
│   │   │   │   │   ├───navigators
│   │   │   │   │   └───views
│   │   │   │   ├───module
│   │   │   │   │   ├───navigators
│   │   │   │   │   └───views
│   │   │   │   └───typescript
│   │   │   │       └───src
│   │   │   │           ├───navigators
│   │   │   │           └───views
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───src
│   │   │       ├───navigators
│   │   │       └───views
│   │   └───routers
│   │       ├───lib
│   │       │   ├───commonjs
│   │       │   ├───module
│   │       │   └───typescript
│   │       │       └───src
│   │       ├───node_modules
│   │       │   └───.bin
│   │       └───src
│   ├───@sideway
│   │   ├───address
│   │   │   └───lib
│   │   ├───formula
│   │   │   └───lib
│   │   └───pinpoint
│   │       └───lib
│   ├───@sinonjs
│   │   ├───commons
│   │   │   ├───lib
│   │   │   │   └───prototypes
│   │   │   └───types
│   │   │       └───prototypes
│   │   └───fake-timers
│   │       └───src
│   ├───@tootallnate
│   │   └───once
│   │       └───dist
│   ├───@types
│   │   ├───babel__core
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───babel__generator
│   │   ├───babel__template
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───babel__traverse
│   │   │   └───ts4.1
│   │   ├───eslint-visitor-keys
│   │   ├───graceful-fs
│   │   ├───istanbul-lib-coverage
│   │   ├───istanbul-lib-report
│   │   ├───istanbul-reports
│   │   ├───json-schema
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───stream
│   │   │   └───timers
│   │   ├───normalize-package-data
│   │   ├───prettier
│   │   ├───stack-utils
│   │   ├───yargs
│   │   └───yargs-parser
│   ├───@typescript-eslint
│   │   ├───eslint-plugin
│   │   │   ├───dist
│   │   │   │   ├───configs
│   │   │   │   ├───rules
│   │   │   │   │   └───indent-new-do-not-use
│   │   │   │   └───util
│   │   │   ├───docs
│   │   │   │   └───rules
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           ├───bin
│   │   │           ├───classes
│   │   │           ├───functions
│   │   │           ├───internal
│   │   │           └───ranges
│   │   ├───experimental-utils
│   │   │   ├───dist
│   │   │   │   ├───ast-utils
│   │   │   │   │   └───eslint-utils
│   │   │   │   ├───eslint-utils
│   │   │   │   ├───ts-eslint
│   │   │   │   └───ts-eslint-scope
│   │   │   ├───node_modules
│   │   │   │   └───.bin
│   │   │   └───_ts3.4
│   │   │       └───dist
│   │   │           ├───ast-utils
│   │   │           │   └───eslint-utils
│   │   │           ├───eslint-utils
│   │   │           ├───ts-eslint
│   │   │           └───ts-eslint-scope
│   │   ├───parser
│   │   │   ├───dist
│   │   │   │   └───scope
│   │   │   └───node_modules
│   │   │       └───.bin
│   │   ├───types
│   │   │   └───dist
│   │   ├───typescript-estree
│   │   │   ├───dist
│   │   │   │   ├───create-program
│   │   │   │   └───ts-estree
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           ├───bin
│   │   │           ├───classes
│   │   │           ├───functions
│   │   │           ├───internal
│   │   │           └───ranges
│   │   └───visitor-keys
│   │       └───dist
│   ├───abab
│   │   └───lib
│   ├───abort-controller
│   │   └───dist
│   ├───absolute-path
│   │   └───test
│   ├───accepts
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-globals
│   │   └───node_modules
│   │       └───.bin
│   ├───acorn-jsx
│   │   └───node_modules
│   │       └───.bin
│   ├───acorn-walk
│   │   └───dist
│   ├───agent-base
│   │   ├───dist
│   │   │   └───src
│   │   └───src
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───anser
│   │   └───lib
│   ├───ansi-colors
│   │   └───types
│   ├───ansi-escapes
│   │   └───node_modules
│   │       └───type-fest
│   │           ├───source
│   │           └───ts41
│   ├───ansi-fragments
│   │   ├───build
│   │   │   └───fragments
│   │   │       └───__tests__
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       └───strip-ansi
│   ├───ansi-regex
│   ├───ansi-styles
│   │   └───node_modules
│   │       └───color-convert
│   ├───anymatch
│   ├───appdirsjs
│   │   └───dist
│   ├───argparse
│   │   └───lib
│   │       ├───action
│   │       │   ├───append
│   │       │   └───store
│   │       ├───argument
│   │       └───help
│   ├───arr-diff
│   ├───arr-flatten
│   ├───arr-union
│   ├───array-filter
│   │   └───test
│   ├───array-includes
│   │   ├───.github
│   │   └───test
│   ├───array-map
│   │   ├───example
│   │   └───test
│   ├───array-reduce
│   │   ├───example
│   │   └───test
│   ├───array-unique
│   ├───array.prototype.flatmap
│   │   ├───.github
│   │   └───test
│   ├───asap
│   ├───assign-symbols
│   ├───ast-types
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───def
│   │   ├───gen
│   │   └───lib
│   ├───astral-regex
│   ├───async
│   │   ├───dist
│   │   └───internal
│   ├───async-limiter
│   ├───asynckit
│   │   └───lib
│   ├───atob
│   │   └───bin
│   ├───babel-core
│   ├───babel-eslint
│   │   ├───lib
│   │   │   └───babylon-to-espree
│   │   └───node_modules
│   │       └───.bin
│   ├───babel-jest
│   │   └───build
│   ├───babel-plugin-dynamic-import-node
│   │   └───lib
│   ├───babel-plugin-istanbul
│   │   └───lib
│   ├───babel-plugin-jest-hoist
│   │   └───build
│   ├───babel-plugin-polyfill-corejs2
│   │   ├───esm
│   │   ├───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───babel-plugin-polyfill-corejs3
│   │   ├───core-js-compat
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-polyfill-regenerator
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-syntax-trailing-function-commas
│   │   └───lib
│   ├───babel-preset-current-node-syntax
│   │   ├───scripts
│   │   └───src
│   ├───babel-preset-fbjs
│   │   └───plugins
│   │       └───test-utils
│   ├───babel-preset-jest
│   ├───balanced-match
│   │   └───.github
│   ├───base
│   │   └───node_modules
│   │       └───define-property
│   ├───base64-js
│   ├───big-integer
│   ├───bplist-creator
│   │   └───test
│   ├───bplist-parser
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───browser-process-hrtime
│   ├───browserslist
│   ├───bser
│   ├───buffer-from
│   ├───bytes
│   ├───cache-base
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───caller-callsite
│   │   └───node_modules
│   │       └───callsites
│   ├───caller-path
│   ├───callsites
│   ├───camelcase
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───capture-exit
│   ├───chalk
│   │   └───source
│   ├───char-regex
│   ├───ci-info
│   ├───cjs-module-lexer
│   │   └───dist
│   ├───class-utils
│   ├───cli-cursor
│   ├───cli-spinners
│   ├───cliui
│   ├───clone
│   ├───clone-deep
│   ├───co
│   ├───collect-v8-coverage
│   ├───collection-visit
│   ├───color
│   ├───color-convert
│   │   └───node_modules
│   │       └───color-name
│   ├───color-name
│   ├───color-string
│   ├───colorette
│   ├───colors
│   │   ├───examples
│   │   ├───lib
│   │   │   ├───custom
│   │   │   ├───maps
│   │   │   └───system
│   │   └───themes
│   ├───combined-stream
│   │   └───lib
│   ├───command-exists
│   │   ├───lib
│   │   └───test
│   ├───commander
│   │   └───typings
│   ├───commondir
│   │   ├───example
│   │   └───test
│   ├───component-emitter
│   ├───compressible
│   ├───compression
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───connect
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───convert-source-map
│   ├───copy-descriptor
│   ├───core-js-compat
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           ├───bin
│   │           ├───classes
│   │           ├───functions
│   │           ├───internal
│   │           └───ranges
│   ├───core-util-is
│   │   └───lib
│   ├───cosmiconfig
│   │   ├───dist
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───import-fresh
│   │       └───resolve-from
│   ├───cross-spawn
│   │   ├───lib
│   │   │   └───util
│   │   └───node_modules
│   │       ├───.bin
│   │       └───path-key
│   ├───cssom
│   │   └───lib
│   ├───cssstyle
│   │   ├───lib
│   │   │   ├───properties
│   │   │   └───utils
│   │   └───node_modules
│   │       └───cssom
│   │           └───lib
│   ├───data-urls
│   │   └───lib
│   ├───dayjs
│   │   ├───esm
│   │   │   ├───locale
│   │   │   └───plugin
│   │   │       ├───advancedFormat
│   │   │       ├───arraySupport
│   │   │       ├───badMutable
│   │   │       ├───buddhistEra
│   │   │       ├───calendar
│   │   │       ├───customParseFormat
│   │   │       ├───dayOfYear
│   │   │       ├───devHelper
│   │   │       ├───duration
│   │   │       ├───isBetween
│   │   │       ├───isLeapYear
│   │   │       ├───isMoment
│   │   │       ├───isoWeek
│   │   │       ├───isoWeeksInYear
│   │   │       ├───isSameOrAfter
│   │   │       ├───isSameOrBefore
│   │   │       ├───isToday
│   │   │       ├───isTomorrow
│   │   │       ├───isYesterday
│   │   │       ├───localeData
│   │   │       ├───localizedFormat
│   │   │       ├───minMax
│   │   │       ├───objectSupport
│   │   │       ├───pluralGetSet
│   │   │       ├───preParsePostFormat
│   │   │       ├───quarterOfYear
│   │   │       ├───relativeTime
│   │   │       ├───timezone
│   │   │       ├───toArray
│   │   │       ├───toObject
│   │   │       ├───updateLocale
│   │   │       ├───utc
│   │   │       ├───weekday
│   │   │       ├───weekOfYear
│   │   │       └───weekYear
│   │   ├───locale
│   │   └───plugin
│   ├───debug
│   │   └───src
│   ├───decamelize
│   ├───decimal.js
│   ├───decode-uri-component
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───deepmerge
│   │   └───dist
│   ├───defaults
│   ├───define-properties
│   │   └───test
│   ├───define-property
│   │   └───node_modules
│   │       ├───is-accessor-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-data-descriptor
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       ├───is-descriptor
│   │       └───kind-of
│   ├───delayed-stream
│   │   └───lib
│   ├───denodeify
│   │   └───test
│   ├───depd
│   │   └───lib
│   │       ├───browser
│   │       └───compat
│   ├───destroy
│   ├───detect-newline
│   ├───diff-sequences
│   │   ├───build
│   │   └───perf
│   ├───doctrine
│   │   └───lib
│   ├───domexception
│   │   ├───lib
│   │   └───node_modules
│   │       └───webidl-conversions
│   │           └───lib
│   ├───ee-first
│   ├───electron-to-chromium
│   ├───emittery
│   ├───emoji-regex
│   │   └───es2015
│   ├───encodeurl
│   ├───end-of-stream
│   ├───enquirer
│   │   └───lib
│   │       ├───prompts
│   │       └───types
│   ├───envinfo
│   │   └───dist
│   ├───error-ex
│   │   └───node_modules
│   │       └───is-arrayish
│   ├───error-stack-parser
│   │   └───dist
│   ├───errorhandler
│   │   └───public
│   ├───es-abstract
│   │   ├───2015
│   │   ├───2016
│   │   ├───2017
│   │   ├───2018
│   │   ├───2019
│   │   ├───2020
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───2021
│   │   │   ├───BigInt
│   │   │   └───Number
│   │   ├───5
│   │   ├───helpers
│   │   └───operations
│   ├───es-to-primitive
│   │   ├───.github
│   │   ├───helpers
│   │   └───test
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-html
│   ├───escape-string-regexp
│   ├───escodegen
│   │   ├───bin
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───levn
│   │       │   └───lib
│   │       └───optionator
│   │           └───lib
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───eslint
│   │   │   ├───init
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       ├───patterns
│   │   │   │       └───unicode
│   │   │   ├───shared
│   │   │   └───source-code
│   │   │       └───token-store
│   │   ├───messages
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───eslint-visitor-keys
│   │       │   └───lib
│   │       ├───globals
│   │       └───semver
│   │           ├───bin
│   │           ├───classes
│   │           ├───functions
│   │           ├───internal
│   │           └───ranges
│   ├───eslint-config-prettier
│   │   ├───bin
│   │   └───node_modules
│   │       └───.bin
│   ├───eslint-plugin-eslint-comments
│   │   ├───lib
│   │   │   ├───configs
│   │   │   ├───internal
│   │   │   ├───rules
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───.bin
│   │       └───ignore
│   ├───eslint-plugin-flowtype
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───configs
│   │   │   ├───rules
│   │   │   │   ├───arrayStyle
│   │   │   │   └───typeColonSpacing
│   │   │   └───utilities
│   │   └───node_modules
│   │       └───.bin
│   ├───eslint-plugin-jest
│   │   ├───docs
│   │   │   └───rules
│   │   ├───node_modules
│   │   │   └───.bin
│   │   ├───processors
│   │   │   └───__tests__
│   │   └───rules
│   │       └───__tests__
│   │           └───__snapshots__
│   ├───eslint-plugin-prettier
│   │   └───node_modules
│   │       └───.bin
│   ├───eslint-plugin-react
│   │   ├───lib
│   │   │   ├───rules
│   │   │   └───util
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───doctrine
│   │       │   └───lib
│   │       └───resolve
│   │           ├───.github
│   │           ├───example
│   │           ├───lib
│   │           └───test
│   │               ├───dotdot
│   │               │   └───abc
│   │               ├───module_dir
│   │               │   ├───xmodules
│   │               │   │   └───aaa
│   │               │   ├───ymodules
│   │               │   │   └───aaa
│   │               │   └───zmodules
│   │               │       └───bbb
│   │               ├───node_path
│   │               │   ├───x
│   │               │   │   ├───aaa
│   │               │   │   └───ccc
│   │               │   └───y
│   │               │       ├───bbb
│   │               │       └───ccc
│   │               ├───pathfilter
│   │               │   └───deep_ref
│   │               ├───precedence
│   │               │   ├───aaa
│   │               │   └───bbb
│   │               ├───resolver
│   │               │   ├───baz
│   │               │   ├───browser_field
│   │               │   ├───dot_main
│   │               │   ├───dot_slash_main
│   │               │   ├───empty_main
│   │               │   ├───incorrect_main
│   │               │   ├───invalid_main
│   │               │   ├───missing_index
│   │               │   ├───missing_main
│   │               │   ├───multirepo
│   │               │   │   └───packages
│   │               │   │       ├───package-a
│   │               │   │       └───package-b
│   │               │   ├───nested_symlinks
│   │               │   │   └───mylib
│   │               │   ├───null_main
│   │               │   ├───other_path
│   │               │   │   └───lib
│   │               │   ├───quux
│   │               │   │   └───foo
│   │               │   ├───same_names
│   │               │   │   └───foo
│   │               │   ├───symlinked
│   │               │   │   ├───package
│   │               │   │   └───_
│   │               │   │       ├───node_modules
│   │               │   │       └───symlink_target
│   │               │   └───without_basedir
│   │               └───shadowed_core
│   │                   └───node_modules
│   │                       └───util
│   ├───eslint-plugin-react-hooks
│   │   ├───cjs
│   │   └───node_modules
│   │       └───.bin
│   ├───eslint-plugin-react-native
│   │   ├───lib
│   │   │   ├───rules
│   │   │   └───util
│   │   └───node_modules
│   │       └───.bin
│   ├───eslint-plugin-react-native-globals
│   ├───eslint-scope
│   │   ├───lib
│   │   └───node_modules
│   │       └───estraverse
│   ├───eslint-utils
│   ├───eslint-visitor-keys
│   │   └───lib
│   ├───espree
│   │   ├───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───esprima
│   │   ├───bin
│   │   └───dist
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───esutils
│   │   └───lib
│   ├───etag
│   ├───event-target-shim
│   │   └───dist
│   ├───exec-sh
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   ├───execa
│   │   ├───lib
│   │   └───node_modules
│   │       ├───cross-spawn
│   │       │   ├───lib
│   │       │   │   └───util
│   │       │   └───node_modules
│   │       │       └───.bin
│   │       ├───semver
│   │       │   └───bin
│   │       ├───shebang-command
│   │       ├───shebang-regex
│   │       └───which
│   │           └───bin
│   ├───exit
│   │   ├───lib
│   │   └───test
│   │       └───fixtures
│   ├───expand-brackets
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───expect
│   │   └───build
│   ├───extend-shallow
│   ├───extglob
│   │   ├───lib
│   │   └───node_modules
│   │       └───define-property
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-diff
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fb-watchman
│   ├───file-entry-cache
│   ├───fill-range
│   ├───filter-obj
│   ├───finalhandler
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───find-cache-dir
│   │   └───node_modules
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-locate
│   │       ├───path-exists
│   │       └───pkg-dir
│   ├───find-up
│   ├───flat-cache
│   │   └───node_modules
│   │       └───.bin
│   ├───flatted
│   │   ├───.github
│   │   ├───cjs
│   │   └───esm
│   ├───flow-parser
│   ├───for-in
│   ├───form-data
│   │   └───lib
│   ├───fragment-cache
│   ├───fresh
│   ├───fs-extra
│   │   └───lib
│   │       ├───copy
│   │       ├───copy-sync
│   │       ├───empty
│   │       ├───ensure
│   │       ├───fs
│   │       ├───json
│   │       ├───mkdirs
│   │       ├───move
│   │       ├───move-sync
│   │       ├───output
│   │       ├───path-exists
│   │       ├───remove
│   │       └───util
│   ├───fs.realpath
│   ├───function-bind
│   │   └───test
│   ├───functional-red-black-tree
│   │   ├───bench
│   │   └───test
│   ├───gensync
│   │   └───test
│   ├───get-caller-file
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-package-type
│   ├───get-stdin
│   ├───get-stream
│   ├───get-symbol-description
│   │   ├───.github
│   │   └───test
│   ├───get-value
│   ├───glob
│   ├───glob-parent
│   ├───globals
│   ├───graceful-fs
│   ├───growly
│   │   ├───example
│   │   └───lib
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-bigints
│   │   ├───.github
│   │   └───test
│   ├───has-flag
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-tostringtag
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-value
│   ├───has-values
│   │   └───node_modules
│   │       └───kind-of
│   ├───hermes-engine
│   │   ├───android
│   │   │   └───include
│   │   │       ├───hermes
│   │   │       │   ├───Public
│   │   │       │   └───synthtest
│   │   │       │       └───tests
│   │   │       └───jsi
│   │   │           └───test
│   │   ├───linux64-bin
│   │   ├───osx-bin
│   │   └───win64-bin
│   ├───hermes-parser
│   │   └───dist
│   ├───hermes-profile-transformer
│   │   ├───dist
│   │   │   ├───profiler
│   │   │   ├───types
│   │   │   └───utils
│   │   ├───node_modules
│   │   │   └───source-map
│   │   │       ├───dist
│   │   │       └───lib
│   │   └───src
│   │       ├───profiler
│   │       ├───types
│   │       ├───utils
│   │       └───__test__
│   ├───hoist-non-react-statics
│   │   ├───dist
│   │   └───src
│   ├───hosted-git-info
│   ├───html-encoding-sniffer
│   │   └───lib
│   ├───html-escaper
│   │   ├───cjs
│   │   ├───esm
│   │   └───test
│   ├───http-errors
│   ├───http-proxy-agent
│   │   └───dist
│   ├───https-proxy-agent
│   │   └───dist
│   ├───human-signals
│   │   └───build
│   │       └───src
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───ignore
│   ├───image-size
│   │   ├───bin
│   │   └───lib
│   │       └───types
│   ├───import-fresh
│   │   └───node_modules
│   │       └───resolve-from
│   ├───import-local
│   │   └───fixtures
│   ├───imurmurhash
│   ├───inflight
│   ├───inherits
│   ├───internal-slot
│   │   ├───.github
│   │   └───test
│   ├───invariant
│   │   └───node_modules
│   │       └───.bin
│   ├───ip
│   │   ├───lib
│   │   └───test
│   ├───is-accessor-descriptor
│   ├───is-arrayish
│   ├───is-bigint
│   │   ├───.github
│   │   └───test
│   ├───is-boolean-object
│   │   ├───.github
│   │   └───test
│   ├───is-buffer
│   │   └───test
│   ├───is-callable
│   │   ├───.github
│   │   └───test
│   ├───is-ci
│   ├───is-core-module
│   │   └───test
│   ├───is-data-descriptor
│   ├───is-date-object
│   │   ├───.github
│   │   └───test
│   ├───is-descriptor
│   ├───is-directory
│   ├───is-docker
│   ├───is-extendable
│   ├───is-extglob
│   ├───is-fullwidth-code-point
│   ├───is-generator-fn
│   ├───is-glob
│   ├───is-negative-zero
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───is-number
│   │   └───node_modules
│   │       └───kind-of
│   ├───is-number-object
│   │   ├───.github
│   │   └───test
│   ├───is-plain-object
│   ├───is-potential-custom-element-name
│   ├───is-regex
│   │   └───test
│   ├───is-shared-array-buffer
│   │   ├───.github
│   │   └───test
│   ├───is-stream
│   ├───is-string
│   │   ├───.github
│   │   └───test
│   ├───is-symbol
│   │   ├───.github
│   │   └───test
│   ├───is-typedarray
│   ├───is-weakref
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───is-windows
│   ├───is-wsl
│   ├───isarray
│   ├───isexe
│   │   └───test
│   ├───isobject
│   ├───istanbul-lib-coverage
│   │   └───lib
│   ├───istanbul-lib-instrument
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───src
│   ├───istanbul-lib-report
│   │   ├───lib
│   │   └───node_modules
│   │       └───make-dir
│   │           └───node_modules
│   │               └───.bin
│   ├───istanbul-lib-source-maps
│   │   └───lib
│   ├───istanbul-reports
│   │   └───lib
│   │       ├───clover
│   │       ├───cobertura
│   │       ├───html
│   │       │   └───assets
│   │       │       └───vendor
│   │       ├───html-spa
│   │       │   ├───assets
│   │       │   └───src
│   │       ├───json
│   │       ├───json-summary
│   │       ├───lcov
│   │       ├───lcovonly
│   │       ├───none
│   │       ├───teamcity
│   │       ├───text
│   │       ├───text-lcov
│   │       └───text-summary
│   ├───jest
│   │   ├───bin
│   │   ├───build
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-changed-files
│   │   ├───build
│   │   └───node_modules
│   │       ├───execa
│   │       │   └───lib
│   │       ├───get-stream
│   │       ├───is-stream
│   │       ├───npm-run-path
│   │       └───path-key
│   ├───jest-cli
│   │   ├───bin
│   │   ├───build
│   │   │   ├───cli
│   │   │   └───init
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-config
│   │   ├───build
│   │   │   └───vendor
│   │   └───node_modules
│   │       └───deepmerge
│   │           └───dist
│   ├───jest-diff
│   │   └───build
│   ├───jest-docblock
│   │   └───build
│   ├───jest-each
│   │   └───build
│   │       └───table
│   ├───jest-environment-jsdom
│   │   └───build
│   ├───jest-environment-node
│   │   └───build
│   ├───jest-get-type
│   │   └───build
│   ├───jest-haste-map
│   │   ├───build
│   │   │   ├───crawlers
│   │   │   └───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-jasmine2
│   │   ├───build
│   │   │   └───jasmine
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-leak-detector
│   │   └───build
│   ├───jest-matcher-utils
│   │   └───build
│   ├───jest-message-util
│   │   └───build
│   ├───jest-mock
│   │   └───build
│   ├───jest-pnp-resolver
│   ├───jest-regex-util
│   │   └───build
│   ├───jest-resolve
│   │   └───build
│   ├───jest-resolve-dependencies
│   │   └───build
│   ├───jest-runner
│   │   ├───build
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-runtime
│   │   ├───bin
│   │   └───build
│   │       └───cli
│   ├───jest-serializer
│   │   └───build
│   ├───jest-snapshot
│   │   ├───build
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           ├───bin
│   │           ├───classes
│   │           ├───functions
│   │           ├───internal
│   │           └───ranges
│   ├───jest-util
│   │   ├───build
│   │   └───node_modules
│   │       └───.bin
│   ├───jest-validate
│   │   ├───build
│   │   └───node_modules
│   │       └───camelcase
│   ├───jest-watcher
│   │   └───build
│   │       └───lib
│   ├───jest-worker
│   │   └───build
│   │       ├───base
│   │       └───workers
│   ├───jetifier
│   │   ├───bin
│   │   ├───lib
│   │   ├───mapping
│   │   └───src
│   ├───joi
│   │   ├───dist
│   │   └───lib
│   │       └───types
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   ├───lib
│   │   │   └───js-yaml
│   │   │       ├───schema
│   │   │       └───type
│   │   │           └───js
│   │   └───node_modules
│   │       └───.bin
│   ├───jsc-android
│   │   └───dist
│   │       ├───include
│   │       └───org
│   │           └───webkit
│   │               ├───android-jsc
│   │               │   └───r250230
│   │               ├───android-jsc-cppruntime
│   │               │   └───r250230
│   │               └───android-jsc-intl
│   │                   └───r250230
│   ├───jscodeshift
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───collections
│   │   │   └───utils
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───braces
│   │   │   │   ├───lib
│   │   │   │   └───node_modules
│   │   │   │       ├───extend-shallow
│   │   │   │       └───is-extendable
│   │   │   ├───define-property
│   │   │   ├───extend-shallow
│   │   │   ├───fill-range
│   │   │   │   └───node_modules
│   │   │   │       ├───extend-shallow
│   │   │   │       └───is-extendable
│   │   │   ├───flow-parser
│   │   │   ├───is-extendable
│   │   │   ├───micromatch
│   │   │   │   └───lib
│   │   │   ├───to-regex-range
│   │   │   └───write-file-atomic
│   │   ├───parser
│   │   ├───src
│   │   │   ├───collections
│   │   │   └───utils
│   │   └───utils
│   ├───jsdom
│   │   ├───lib
│   │   │   └───jsdom
│   │   │       ├───browser
│   │   │       │   ├───parser
│   │   │       │   └───resources
│   │   │       ├───level2
│   │   │       ├───level3
│   │   │       └───living
│   │   │           ├───aborting
│   │   │           ├───attributes
│   │   │           ├───constraint-validation
│   │   │           ├───cssom
│   │   │           ├───custom-elements
│   │   │           ├───domparsing
│   │   │           ├───events
│   │   │           ├───fetch
│   │   │           ├───file-api
│   │   │           ├───generated
│   │   │           ├───helpers
│   │   │           │   └───svg
│   │   │           ├───hr-time
│   │   │           ├───mutation-observer
│   │   │           ├───navigator
│   │   │           ├───nodes
│   │   │           ├───range
│   │   │           ├───selection
│   │   │           ├───svg
│   │   │           ├───traversal
│   │   │           ├───websockets
│   │   │           ├───webstorage
│   │   │           ├───window
│   │   │           └───xhr
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───acorn
│   │       │   ├───bin
│   │       │   └───dist
│   │       └───ws
│   │           └───lib
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json-parse-better-errors
│   ├───json-parse-even-better-errors
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───jsonfile
│   ├───jsonify
│   │   ├───lib
│   │   └───test
│   ├───jsx-ast-utils
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───lib
│   │   │   └───values
│   │   │       └───expressions
│   │   ├───src
│   │   │   └───values
│   │   │       └───expressions
│   │   └───__tests__
│   │       └───src
│   ├───kind-of
│   ├───klaw
│   │   └───src
│   ├───kleur
│   ├───leven
│   ├───levn
│   │   ├───lib
│   │   └───node_modules
│   │       ├───prelude-ls
│   │       │   └───lib
│   │       └───type-check
│   │           └───lib
│   ├───lines-and-columns
│   │   └───dist
│   ├───locate-path
│   ├───lodash
│   │   └───fp
│   ├───lodash.debounce
│   ├───lodash.frompairs
│   ├───lodash.isequal
│   ├───lodash.isstring
│   ├───lodash.omit
│   ├───lodash.pick
│   ├───lodash.template
│   ├───lodash.templatesettings
│   ├───lodash.throttle
│   ├───lodash._reinterpolate
│   ├───log-symbols
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───types
│   │       ├───has-flag
│   │       └───supports-color
│   ├───logkitty
│   │   ├───bin
│   │   ├───build
│   │   │   ├───android
│   │   │   └───ios
│   │   └───docs
│   ├───loose-envify
│   ├───lru-cache
│   ├───make-dir
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───makeerror
│   │   └───lib
│   ├───map-cache
│   ├───map-visit
│   ├───merge-stream
│   ├───metro
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   ├───fs-extra
│   │   │   │   └───lib
│   │   │   │       ├───copy
│   │   │   │       ├───copy-sync
│   │   │   │       ├───empty
│   │   │   │       ├───ensure
│   │   │   │       ├───json
│   │   │   │       ├───mkdirs
│   │   │   │       ├───move
│   │   │   │       ├───output
│   │   │   │       ├───remove
│   │   │   │       ├───util
│   │   │   │       ├───walk
│   │   │   │       └───walk-sync
│   │   │   ├───jsonfile
│   │   │   ├───ms
│   │   │   ├───rimraf
│   │   │   ├───source-map
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   └───temp
│   │   │       ├───examples
│   │   │       ├───lib
│   │   │       ├───node_modules
│   │   │       │   ├───.bin
│   │   │       │   └───rimraf
│   │   │       │       └───test
│   │   │       └───test
│   │   └───src
│   │       ├───Bundler
│   │       ├───commands
│   │       ├───DeltaBundler
│   │       │   ├───Serializers
│   │       │   │   └───helpers
│   │       │   └───__fixtures__
│   │       ├───IncrementalBundler
│   │       ├───integration_tests
│   │       │   └───basic_bundle
│   │       │       └───import-export
│   │       ├───lib
│   │       ├───ModuleGraph
│   │       │   ├───node-haste
│   │       │   ├───output
│   │       │   └───worker
│   │       ├───node-haste
│   │       │   ├───DependencyGraph
│   │       │   │   └───assets
│   │       │   └───lib
│   │       ├───Server
│   │       └───shared
│   │           └───output
│   │               └───RamBundle
│   ├───metro-babel-register
│   │   └───src
│   ├───metro-babel-transformer
│   │   └───src
│   ├───metro-cache
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   └───rimraf
│   │   └───src
│   │       └───stores
│   ├───metro-cache-key
│   │   ├───src
│   │   └───src.real
│   │       └───__tests__
│   ├───metro-config
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───src
│   │       └───defaults
│   ├───metro-core
│   │   └───src
│   │       └───errors
│   ├───metro-hermes-compiler
│   │   └───src
│   ├───metro-inspector-proxy
│   │   ├───node_modules
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   └───ms
│   │   └───src
│   ├───metro-minify-uglify
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───src
│   ├───metro-react-native-babel-preset
│   │   └───src
│   │       └───configs
│   ├───metro-react-native-babel-transformer
│   │   └───src
│   ├───metro-resolver
│   │   └───src
│   ├───metro-runtime
│   │   └───src
│   │       ├───modules
│   │       │   └───vendor
│   │       └───polyfills
│   ├───metro-source-map
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   └───source-map
│   │   │       ├───dist
│   │   │       └───lib
│   │   └───src
│   │       └───Consumer
│   ├───metro-symbolicate
│   │   ├───node_modules
│   │   │   └───source-map
│   │   │       ├───dist
│   │   │       └───lib
│   │   ├───src
│   │   └───src.real
│   │       └───__tests__
│   │           ├───__fixtures__
│   │           │   └───directory
│   │           │       └───subdir1
│   │           └───__snapshots__
│   ├───metro-transform-plugins
│   │   └───src
│   │       └───utils
│   ├───metro-transform-worker
│   │   ├───node_modules
│   │   │   └───.bin
│   │   ├───src
│   │   │   ├───utils
│   │   │   └───__mocks__
│   │   └───src.real
│   │       ├───utils
│   │       ├───__mocks__
│   │       └───__tests__
│   │           └───__snapshots__
│   ├───micromatch
│   ├───mime
│   │   └───types
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-fn
│   ├───minimatch
│   ├───minimist
│   │   ├───example
│   │   └───test
│   ├───mixin-deep
│   │   └───node_modules
│   │       └───is-extendable
│   ├───mkdirp
│   │   └───bin
│   ├───ms
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───nanomatch
│   │   ├───lib
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───natural-compare
│   ├───negotiator
│   │   └───lib
│   ├───neo-async
│   ├───nice-try
│   │   └───src
│   ├───nocache
│   │   └───dist
│   ├───node-dir
│   │   └───lib
│   ├───node-fetch
│   │   ├───lib
│   │   └───node_modules
│   │       ├───tr46
│   │       │   └───lib
│   │       ├───webidl-conversions
│   │       │   └───lib
│   │       └───whatwg-url
│   │           └───lib
│   ├───node-int64
│   ├───node-modules-regexp
│   ├───node-notifier
│   │   ├───lib
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───is-wsl
│   │   │   │   └───node_modules
│   │   │   │       └───.bin
│   │   │   ├───semver
│   │   │   │   ├───bin
│   │   │   │   ├───classes
│   │   │   │   ├───functions
│   │   │   │   ├───internal
│   │   │   │   └───ranges
│   │   │   └───uuid
│   │   │       └───dist
│   │   │           ├───bin
│   │   │           ├───esm-browser
│   │   │           ├───esm-node
│   │   │           └───umd
│   │   ├───notifiers
│   │   └───vendor
│   │       ├───mac.noindex
│   │       │   └───terminal-notifier.app
│   │       │       └───Contents
│   │       │           ├───MacOS
│   │       │           └───Resources
│   │       │               └───en.lproj
│   │       ├───notifu
│   │       └───snoreToast
│   ├───node-releases
│   │   └───data
│   │       ├───processed
│   │       └───release-schedule
│   ├───node-stream-zip
│   ├───normalize-package-data
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───normalize-path
│   ├───npm-run-path
│   ├───nullthrows
│   ├───nwsapi
│   │   ├───dist
│   │   └───src
│   │       └───modules
│   ├───ob1
│   │   └───src
│   │       └───__flowtests__
│   ├───object-assign
│   ├───object-copy
│   │   └───node_modules
│   │       └───kind-of
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───object-keys
│   │   └───test
│   ├───object-visit
│   ├───object.assign
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───dist
│   │   └───test
│   ├───object.entries
│   │   └───test
│   ├───object.fromentries
│   │   └───test
│   ├───object.hasown
│   │   ├───.github
│   │   └───test
│   ├───object.pick
│   ├───object.values
│   │   └───test
│   ├───on-finished
│   ├───on-headers
│   ├───once
│   ├───onetime
│   ├───open
│   ├───optionator
│   │   ├───lib
│   │   └───node_modules
│   │       ├───prelude-ls
│   │       │   └───lib
│   │       └───type-check
│   │           └───lib
│   ├───options
│   │   └───lib
│   ├───ora
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───types
│   │       ├───has-flag
│   │       ├───strip-ansi
│   │       └───supports-color
│   ├───os-tmpdir
│   ├───p-each-series
│   ├───p-finally
│   ├───p-limit
│   ├───p-locate
│   ├───p-try
│   ├───parent-module
│   ├───parse-json
│   ├───parse5
│   │   └───lib
│   │       ├───common
│   │       ├───extensions
│   │       │   ├───error-reporting
│   │       │   ├───location-info
│   │       │   └───position-tracking
│   │       ├───parser
│   │       ├───serializer
│   │       ├───tokenizer
│   │       ├───tree-adapters
│   │       └───utils
│   ├───parseurl
│   ├───pascalcase
│   ├───path-exists
│   ├───path-is-absolute
│   ├───path-key
│   ├───path-parse
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───pify
│   ├───pirates
│   │   └───lib
│   ├───pkg-dir
│   ├───plist
│   │   ├───dist
│   │   ├───examples
│   │   │   └───browser
│   │   └───lib
│   │       └───xmldom
│   ├───posix-character-classes
│   ├───prelude-ls
│   │   └───lib
│   ├───prettier
│   │   └───esm
│   ├───prettier-linter-helpers
│   │   ├───.github
│   │   ├───.vscode
│   │   └───test
│   ├───pretty-format
│   │   ├───build
│   │   │   └───plugins
│   │   │       └───lib
│   │   └───node_modules
│   │       └───react-is
│   │           ├───cjs
│   │           └───umd
│   ├───process-nextick-args
│   ├───progress
│   │   └───lib
│   ├───promise
│   │   ├───.github
│   │   ├───domains
│   │   ├───lib
│   │   ├───setimmediate
│   │   └───src
│   ├───prompts
│   │   ├───dist
│   │   │   ├───dateparts
│   │   │   ├───elements
│   │   │   └───util
│   │   └───lib
│   │       ├───dateparts
│   │       ├───elements
│   │       └───util
│   ├───prop-types
│   │   ├───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───psl
│   │   ├───data
│   │   └───dist
│   ├───pump
│   ├───punycode
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───query-string
│   ├───range-parser
│   ├───react
│   │   ├───cjs
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───umd
│   ├───react-devtools-core
│   │   ├───dist
│   │   └───node_modules
│   │       └───ws
│   │           └───lib
│   ├───react-freeze
│   │   ├───dist
│   │   └───src
│   ├───react-is
│   │   ├───cjs
│   │   └───umd
│   ├───react-native
│   │   ├───android
│   │   │   └───com
│   │   │       └───facebook
│   │   │           └───react
│   │   │               └───react-native
│   │   │                   └───0.66.2
│   │   ├───flow
│   │   ├───flow-typed
│   │   │   └───npm
│   │   ├───jest
│   │   ├───Libraries
│   │   │   ├───ActionSheetIOS
│   │   │   ├───Alert
│   │   │   ├───Animated
│   │   │   │   ├───animations
│   │   │   │   ├───components
│   │   │   │   └───nodes
│   │   │   ├───AppState
│   │   │   ├───BatchedBridge
│   │   │   │   └───__mocks__
│   │   │   ├───Blob
│   │   │   │   └───__mocks__
│   │   │   ├───BugReporting
│   │   │   ├───Components
│   │   │   │   ├───AccessibilityInfo
│   │   │   │   ├───ActivityIndicator
│   │   │   │   ├───Clipboard
│   │   │   │   ├───DatePicker
│   │   │   │   ├───DatePickerAndroid
│   │   │   │   ├───DrawerAndroid
│   │   │   │   ├───Keyboard
│   │   │   │   ├───MaskedView
│   │   │   │   ├───Pressable
│   │   │   │   ├───ProgressBarAndroid
│   │   │   │   ├───ProgressViewIOS
│   │   │   │   ├───RefreshControl
│   │   │   │   │   └───__mocks__
│   │   │   │   ├───SafeAreaView
│   │   │   │   ├───ScrollView
│   │   │   │   ├───SegmentedControlIOS
│   │   │   │   ├───Slider
│   │   │   │   ├───Sound
│   │   │   │   ├───StatusBar
│   │   │   │   ├───Switch
│   │   │   │   ├───TextInput
│   │   │   │   ├───ToastAndroid
│   │   │   │   ├───Touchable
│   │   │   │   │   └───__mocks__
│   │   │   │   ├───UnimplementedViews
│   │   │   │   └───View
│   │   │   ├───Core
│   │   │   │   ├───Devtools
│   │   │   │   ├───SegmentFetcher
│   │   │   │   ├───Timers
│   │   │   │   └───__mocks__
│   │   │   ├───DeprecatedPropTypes
│   │   │   ├───EventEmitter
│   │   │   │   └───__mocks__
│   │   │   ├───FBLazyVector
│   │   │   │   └───FBLazyVector
│   │   │   ├───HeapCapture
│   │   │   ├───Image
│   │   │   ├───Inspector
│   │   │   ├───Interaction
│   │   │   ├───JSInspector
│   │   │   ├───LayoutAnimation
│   │   │   ├───Linking
│   │   │   ├───LinkingIOS
│   │   │   ├───Lists
│   │   │   │   └───__flowtests__
│   │   │   ├───LogBox
│   │   │   │   ├───Data
│   │   │   │   └───UI
│   │   │   │       └───LogBoxImages
│   │   │   ├───Modal
│   │   │   ├───NativeAnimation
│   │   │   │   ├───Drivers
│   │   │   │   └───Nodes
│   │   │   ├───NativeComponent
│   │   │   ├───NativeModules
│   │   │   │   └───specs
│   │   │   ├───Network
│   │   │   ├───NewAppScreen
│   │   │   │   └───components
│   │   │   ├───Performance
│   │   │   ├───PermissionsAndroid
│   │   │   ├───Pressability
│   │   │   ├───PushNotificationIOS
│   │   │   ├───RCTRequired
│   │   │   │   └───RCTRequired
│   │   │   ├───ReactNative
│   │   │   ├───ReactPrivate
│   │   │   ├───Reliability
│   │   │   ├───Renderer
│   │   │   │   ├───implementations
│   │   │   │   └───shims
│   │   │   ├───Settings
│   │   │   ├───Share
│   │   │   ├───Storage
│   │   │   ├───StyleSheet
│   │   │   │   └───__flowtests__
│   │   │   ├───SurfaceBackedComponent
│   │   │   ├───SurfaceHostingComponent
│   │   │   ├───Text
│   │   │   │   ├───BaseText
│   │   │   │   ├───RawText
│   │   │   │   ├───Text
│   │   │   │   ├───TextInput
│   │   │   │   │   ├───Multiline
│   │   │   │   │   └───Singleline
│   │   │   │   └───VirtualText
│   │   │   ├───TurboModule
│   │   │   │   └───samples
│   │   │   ├───Types
│   │   │   ├───TypeSafety
│   │   │   ├───Utilities
│   │   │   │   ├───differ
│   │   │   │   └───__mocks__
│   │   │   ├───vendor
│   │   │   │   ├───core
│   │   │   │   └───emitter
│   │   │   │       └───__flowtests__
│   │   │   ├───Vibration
│   │   │   ├───WebSocket
│   │   │   │   └───__mocks__
│   │   │   ├───Wrapper
│   │   │   │   └───Example
│   │   │   ├───YellowBox
│   │   │   └───__flowtests__
│   │   ├───local-cli
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   └───ws
│   │   │       └───lib
│   │   ├───React
│   │   │   ├───AccessibilityResources
│   │   │   │   └───en.lproj
│   │   │   ├───Base
│   │   │   │   └───Surface
│   │   │   │       └───SurfaceHostingView
│   │   │   ├───CoreModules
│   │   │   ├───CxxBridge
│   │   │   ├───CxxModule
│   │   │   ├───CxxUtils
│   │   │   ├───DevSupport
│   │   │   ├───Fabric
│   │   │   │   ├───Mounting
│   │   │   │   │   └───ComponentViews
│   │   │   │   │       ├───ActivityIndicator
│   │   │   │   │       ├───Image
│   │   │   │   │       ├───InputAccessory
│   │   │   │   │       ├───LegacyViewManagerInterop
│   │   │   │   │       ├───Modal
│   │   │   │   │       ├───Root
│   │   │   │   │       ├───SafeAreaView
│   │   │   │   │       ├───ScrollView
│   │   │   │   │       ├───Slider
│   │   │   │   │       ├───Switch
│   │   │   │   │       ├───Text
│   │   │   │   │       ├───TextInput
│   │   │   │   │       ├───UnimplementedComponent
│   │   │   │   │       ├───UnimplementedView
│   │   │   │   │       └───View
│   │   │   │   ├───Surface
│   │   │   │   └───Utils
│   │   │   ├───FBReactNativeSpec
│   │   │   │   └───FBReactNativeSpec
│   │   │   ├───Inspector
│   │   │   ├───Modules
│   │   │   ├───Profiler
│   │   │   ├───Tests
│   │   │   │   ├───Mounting
│   │   │   │   └───Text
│   │   │   ├───UIUtils
│   │   │   └───Views
│   │   │       ├───RefreshControl
│   │   │       ├───SafeAreaView
│   │   │       └───ScrollView
│   │   ├───ReactAndroid
│   │   │   ├───libs
│   │   │   └───src
│   │   │       ├───androidTest
│   │   │       │   ├───assets
│   │   │       │   ├───buck-runner
│   │   │       │   ├───java
│   │   │       │   │   └───com
│   │   │       │   │       └───facebook
│   │   │       │   │           └───react
│   │   │       │   │               ├───bridge
│   │   │       │   │               ├───testing
│   │   │       │   │               │   ├───idledetection
│   │   │       │   │               │   ├───network
│   │   │       │   │               │   └───rule
│   │   │       │   │               └───tests
│   │   │       │   │                   └───core
│   │   │       │   └───js
│   │   │       ├───main
│   │   │       │   ├───java
│   │   │       │   │   └───com
│   │   │       │   │       └───facebook
│   │   │       │   │           ├───debug
│   │   │       │   │           │   ├───debugoverlay
│   │   │       │   │           │   │   └───model
│   │   │       │   │           │   ├───holder
│   │   │       │   │           │   └───tags
│   │   │       │   │           ├───hermes
│   │   │       │   │           │   ├───instrumentation
│   │   │       │   │           │   ├───reactexecutor
│   │   │       │   │           │   └───unicode
│   │   │       │   │           ├───perftest
│   │   │       │   │           ├───proguard
│   │   │       │   │           │   └───annotations
│   │   │       │   │           ├───react
│   │   │       │   │           │   ├───animated
│   │   │       │   │           │   ├───bridge
│   │   │       │   │           │   │   └───queue
│   │   │       │   │           │   ├───common
│   │   │       │   │           │   │   ├───annotations
│   │   │       │   │           │   │   ├───build
│   │   │       │   │           │   │   ├───futures
│   │   │       │   │           │   │   ├───mapbuffer
│   │   │       │   │           │   │   │   └───jni
│   │   │       │   │           │   │   │       └───react
│   │   │       │   │           │   │   │           └───common
│   │   │       │   │           │   │   │               └───mapbuffer
│   │   │       │   │           │   │   └───network
│   │   │       │   │           │   ├───config
│   │   │       │   │           │   ├───devsupport
│   │   │       │   │           │   │   └───interfaces
│   │   │       │   │           │   ├───fabric
│   │   │       │   │           │   │   ├───events
│   │   │       │   │           │   │   ├───jni
│   │   │       │   │           │   │   └───mounting
│   │   │       │   │           │   │       └───mountitems
│   │   │       │   │           │   ├───jscexecutor
│   │   │       │   │           │   ├───jstasks
│   │   │       │   │           │   ├───module
│   │   │       │   │           │   │   ├───annotations
│   │   │       │   │           │   │   ├───model
│   │   │       │   │           │   │   └───processing
│   │   │       │   │           │   ├───modules
│   │   │       │   │           │   │   ├───accessibilityinfo
│   │   │       │   │           │   │   ├───appearance
│   │   │       │   │           │   │   ├───appregistry
│   │   │       │   │           │   │   ├───appstate
│   │   │       │   │           │   │   ├───blob
│   │   │       │   │           │   │   │   └───jni
│   │   │       │   │           │   │   ├───bundleloader
│   │   │       │   │           │   │   ├───camera
│   │   │       │   │           │   │   ├───clipboard
│   │   │       │   │           │   │   ├───common
│   │   │       │   │           │   │   ├───core
│   │   │       │   │           │   │   ├───datepicker
│   │   │       │   │           │   │   ├───debug
│   │   │       │   │           │   │   │   └───interfaces
│   │   │       │   │           │   │   ├───deviceinfo
│   │   │       │   │           │   │   ├───dialog
│   │   │       │   │           │   │   ├───fabric
│   │   │       │   │           │   │   ├───fresco
│   │   │       │   │           │   │   ├───i18nmanager
│   │   │       │   │           │   │   ├───image
│   │   │       │   │           │   │   ├───intent
│   │   │       │   │           │   │   ├───network
│   │   │       │   │           │   │   ├───permissions
│   │   │       │   │           │   │   ├───share
│   │   │       │   │           │   │   ├───sound
│   │   │       │   │           │   │   ├───statusbar
│   │   │       │   │           │   │   ├───storage
│   │   │       │   │           │   │   ├───systeminfo
│   │   │       │   │           │   │   ├───toast
│   │   │       │   │           │   │   ├───vibration
│   │   │       │   │           │   │   └───websocket
│   │   │       │   │           │   ├───packagerconnection
│   │   │       │   │           │   ├───processing
│   │   │       │   │           │   ├───reactperflogger
│   │   │       │   │           │   │   └───jni
│   │   │       │   │           │   │       └───reactperflogger
│   │   │       │   │           │   ├───runtimescheduler
│   │   │       │   │           │   │   └───jni
│   │   │       │   │           │   ├───shell
│   │   │       │   │           │   ├───surface
│   │   │       │   │           │   ├───touch
│   │   │       │   │           │   ├───turbomodule
│   │   │       │   │           │   │   └───core
│   │   │       │   │           │   │       ├───interfaces
│   │   │       │   │           │   │       └───jni
│   │   │       │   │           │   │           └───ReactCommon
│   │   │       │   │           │   ├───uimanager
│   │   │       │   │           │   │   ├───annotations
│   │   │       │   │           │   │   ├───common
│   │   │       │   │           │   │   ├───debug
│   │   │       │   │           │   │   ├───events
│   │   │       │   │           │   │   ├───interfaces
│   │   │       │   │           │   │   ├───jni
│   │   │       │   │           │   │   ├───layoutanimation
│   │   │       │   │           │   │   └───util
│   │   │       │   │           │   ├───util
│   │   │       │   │           │   ├───viewmanagers
│   │   │       │   │           │   └───views
│   │   │       │   │           │       ├───common
│   │   │       │   │           │       ├───drawer
│   │   │       │   │           │       │   └───events
│   │   │       │   │           │       ├───image
│   │   │       │   │           │       ├───imagehelper
│   │   │       │   │           │       ├───modal
│   │   │       │   │           │       ├───progressbar
│   │   │       │   │           │       ├───scroll
│   │   │       │   │           │       ├───slider
│   │   │       │   │           │       ├───swiperefresh
│   │   │       │   │           │       ├───switchview
│   │   │       │   │           │       ├───text
│   │   │       │   │           │       │   └───frescosupport
│   │   │       │   │           │       ├───textinput
│   │   │       │   │           │       ├───unimplementedview
│   │   │       │   │           │       └───view
│   │   │       │   │           ├───systrace
│   │   │       │   │           └───yoga
│   │   │       │   ├───jni
│   │   │       │   │   ├───first-party
│   │   │       │   │   │   ├───fb
│   │   │       │   │   │   │   └───include
│   │   │       │   │   │   │       └───fb
│   │   │       │   │   │   ├───fbgloginit
│   │   │       │   │   │   │   └───fb
│   │   │       │   │   │   ├───fbjni
│   │   │       │   │   │   ├───hermes
│   │   │       │   │   │   ├───jni-hack
│   │   │       │   │   │   │   └───real
│   │   │       │   │   │   └───yogajni
│   │   │       │   │   │       └───jni
│   │   │       │   │   ├───prebuilt
│   │   │       │   │   │   └───lib
│   │   │       │   │   ├───react
│   │   │       │   │   │   ├───jni
│   │   │       │   │   │   └───perftests
│   │   │       │   │   └───third-party
│   │   │       │   │       ├───boost
│   │   │       │   │       │   └───asm
│   │   │       │   │       │       ├───arm
│   │   │       │   │       │       ├───arm64
│   │   │       │   │       │       ├───x86
│   │   │       │   │       │       └───x86_64
│   │   │       │   │       ├───double-conversion
│   │   │       │   │       ├───fmt
│   │   │       │   │       ├───folly
│   │   │       │   │       ├───glibc
│   │   │       │   │       ├───glog
│   │   │       │   │       ├───jsc
│   │   │       │   │       └───libevent
│   │   │       │   ├───libraries
│   │   │       │   │   ├───fbcore
│   │   │       │   │   │   └───src
│   │   │       │   │   │       └───main
│   │   │       │   │   │           └───java
│   │   │       │   │   │               └───com
│   │   │       │   │   │                   └───facebook
│   │   │       │   │   │                       └───common
│   │   │       │   │   │                           └───logging
│   │   │       │   │   ├───fbjni
│   │   │       │   │   ├───fresco
│   │   │       │   │   │   └───fresco-react-native
│   │   │       │   │   └───soloader
│   │   │       │   │       └───java
│   │   │       │   │           └───com
│   │   │       │   │               └───facebook
│   │   │       │   │                   └───soloader
│   │   │       │   ├───res
│   │   │       │   │   ├───devsupport
│   │   │       │   │   │   ├───anim
│   │   │       │   │   │   ├───drawable
│   │   │       │   │   │   ├───layout
│   │   │       │   │   │   ├───values
│   │   │       │   │   │   ├───values-af
│   │   │       │   │   │   ├───values-ar
│   │   │       │   │   │   ├───values-as
│   │   │       │   │   │   ├───values-az
│   │   │       │   │   │   ├───values-bg
│   │   │       │   │   │   ├───values-bn
│   │   │       │   │   │   ├───values-bs
│   │   │       │   │   │   ├───values-ca
│   │   │       │   │   │   ├───values-cb
│   │   │       │   │   │   ├───values-cs
│   │   │       │   │   │   ├───values-da
│   │   │       │   │   │   ├───values-de
│   │   │       │   │   │   ├───values-el
│   │   │       │   │   │   ├───values-en-rGB
│   │   │       │   │   │   ├───values-es
│   │   │       │   │   │   ├───values-es-rES
│   │   │       │   │   │   ├───values-et
│   │   │       │   │   │   ├───values-fa
│   │   │       │   │   │   ├───values-fb
│   │   │       │   │   │   ├───values-fb-rLS
│   │   │       │   │   │   ├───values-fi
│   │   │       │   │   │   ├───values-fr
│   │   │       │   │   │   ├───values-fr-rCA
│   │   │       │   │   │   ├───values-gu
│   │   │       │   │   │   ├───values-hi
│   │   │       │   │   │   ├───values-hr
│   │   │       │   │   │   ├───values-hu
│   │   │       │   │   │   ├───values-in
│   │   │       │   │   │   ├───values-is
│   │   │       │   │   │   ├───values-it
│   │   │       │   │   │   ├───values-iw
│   │   │       │   │   │   ├───values-ja
│   │   │       │   │   │   ├───values-ka
│   │   │       │   │   │   ├───values-km
│   │   │       │   │   │   ├───values-kn
│   │   │       │   │   │   ├───values-ko
│   │   │       │   │   │   ├───values-lo
│   │   │       │   │   │   ├───values-lt
│   │   │       │   │   │   ├───values-lv
│   │   │       │   │   │   ├───values-mk
│   │   │       │   │   │   ├───values-ml
│   │   │       │   │   │   ├───values-mn
│   │   │       │   │   │   ├───values-mr
│   │   │       │   │   │   ├───values-ms
│   │   │       │   │   │   ├───values-my
│   │   │       │   │   │   ├───values-nb
│   │   │       │   │   │   ├───values-ne
│   │   │       │   │   │   ├───values-nl
│   │   │       │   │   │   ├───values-pa
│   │   │       │   │   │   ├───values-pl
│   │   │       │   │   │   ├───values-pt
│   │   │       │   │   │   ├───values-pt-rPT
│   │   │       │   │   │   ├───values-qz
│   │   │       │   │   │   ├───values-ro
│   │   │       │   │   │   ├───values-ru
│   │   │       │   │   │   ├───values-si
│   │   │       │   │   │   ├───values-sk
│   │   │       │   │   │   ├───values-sl
│   │   │       │   │   │   ├───values-sn
│   │   │       │   │   │   ├───values-sq
│   │   │       │   │   │   ├───values-sr
│   │   │       │   │   │   ├───values-sv
│   │   │       │   │   │   ├───values-sw
│   │   │       │   │   │   ├───values-ta
│   │   │       │   │   │   ├───values-te
│   │   │       │   │   │   ├───values-th
│   │   │       │   │   │   ├───values-tl
│   │   │       │   │   │   ├───values-tr
│   │   │       │   │   │   ├───values-uk
│   │   │       │   │   │   ├───values-ur
│   │   │       │   │   │   ├───values-vi
│   │   │       │   │   │   ├───values-wo
│   │   │       │   │   │   ├───values-zh-rCN
│   │   │       │   │   │   ├───values-zh-rHK
│   │   │       │   │   │   ├───values-zh-rTW
│   │   │       │   │   │   ├───values-zu
│   │   │       │   │   │   └───xml
│   │   │       │   │   ├───shell
│   │   │       │   │   │   └───values
│   │   │       │   │   ├───systeminfo
│   │   │       │   │   │   └───values
│   │   │       │   │   └───views
│   │   │       │   │       ├───modal
│   │   │       │   │       │   ├───anim
│   │   │       │   │       │   └───values
│   │   │       │   │       └───uimanager
│   │   │       │   │           └───values
│   │   │       │   └───third-party
│   │   │       │       ├───android
│   │   │       │       │   └───androidx
│   │   │       │       ├───java
│   │   │       │       │   ├───asm
│   │   │       │       │   ├───buck-android-support
│   │   │       │       │   ├───fest
│   │   │       │       │   ├───infer-annotations
│   │   │       │       │   ├───javapoet
│   │   │       │       │   ├───jsr-305
│   │   │       │       │   ├───jsr-330
│   │   │       │       │   ├───junit
│   │   │       │       │   ├───mockito
│   │   │       │       │   ├───mockito2
│   │   │       │       │   ├───okhttp
│   │   │       │       │   ├───okio
│   │   │       │       │   ├───robolectric
│   │   │       │       │   ├───sqlite
│   │   │       │       │   └───testing-support-lib
│   │   │       │       └───kotlin
│   │   │       └───test
│   │   │           ├───java
│   │   │           │   ├───com
│   │   │           │   │   └───facebook
│   │   │           │   │       ├───common
│   │   │           │   │       │   └───logging
│   │   │           │   │       └───react
│   │   │           │   │           ├───animated
│   │   │           │   │           ├───bridge
│   │   │           │   │           ├───devsupport
│   │   │           │   │           ├───modules
│   │   │           │   │           │   ├───blob
│   │   │           │   │           │   ├───camera
│   │   │           │   │           │   ├───clipboard
│   │   │           │   │           │   ├───deviceinfo
│   │   │           │   │           │   ├───dialog
│   │   │           │   │           │   ├───network
│   │   │           │   │           │   ├───share
│   │   │           │   │           │   ├───storage
│   │   │           │   │           │   └───timing
│   │   │           │   │           ├───packagerconnection
│   │   │           │   │           ├───uimanager
│   │   │           │   │           │   └───layoutanimation
│   │   │           │   │           ├───util
│   │   │           │   │           └───views
│   │   │           │   │               ├───image
│   │   │           │   │               ├───slider
│   │   │           │   │               ├───text
│   │   │           │   │               ├───textinput
│   │   │           │   │               └───view
│   │   │           │   └───org
│   │   │           │       └───mockito
│   │   │           │           └───configuration
│   │   │           └───resources
│   │   ├───ReactCommon
│   │   │   ├───better
│   │   │   ├───callinvoker
│   │   │   │   └───ReactCommon
│   │   │   ├───cxxreact
│   │   │   │   └───tests
│   │   │   ├───hermes
│   │   │   │   ├───executor
│   │   │   │   └───inspector
│   │   │   │       ├───chrome
│   │   │   │       │   ├───cli
│   │   │   │       │   └───tests
│   │   │   │       ├───detail
│   │   │   │       │   └───tests
│   │   │   │       ├───docs
│   │   │   │       ├───tests
│   │   │   │       └───tools
│   │   │   │           ├───msggen
│   │   │   │           │   ├───src
│   │   │   │           │   └───__tests__
│   │   │   │           └───sandcastle
│   │   │   ├───jsengineinstance
│   │   │   ├───jsi
│   │   │   │   └───jsi
│   │   │   │       └───test
│   │   │   ├───jsiexecutor
│   │   │   │   └───jsireact
│   │   │   ├───jsinspector
│   │   │   ├───libraries
│   │   │   │   └───fbcore
│   │   │   │       └───src
│   │   │   │           └───test
│   │   │   │               └───java
│   │   │   │                   └───com
│   │   │   │                       └───facebook
│   │   │   │                           └───powermock
│   │   │   ├───logger
│   │   │   ├───microprofiler
│   │   │   ├───react
│   │   │   │   ├───config
│   │   │   │   ├───debug
│   │   │   │   ├───nativemodule
│   │   │   │   │   ├───core
│   │   │   │   │   │   ├───platform
│   │   │   │   │   │   │   ├───android
│   │   │   │   │   │   │   │   └───ReactCommon
│   │   │   │   │   │   │   └───ios
│   │   │   │   │   │   └───ReactCommon
│   │   │   │   │   └───samples
│   │   │   │   │       ├───platform
│   │   │   │   │       │   ├───android
│   │   │   │   │       │   │   └───ReactCommon
│   │   │   │   │       │   └───ios
│   │   │   │   │       └───ReactCommon
│   │   │   │   ├───renderer
│   │   │   │   │   ├───animations
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───attributedstring
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───componentregistry
│   │   │   │   │   │   └───native
│   │   │   │   │   ├───components
│   │   │   │   │   │   ├───image
│   │   │   │   │   │   │   └───tests
│   │   │   │   │   │   ├───inputaccessory
│   │   │   │   │   │   ├───legacyviewmanagerinterop
│   │   │   │   │   │   ├───modal
│   │   │   │   │   │   ├───progressbar
│   │   │   │   │   │   │   └───android
│   │   │   │   │   │   │       └───react
│   │   │   │   │   │   │           └───renderer
│   │   │   │   │   │   │               └───components
│   │   │   │   │   │   │                   └───progressbar
│   │   │   │   │   │   ├───root
│   │   │   │   │   │   │   └───tests
│   │   │   │   │   │   ├───safeareaview
│   │   │   │   │   │   ├───scrollview
│   │   │   │   │   │   │   └───tests
│   │   │   │   │   │   ├───slider
│   │   │   │   │   │   │   ├───platform
│   │   │   │   │   │   │   │   ├───android
│   │   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │   │           └───components
│   │   │   │   │   │   │   │   │               └───slider
│   │   │   │   │   │   │   │   └───ios
│   │   │   │   │   │   │   └───tests
│   │   │   │   │   │   ├───switch
│   │   │   │   │   │   │   └───androidswitch
│   │   │   │   │   │   │       └───react
│   │   │   │   │   │   │           └───renderer
│   │   │   │   │   │   │               └───components
│   │   │   │   │   │   │                   └───androidswitch
│   │   │   │   │   │   ├───text
│   │   │   │   │   │   │   └───tests
│   │   │   │   │   │   ├───textinput
│   │   │   │   │   │   │   ├───androidtextinput
│   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │           └───components
│   │   │   │   │   │   │   │               └───androidtextinput
│   │   │   │   │   │   │   └───iostextinput
│   │   │   │   │   │   ├───unimplementedview
│   │   │   │   │   │   └───view
│   │   │   │   │   │       └───tests
│   │   │   │   │   ├───core
│   │   │   │   │   │   └───tests
│   │   │   │   │   │       └───benchmarks
│   │   │   │   │   ├───debug
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───element
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───graphics
│   │   │   │   │   │   ├───platform
│   │   │   │   │   │   │   ├───android
│   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │           └───graphics
│   │   │   │   │   │   │   ├───cxx
│   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │           └───graphics
│   │   │   │   │   │   │   └───ios
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───imagemanager
│   │   │   │   │   │   ├───platform
│   │   │   │   │   │   │   ├───cxx
│   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │           └───imagemanager
│   │   │   │   │   │   │   └───ios
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───leakchecker
│   │   │   │   │   ├───mapbuffer
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───mounting
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───runtimescheduler
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───scheduler
│   │   │   │   │   ├───telemetry
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───templateprocessor
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───textlayoutmanager
│   │   │   │   │   │   ├───platform
│   │   │   │   │   │   │   ├───android
│   │   │   │   │   │   │   │   └───react
│   │   │   │   │   │   │   │       └───renderer
│   │   │   │   │   │   │   │           └───textlayoutmanager
│   │   │   │   │   │   │   ├───cxx
│   │   │   │   │   │   │   └───ios
│   │   │   │   │   │   └───tests
│   │   │   │   │   ├───timeline
│   │   │   │   │   └───uimanager
│   │   │   │   │       └───tests
│   │   │   │   ├───test_utils
│   │   │   │   └───utils
│   │   │   ├───reactperflogger
│   │   │   │   └───reactperflogger
│   │   │   ├───runtimeexecutor
│   │   │   │   └───ReactCommon
│   │   │   └───yoga
│   │   │       └───yoga
│   │   │           ├───event
│   │   │           └───internal
│   │   ├───scripts
│   │   ├───template
│   │   │   ├───android
│   │   │   │   ├───app
│   │   │   │   │   └───src
│   │   │   │   │       ├───debug
│   │   │   │   │       │   └───java
│   │   │   │   │       │       └───com
│   │   │   │   │       │           └───helloworld
│   │   │   │   │       └───main
│   │   │   │   │           ├───java
│   │   │   │   │           │   └───com
│   │   │   │   │           │       └───helloworld
│   │   │   │   │           └───res
│   │   │   │   │               ├───mipmap-hdpi
│   │   │   │   │               ├───mipmap-mdpi
│   │   │   │   │               ├───mipmap-xhdpi
│   │   │   │   │               ├───mipmap-xxhdpi
│   │   │   │   │               ├───mipmap-xxxhdpi
│   │   │   │   │               └───values
│   │   │   │   └───gradle
│   │   │   │       └───wrapper
│   │   │   ├───ios
│   │   │   │   ├───HelloWorld
│   │   │   │   │   └───Images.xcassets
│   │   │   │   │       └───AppIcon.appiconset
│   │   │   │   ├───HelloWorld.xcodeproj
│   │   │   │   │   └───xcshareddata
│   │   │   │   │       └───xcschemes
│   │   │   │   └───HelloWorldTests
│   │   │   └───__tests__
│   │   └───third-party-podspecs
│   ├───react-native-codegen
│   │   ├───lib
│   │   │   ├───cli
│   │   │   │   ├───combine
│   │   │   │   ├───generators
│   │   │   │   └───parser
│   │   │   ├───generators
│   │   │   │   ├───components
│   │   │   │   │   ├───GeneratePropsJavaPojo
│   │   │   │   │   └───__test_fixtures__
│   │   │   │   └───modules
│   │   │   │       ├───GenerateModuleObjCpp
│   │   │   │       │   ├───header
│   │   │   │       │   └───source
│   │   │   │       └───__test_fixtures__
│   │   │   └───parsers
│   │   │       ├───flow
│   │   │       │   ├───components
│   │   │       │   │   └───__test_fixtures__
│   │   │       │   └───modules
│   │   │       │       └───__test_fixtures__
│   │   │       └───schema
│   │   └───node_modules
│   │       └───.bin
│   ├───react-native-google-places-autocomplete
│   │   ├───images
│   │   └───node_modules
│   │       └───.bin
│   ├───react-native-iphone-x-helper
│   │   └───node_modules
│   │       └───.bin
│   ├───react-native-paper
│   │   ├───lib
│   │   │   ├───commonjs
│   │   │   │   ├───assets
│   │   │   │   ├───babel
│   │   │   │   ├───components
│   │   │   │   │   ├───Appbar
│   │   │   │   │   ├───Avatar
│   │   │   │   │   ├───Card
│   │   │   │   │   ├───Checkbox
│   │   │   │   │   ├───DataTable
│   │   │   │   │   ├───Dialog
│   │   │   │   │   ├───Drawer
│   │   │   │   │   ├───FAB
│   │   │   │   │   │   └───AnimatedFAB
│   │   │   │   │   ├───List
│   │   │   │   │   ├───Menu
│   │   │   │   │   ├───Portal
│   │   │   │   │   ├───RadioButton
│   │   │   │   │   ├───TextInput
│   │   │   │   │   │   ├───Adornment
│   │   │   │   │   │   └───Label
│   │   │   │   │   ├───ToggleButton
│   │   │   │   │   ├───TouchableRipple
│   │   │   │   │   └───Typography
│   │   │   │   ├───core
│   │   │   │   ├───styles
│   │   │   │   └───utils
│   │   │   ├───module
│   │   │   │   ├───assets
│   │   │   │   ├───babel
│   │   │   │   ├───components
│   │   │   │   │   ├───Appbar
│   │   │   │   │   ├───Avatar
│   │   │   │   │   ├───Card
│   │   │   │   │   ├───Checkbox
│   │   │   │   │   ├───DataTable
│   │   │   │   │   ├───Dialog
│   │   │   │   │   ├───Drawer
│   │   │   │   │   ├───FAB
│   │   │   │   │   │   └───AnimatedFAB
│   │   │   │   │   ├───List
│   │   │   │   │   ├───Menu
│   │   │   │   │   ├───Portal
│   │   │   │   │   ├───RadioButton
│   │   │   │   │   ├───TextInput
│   │   │   │   │   │   ├───Adornment
│   │   │   │   │   │   └───Label
│   │   │   │   │   ├───ToggleButton
│   │   │   │   │   ├───TouchableRipple
│   │   │   │   │   └───Typography
│   │   │   │   ├───core
│   │   │   │   ├───styles
│   │   │   │   └───utils
│   │   │   └───typescript
│   │   │       ├───components
│   │   │       │   ├───Appbar
│   │   │       │   ├───Avatar
│   │   │       │   ├───Card
│   │   │       │   ├───Checkbox
│   │   │       │   ├───DataTable
│   │   │       │   ├───Dialog
│   │   │       │   ├───Drawer
│   │   │       │   ├───FAB
│   │   │       │   │   └───AnimatedFAB
│   │   │       │   ├───List
│   │   │       │   ├───Menu
│   │   │       │   ├───Portal
│   │   │       │   ├───RadioButton
│   │   │       │   ├───TextInput
│   │   │       │   │   ├───Adornment
│   │   │       │   │   └───Label
│   │   │       │   ├───ToggleButton
│   │   │       │   ├───TouchableRipple
│   │   │       │   └───Typography
│   │   │       ├───core
│   │   │       ├───styles
│   │   │       └───utils
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───src
│   │       ├───assets
│   │       ├───babel
│   │       │   └───__fixtures__
│   │       │       └───rewrite-imports
│   │       ├───components
│   │       │   ├───Appbar
│   │       │   ├───Avatar
│   │       │   ├───Card
│   │       │   ├───Checkbox
│   │       │   ├───DataTable
│   │       │   ├───Dialog
│   │       │   ├───Drawer
│   │       │   ├───FAB
│   │       │   │   └───AnimatedFAB
│   │       │   ├───List
│   │       │   ├───Menu
│   │       │   ├───Portal
│   │       │   ├───RadioButton
│   │       │   ├───TextInput
│   │       │   │   ├───Adornment
│   │       │   │   └───Label
│   │       │   ├───ToggleButton
│   │       │   ├───TouchableRipple
│   │       │   └───Typography
│   │       ├───core
│   │       ├───styles
│   │       └───utils
│   ├───react-native-safe-area-context
│   │   ├───android
│   │   │   ├───build
│   │   │   │   ├───.transforms
│   │   │   │   │   └───766c3673aa2f562eb93b6d22d4394a9a
│   │   │   │   │       └───transformed
│   │   │   │   │           └───classes
│   │   │   │   ├───generated
│   │   │   │   │   ├───ap_generated_sources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───res
│   │   │   │   │   │   ├───pngs
│   │   │   │   │   │   │   └───debug
│   │   │   │   │   │   └───resValues
│   │   │   │   │   │       └───debug
│   │   │   │   │   └───source
│   │   │   │   │       └───buildConfig
│   │   │   │   │           └───debug
│   │   │   │   │               └───com
│   │   │   │   │                   └───th3rdwave
│   │   │   │   │                       └───safeareacontext
│   │   │   │   ├───intermediates
│   │   │   │   │   ├───aapt_friendly_merged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───aapt
│   │   │   │   │   ├───aar_metadata
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───annotation_processor_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compiled_local_resources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───compile_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_r_class_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───data_binding_layout_info_type_package
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───incremental
│   │   │   │   │   │   ├───mergeDebugJniLibFolders
│   │   │   │   │   │   ├───mergeDebugShaders
│   │   │   │   │   │   ├───packageDebugAssets
│   │   │   │   │   │   └───packageDebugResources
│   │   │   │   │   │       ├───merged.dir
│   │   │   │   │   │       └───stripped.dir
│   │   │   │   │   ├───javac
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───classes
│   │   │   │   │   │           └───com
│   │   │   │   │   │               └───th3rdwave
│   │   │   │   │   │                   └───safeareacontext
│   │   │   │   │   ├───library_assets
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───library_jni
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───jni
│   │   │   │   │   ├───local_only_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───manifest_merge_blame_file
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_jni_libs
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───merged_manifest
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_shaders
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───navigation_json
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───public_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───runtime_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   └───symbol_list_with_package_name
│   │   │   │   │       └───debug
│   │   │   │   ├───outputs
│   │   │   │   │   └───logs
│   │   │   │   └───tmp
│   │   │   │       └───compileDebugJavaWithJavac
│   │   │   └───src
│   │   │       └───main
│   │   │           └───java
│   │   │               └───com
│   │   │                   └───th3rdwave
│   │   │                       └───safeareacontext
│   │   ├───ios
│   │   │   ├───SafeAreaView
│   │   │   └───SafeAreaView.xcodeproj
│   │   ├───jest
│   │   ├───lib
│   │   │   ├───commonjs
│   │   │   ├───module
│   │   │   └───typescript
│   │   │       └───src
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───src
│   ├───react-native-screens
│   │   ├───android
│   │   │   ├───build
│   │   │   │   ├───.transforms
│   │   │   │   │   └───238c62709f8cd2013493182ba52670a0
│   │   │   │   │       └───transformed
│   │   │   │   │           └───classes
│   │   │   │   ├───generated
│   │   │   │   │   ├───ap_generated_sources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───res
│   │   │   │   │   │   ├───pngs
│   │   │   │   │   │   │   └───debug
│   │   │   │   │   │   └───resValues
│   │   │   │   │   │       └───debug
│   │   │   │   │   └───source
│   │   │   │   │       └───buildConfig
│   │   │   │   │           └───debug
│   │   │   │   │               └───com
│   │   │   │   │                   └───swmansion
│   │   │   │   │                       └───rnscreens
│   │   │   │   ├───intermediates
│   │   │   │   │   ├───aapt_friendly_merged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───aapt
│   │   │   │   │   ├───aar_metadata
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───annotation_processor_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compiled_local_resources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───compile_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_r_class_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───data_binding_layout_info_type_package
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───incremental
│   │   │   │   │   │   ├───mergeDebugJniLibFolders
│   │   │   │   │   │   ├───mergeDebugShaders
│   │   │   │   │   │   ├───packageDebugAssets
│   │   │   │   │   │   └───packageDebugResources
│   │   │   │   │   │       ├───merged.dir
│   │   │   │   │   │       └───stripped.dir
│   │   │   │   │   ├───javac
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───classes
│   │   │   │   │   │           └───com
│   │   │   │   │   │               └───swmansion
│   │   │   │   │   │                   └───rnscreens
│   │   │   │   │   ├───library_assets
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───library_java_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───library_jni
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───jni
│   │   │   │   │   ├───local_only_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───manifest_merge_blame_file
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_jni_libs
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───merged_manifest
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_shaders
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───navigation_json
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───anim
│   │   │   │   │   ├───public_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───runtime_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   └───symbol_list_with_package_name
│   │   │   │   │       └───debug
│   │   │   │   ├───kotlin
│   │   │   │   │   └───compileDebugKotlin
│   │   │   │   │       └───caches-jvm
│   │   │   │   │           ├───inputs
│   │   │   │   │           ├───jvm
│   │   │   │   │           │   └───kotlin
│   │   │   │   │           └───lookups
│   │   │   │   ├───outputs
│   │   │   │   │   └───logs
│   │   │   │   └───tmp
│   │   │   │       ├───compileDebugJavaWithJavac
│   │   │   │       └───kotlin-classes
│   │   │   │           └───debug
│   │   │   │               ├───com
│   │   │   │               │   └───swmansion
│   │   │   │               │       └───rnscreens
│   │   │   │               │           └───events
│   │   │   │               └───META-INF
│   │   │   └───src
│   │   │       └───main
│   │   │           ├───java
│   │   │           │   └───com
│   │   │           │       └───swmansion
│   │   │           │           └───rnscreens
│   │   │           │               └───events
│   │   │           └───res
│   │   │               └───anim
│   │   ├───createNativeStackNavigator
│   │   ├───ios
│   │   │   └───RNScreens.xcodeproj
│   │   ├───lib
│   │   │   ├───commonjs
│   │   │   │   ├───native-stack
│   │   │   │   │   ├───navigators
│   │   │   │   │   ├───utils
│   │   │   │   │   └───views
│   │   │   │   └───reanimated
│   │   │   ├───module
│   │   │   │   ├───native-stack
│   │   │   │   │   ├───navigators
│   │   │   │   │   ├───utils
│   │   │   │   │   └───views
│   │   │   │   └───reanimated
│   │   │   └───typescript
│   │   │       ├───native-stack
│   │   │       │   ├───navigators
│   │   │       │   ├───utils
│   │   │       │   └───views
│   │   │       └───reanimated
│   │   ├───native-stack
│   │   ├───node_modules
│   │   │   └───.bin
│   │   ├───src
│   │   │   ├───native-stack
│   │   │   │   ├───navigators
│   │   │   │   ├───utils
│   │   │   │   └───views
│   │   │   └───reanimated
│   │   └───windows
│   │       └───RNScreens
│   ├───react-native-vector-icons
│   │   ├───android
│   │   │   ├───build
│   │   │   │   ├───.transforms
│   │   │   │   │   └───81756805a49ff216c348b4fc209738ed
│   │   │   │   │       └───transformed
│   │   │   │   │           └───classes
│   │   │   │   ├───generated
│   │   │   │   │   ├───ap_generated_sources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───res
│   │   │   │   │   │   ├───pngs
│   │   │   │   │   │   │   └───debug
│   │   │   │   │   │   └───resValues
│   │   │   │   │   │       └───debug
│   │   │   │   │   └───source
│   │   │   │   │       └───buildConfig
│   │   │   │   │           └───debug
│   │   │   │   │               └───com
│   │   │   │   │                   └───oblador
│   │   │   │   │                       └───vectoricons
│   │   │   │   ├───intermediates
│   │   │   │   │   ├───aapt_friendly_merged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───aapt
│   │   │   │   │   ├───aar_metadata
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───annotation_processor_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compiled_local_resources
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───compile_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_r_class_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───compile_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───data_binding_layout_info_type_package
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───incremental
│   │   │   │   │   │   ├───mergeDebugJniLibFolders
│   │   │   │   │   │   ├───mergeDebugShaders
│   │   │   │   │   │   ├───packageDebugAssets
│   │   │   │   │   │   └───packageDebugResources
│   │   │   │   │   │       ├───merged.dir
│   │   │   │   │   │       └───stripped.dir
│   │   │   │   │   ├───javac
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───classes
│   │   │   │   │   │           └───com
│   │   │   │   │   │               └───oblador
│   │   │   │   │   │                   └───vectoricons
│   │   │   │   │   ├───library_assets
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───library_jni
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───jni
│   │   │   │   │   ├───local_only_symbol_list
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───manifest_merge_blame_file
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_jni_libs
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───merged_manifest
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───merged_shaders
│   │   │   │   │   │   └───debug
│   │   │   │   │   │       └───out
│   │   │   │   │   ├───navigation_json
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_manifests
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───packaged_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───public_res
│   │   │   │   │   │   └───debug
│   │   │   │   │   ├───runtime_library_classes_jar
│   │   │   │   │   │   └───debug
│   │   │   │   │   └───symbol_list_with_package_name
│   │   │   │   │       └───debug
│   │   │   │   ├───outputs
│   │   │   │   │   └───logs
│   │   │   │   └───tmp
│   │   │   │       └───compileDebugJavaWithJavac
│   │   │   └───src
│   │   │       └───main
│   │   │           └───java
│   │   │               └───com
│   │   │                   └───oblador
│   │   │                       └───vectoricons
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───glyphmaps
│   │   │   └───lib
│   │   ├───Fonts
│   │   ├───glyphmaps
│   │   ├───lib
│   │   ├───node_modules
│   │   │   ├───cliui
│   │   │   │   └───build
│   │   │   │       └───lib
│   │   │   ├───wrap-ansi
│   │   │   ├───y18n
│   │   │   │   └───build
│   │   │   │       └───lib
│   │   │   │           └───platform-shims
│   │   │   ├───yargs
│   │   │   │   ├───build
│   │   │   │   │   └───lib
│   │   │   │   │       ├───typings
│   │   │   │   │       └───utils
│   │   │   │   ├───helpers
│   │   │   │   ├───lib
│   │   │   │   │   └───platform-shims
│   │   │   │   └───locales
│   │   │   └───yargs-parser
│   │   │       └───build
│   │   │           └───lib
│   │   ├───RNVectorIcons.xcodeproj
│   │   │   └───project.xcworkspace
│   │   │       ├───xcshareddata
│   │   │       └───xcuserdata
│   │   │           └───joel.xcuserdatad
│   │   ├───RNVectorIconsManager
│   │   └───templates
│   ├───react-refresh
│   │   └───cjs
│   ├───react-shallow-renderer
│   │   ├───cjs
│   │   ├───esm
│   │   ├───node_modules
│   │   │   └───react-is
│   │   │       ├───cjs
│   │   │       └───umd
│   │   └───umd
│   ├───react-test-renderer
│   │   ├───cjs
│   │   ├───node_modules
│   │   │   └───react-is
│   │   │       ├───cjs
│   │   │       └───umd
│   │   └───umd
│   ├───read-pkg
│   │   └───node_modules
│   │       ├───parse-json
│   │       └───type-fest
│   │           └───source
│   ├───read-pkg-up
│   ├───readable-stream
│   │   ├───doc
│   │   │   └───wg-meetings
│   │   └───lib
│   │       └───internal
│   │           └───streams
│   ├───readline
│   │   └───test
│   │       └───fixtures
│   ├───recast
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───example
│   │   ├───lib
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───parsers
│   ├───regenerate
│   ├───regenerate-unicode-properties
│   │   ├───Binary_Property
│   │   ├───General_Category
│   │   ├───Script
│   │   └───Script_Extensions
│   ├───regenerator-runtime
│   ├───regenerator-transform
│   │   ├───lib
│   │   └───src
│   ├───regex-not
│   │   └───node_modules
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───regexp.prototype.flags
│   │   └───test
│   ├───regexpp
│   ├───regexpu-core
│   │   ├───data
│   │   └───node_modules
│   │       └───.bin
│   ├───regjsgen
│   ├───regjsparser
│   │   ├───bin
│   │   └───node_modules
│   │       ├───.bin
│   │       └───jsesc
│   │           ├───bin
│   │           └───man
│   ├───remove-trailing-separator
│   ├───repeat-element
│   ├───repeat-string
│   ├───require-directory
│   ├───require-main-filename
│   ├───resolve
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-cwd
│   ├───resolve-from
│   ├───resolve-url
│   │   └───test
│   ├───restore-cursor
│   │   └───node_modules
│   │       ├───mimic-fn
│   │       └───onetime
│   ├───ret
│   │   └───lib
│   ├───rimraf
│   ├───rsvp
│   │   ├───dist
│   │   │   └───es6
│   │   └───lib
│   │       └───rsvp
│   │           └───promise
│   ├───safe-buffer
│   ├───safe-regex
│   │   ├───example
│   │   └───test
│   ├───safer-buffer
│   ├───sane
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───anymatch
│   │   │   ├───braces
│   │   │   │   ├───lib
│   │   │   │   └───node_modules
│   │   │   │       ├───extend-shallow
│   │   │   │       └───is-extendable
│   │   │   ├───define-property
│   │   │   ├───extend-shallow
│   │   │   ├───fill-range
│   │   │   │   └───node_modules
│   │   │   │       ├───extend-shallow
│   │   │   │       └───is-extendable
│   │   │   ├───is-extendable
│   │   │   ├───micromatch
│   │   │   │   └───lib
│   │   │   ├───normalize-path
│   │   │   └───to-regex-range
│   │   └───src
│   │       └───utils
│   ├───sax
│   │   └───lib
│   ├───saxes
│   ├───scheduler
│   │   ├───cjs
│   │   ├───node_modules
│   │   │   └───.bin
│   │   └───umd
│   ├───semver
│   │   └───bin
│   ├───send
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───debug
│   │       │   ├───node_modules
│   │       │   │   └───ms
│   │       │   └───src
│   │       ├───mime
│   │       │   └───src
│   │       └───ms
│   ├───serialize-error
│   ├───serve-static
│   ├───set-blocking
│   ├───set-value
│   ├───setprototypeof
│   │   └───test
│   ├───shallow-clone
│   ├───shebang-command
│   ├───shebang-regex
│   ├───shell-quote
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───example
│   │   └───test
│   ├───shellwords
│   │   └───lib
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───signal-exit
│   ├───simple-plist
│   │   └───dist
│   ├───simple-swizzle
│   ├───sisteransi
│   │   └───src
│   ├───slash
│   ├───slice-ansi
│   │   └───node_modules
│   │       └───ansi-styles
│   ├───snapdragon
│   │   ├───lib
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       ├───ms
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───snapdragon-node
│   │   └───node_modules
│   │       └───define-property
│   ├───snapdragon-util
│   │   └───node_modules
│   │       └───kind-of
│   ├───source-map
│   │   ├───dist
│   │   └───lib
│   ├───source-map-resolve
│   │   ├───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───source-map-support
│   ├───source-map-url
│   ├───spdx-correct
│   ├───spdx-exceptions
│   ├───spdx-expression-parse
│   ├───spdx-license-ids
│   ├───split-on-first
│   ├───split-string
│   │   └───node_modules
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───sprintf-js
│   │   ├───demo
│   │   ├───dist
│   │   ├───src
│   │   └───test
│   ├───stack-utils
│   │   └───node_modules
│   │       └───escape-string-regexp
│   ├───stackframe
│   │   └───dist
│   ├───stacktrace-parser
│   │   ├───dist
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───static-extend
│   ├───statuses
│   ├───stream-buffers
│   │   ├───coverage
│   │   │   └───lcov-report
│   │   │       └───lib
│   │   └───lib
│   ├───strict-uri-encode
│   ├───string-length
│   ├───string-width
│   │   └───node_modules
│   │       └───is-fullwidth-code-point
│   ├───string.prototype.matchall
│   │   ├───.github
│   │   └───test
│   ├───string.prototype.trimend
│   │   └───test
│   ├───string.prototype.trimstart
│   │   └───test
│   ├───string_decoder
│   │   └───lib
│   ├───strip-ansi
│   ├───strip-bom
│   ├───strip-eof
│   ├───strip-final-newline
│   ├───strip-json-comments
│   ├───sudo-prompt
│   ├───supports-color
│   ├───supports-hyperlinks
│   ├───symbol-tree
│   │   └───lib
│   ├───table
│   │   ├───dist
│   │   │   └───schemas
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───emoji-regex
│   │       │   └───es2015
│   │       ├───string-width
│   │       └───strip-ansi
│   ├───temp
│   │   ├───lib
│   │   └───node_modules
│   │       └───.bin
│   ├───terminal-link
│   ├───test-exclude
│   ├───text-table
│   │   ├───example
│   │   └───test
│   ├───throat
│   ├───through2
│   ├───tmpl
│   │   └───lib
│   ├───to-fast-properties
│   ├───to-object-path
│   │   └───node_modules
│   │       └───kind-of
│   ├───to-regex
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       └───is-extendable
│   ├───to-regex-range
│   │   └───node_modules
│   │       └───is-number
│   ├───toidentifier
│   ├───tough-cookie
│   │   └───lib
│   ├───tr46
│   │   └───lib
│   ├───tslib
│   │   └───modules
│   ├───tsutils
│   │   ├───node_modules
│   │   │   └───tslib
│   │   │       ├───modules
│   │   │       └───test
│   │   │           └───validateModuleExportsMatchCommonJS
│   │   ├───typeguard
│   │   │   ├───2.8
│   │   │   ├───2.9
│   │   │   ├───3.0
│   │   │   ├───3.2
│   │   │   └───next
│   │   └───util
│   ├───type-check
│   │   └───lib
│   ├───type-detect
│   ├───type-fest
│   │   └───source
│   ├───typedarray-to-buffer
│   │   └───test
│   ├───uglify-es
│   │   ├───bin
│   │   ├───lib
│   │   ├───node_modules
│   │   │   └───commander
│   │   │       └───typings
│   │   └───tools
│   ├───ultron
│   ├───unbox-primitive
│   │   ├───.github
│   │   └───test
│   ├───unicode-canonical-property-names-ecmascript
│   ├───unicode-match-property-ecmascript
│   ├───unicode-match-property-value-ecmascript
│   │   └───data
│   ├───unicode-property-aliases-ecmascript
│   ├───union-value
│   ├───universalify
│   ├───unpipe
│   ├───unset-value
│   │   └───node_modules
│   │       ├───has-value
│   │       │   └───node_modules
│   │       │       └───isobject
│   │       └───has-values
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───urix
│   │   └───test
│   ├───use
│   ├───use-subscription
│   │   └───cjs
│   ├───util-deprecate
│   ├───utils-merge
│   ├───uuid
│   │   ├───bin
│   │   └───lib
│   ├───v8-compile-cache
│   ├───v8-to-istanbul
│   │   ├───lib
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───validate-npm-package-license
│   ├───vary
│   ├───vlq
│   │   └───dist
│   │       └───types
│   ├───w3c-hr-time
│   │   └───lib
│   ├───w3c-xmlserializer
│   │   └───lib
│   ├───walker
│   │   └───lib
│   ├───warn-once
│   ├───wcwidth
│   │   ├───docs
│   │   └───test
│   ├───webidl-conversions
│   │   └───lib
│   ├───whatwg-encoding
│   │   └───lib
│   ├───whatwg-fetch
│   │   └───dist
│   ├───whatwg-mimetype
│   │   └───lib
│   ├───whatwg-url
│   │   └───dist
│   ├───which
│   │   └───bin
│   ├───which-boxed-primitive
│   │   ├───.github
│   │   └───test
│   ├───which-module
│   ├───word-wrap
│   ├───wrap-ansi
│   ├───wrappy
│   ├───write
│   │   └───node_modules
│   │       └───.bin
│   ├───write-file-atomic
│   ├───ws
│   │   └───lib
│   ├───xcode
│   │   ├───lib
│   │   │   └───parser
│   │   └───node_modules
│   │       └───.bin
│   ├───xml-name-validator
│   │   └───lib
│   ├───xmlbuilder
│   │   └───lib
│   ├───xmlchars
│   │   ├───xml
│   │   │   ├───1.0
│   │   │   └───1.1
│   │   └───xmlns
│   │       └───1.0
│   ├───xmldoc
│   │   ├───examples
│   │   ├───lib
│   │   └───test
│   ├───xtend
│   ├───y18n
│   ├───yallist
│   ├───yargs
│   │   ├───build
│   │   │   └───lib
│   │   └───locales
│   └───yargs-parser
│       └───lib
├───screens
└───__tests__

        


## Pull Requests

I welcome and encourage all pull requests. It usually will take me within 24-48 hours to respond to any issue or request.


## Created & Maintained By

[Atikur Rahman](https://github.com/Atiksujon360)

> If you found this project helpful or you learned something from the source code and want to thank me, consider buying me a cup of :coffee:
>
> Contact me on my email: atiksujon7@gmail.com
