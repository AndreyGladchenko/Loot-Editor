/**
 * SCUM LOOT SPAWN EDITOR - FRONTEND LOGIC (ES14)
 */

// Comprehensive i18n Dictionary
const TRANSLATIONS = {
    ru: {
        // Navigation & tabs
        nav_cooldowns: 'Группы кулдаунов',
        nav_items: 'Параметры предметов',
        nav_nodes: 'Дерево Nodes',
        nav_spawners: 'Пресеты Spawners',
        nav_zonemodifiers: 'Модификатор зон',
        
        // Titles & Subtitles
        title_cooldowns: 'Редактор групп кулдаунов',
        subtitle_cooldowns: 'Управление конфигурационными файлами кулдаунов в директории WindowsServer\\Loot\\CooldownGroups\\Override',
        title_items: 'Параметры появления предметов',
        subtitle_items: 'Редактирование настроек спавна предметов в файле WindowsServer\\Loot\\Items\\Override\\Parameters.json',
        title_nodes: 'Дерево вероятностей (Nodes)',
        subtitle_nodes: 'Визуальный редактор иерархических структур спавна лута в директории WindowsServer\\Loot\\Nodes\\Override',
        title_spawners: 'Пресеты спавна (Spawners)',
        subtitle_spawners: 'Управление правилами спавна контейнеров и окружения в директории WindowsServer\\Loot\\Spawners\\Presets\\Override',
        title_zonemodifiers: 'Модификатор зон (Zone Modifiers)',
        subtitle_zonemodifiers: 'Интерактивное управление зонами спавна лута на карте',
        
        // Sidebar
        sidebar_loot_folder: 'Рабочая папка Loot:',
        default_path: 'По умолчанию',
        btn_specify_path: 'Указать путь',
        tooltip_refresh_files: 'Повторно прочитать и перезагрузить файлы',
        tooltip_toggle_sidebar: 'Скрыть/показать боковую панель',
        tooltip_help_info: 'Справка по разделу',
        local_server_connected: 'Локальный сервер подключен',
        local_server_disconnected: 'Локальный сервер отключен',
        
        // Global Actions
        dirty_badge_text: 'Есть несохраненные изменения',
        btn_save_all: 'Сохранить всё',
        
        // Cooldowns Tab
        active_override_file: 'Активный файл оверрайда:',
        btn_create_new_file: 'Создать новый файл',
        delete_all_default_cooldowns: 'Удалить все дефолтные группы кулдаунов (DeleteAllDefaultCooldownGroups)',
        delete_all_default_cooldowns_desc: 'Полностью игнорировать системные настройки кулдаунов игры',
        default_groups_to_delete: 'Дефолтные группы к удалению (DefaultCooldownGroupsToDelete)',
        default_groups_to_delete_desc: 'Список групп из папки Default, которые будут удалены из системы спавна',
        btn_add_to_list: 'Добавить в список',
        cooldown_groups_in_file: 'Список групп кулдаунов в этом файле',
        btn_add_new_group: 'Добавить новую группу',
        
        // Items Tab
        search_item_id: 'Поиск по ID предмета',
        placeholder_search_item: 'Введите ID предмета для поиска...',
        cooldown_group: 'Группа кулдауна',
        spawn_location: 'Локация спавна',
        parameter_status: 'Статус параметров',
        only_modified: 'Только измененные',
        only_disabled: 'Только отключенные',
        loaded_parameters: 'Загружено параметров:',
        overridden: 'Модифицировано:',
        file: 'Файл:',
        reset_filters: 'Сбросить фильтры',
        btn_override_new_item: 'Переопределить новый предмет',
        
        // Bulk operations
        bulk_edit: 'Групповые операции (Bulk Edit)',
        bulk_target: 'Область применения',
        bulk_target_filtered: 'Все отфильтрованные предметы',
        bulk_target_checked: 'Только выбранные галочками предметы',
        keep_no_change: '— Без изменений —',
        remove_group: 'Убрать группу (без группы)',
        spawn_disabled: 'Спавн выключен',
        disable_spawn: 'Запретить спавн (True)',
        enable_spawn: 'Разрешить спавн (False)',
        spawn_locations_label: 'Локации спавна',
        all_locations: 'Все локации (Cst + Cnt + Mnt)',
        only_coastal: 'Только Coastal',
        only_continental: 'Только Continental',
        only_mountain: 'Только Mountain',
        bulk_cooldown_min_max: 'Кулдаун Min / Max (ч)',
        bulk_durability_override: 'Оверрайд прочности',
        override_durability_true: 'Переопределить прочность (True)',
        override_durability_false: 'Использовать дефолт карты (False)',
        bulk_initial_usage_random: 'Нач. прочность / Случ. износ %',
        placeholder_initial: 'Начальная',
        placeholder_wear: 'Износ %',
        btn_clear_selection: 'Сбросить выделение',
        btn_clear_fields: 'Очистить поля',
        btn_apply_changes: 'Применить изменения',
        
        // Table items
        table_header_id: 'ID Предмета',
        table_header_status: 'Статус',
        table_header_spawn_disabled: 'Спавн выкл.',
        table_header_locations: 'Локации появления',
        table_header_cooldown_min: 'Кулдаун Min',
        table_header_cooldown_max: 'Кулдаун Max',
        table_header_cooldown_group: 'Группа кулдауна',
        table_header_variations: 'Вариации',
        table_header_durability: 'Своя прочность',
        table_header_initial: 'Нач. прочность',
        table_header_random: 'Случ. износ %',
        table_header_actions: 'Действия',
        no_items_found: 'Предметы не найдены',
        try_changing_filters: 'Попробуйте изменить параметры поиска или фильтрации',
        rows_per_page: 'Строк на странице:',
        
        // Nodes Tab
        active_nodes_file: 'Активный файл Nodes:',
        tooltip_show_override_files: 'Показать файлы из папки Override (редактируемые)',
        tooltip_show_default_files: 'Показать оригинальные системные файлы (только чтение)',
        btn_add_root_node: 'Добавить корневую ноду',
        editor_mode_label: 'Редактор',
        json_mode_label: 'JSON',
        tooltip_toggle_nodes_db: 'Скрыть/показать панель базы Nodes',
        btn_nodes_database_toggle: 'База нод',
        tree_is_empty: 'Дерево пусто',
        tree_is_empty_desc: 'Добавьте корневую ноду или создайте новый файл на основе шаблона',
        json_data_nodes_title: 'JSON данные дерева Nodes',
        invalid_json_label: 'Некорректный JSON!',
        default_nodes_db_title: 'База Nodes по умолчанию',
        tooltip_collapse_panel: 'Свернуть панель',
        btn_hide: 'Скрыть',
        placeholder_search_default_paths: 'Поиск дефолтных путей Nodes...',
        
        // Spawners Tab
        search_spawners_title: 'Поиск пресетов спавна',
        placeholder_search_spawner_files: 'Введите имя файла для поиска...',
        filters_and_view: 'Фильтры и отображение:',
        tooltip_reset_spawner_filters: 'Сбросить все фильтры и вернуться к списку без категорий',
        reset_all_spawner_filters: 'Сбросить всё',
        tooltip_show_flat_files: 'Показать все файлы общим плоским списком (без группировки по папкам)',
        spawner_view_flat_btn: 'Все файлы',
        tooltip_group_spawner_folders: 'Сгруппировать файлы по виртуальным папкам и категориям',
        spawner_view_categories_btn: 'По папкам',
        tooltip_show_default_spawners: 'Показывать только оригинальные системные файлы пресетов',
        tooltip_show_override_spawners: 'Показывать только модифицированные файлы с оверрайдами',
        select_spawner_preset: 'Выберите пресет спавна',
        select_spawner_preset_desc: 'Выберите интересующий вас spawner-файл в левой панели для детального редактирования или создания оверрайда',
        btn_delete_override: 'Удалить оверрайд',
        btn_create_override: 'Создать оверрайд',
        spawner_override_subfolder_label: 'Подкаталог оверрайда (в папке Presets/Override/):',
        spawner_override_subfolder_desc: 'Папка сохранения',
        json_view_mode_label: 'Просмотр JSON',
        json_data_spawner_title: 'JSON данные пресета',
        general_spawner_settings_title: 'Общие параметры спавна (General Settings)',
        add_field_to_config_label: 'Добавить поле в конфигурацию:',
        btn_add_field: '+ Добавить поле',
        
        // Zone Modifiers Tab
        zm_edit_mode_label: 'Режим редактирования зон:',
        zm_mode_general_btn: 'General Modifiers',
        zm_mode_spawners_btn: 'Spawners Zones',
        zm_modifiers_title: 'Модификаторы зон',
        btn_add: 'Добавить',
        zm_active_title: 'Параметры модификатора',
        btn_delete: 'Удалить',
        zm_mod_name_label: 'Название модификатора:',
        zm_desc_spawn_prob: 'Влияет на частоту появления предметов открытого мира, лежащих на поверхностях.',
        zm_desc_exam_prob: 'Влияет на частоту появления предметов, спрятанных внутри доступных для поиска контейнеров.',
        zm_desc_exam_qty: 'Определяет, сколько предметов появляется в контейнерах.',
        zm_desc_spawn_exp: 'Как долго предметы в контейнерах появляются с момента их исчезновения.',
        zm_desc_exam_exp: 'Как долго открытые предметы появляются в мире с момента их исчезновения.',
        zm_zones_list_label: 'Список зон:',
        zm_btn_draw_on_map: 'Нарисовать на карте',
        zm_btn_add_zone_manual: '+ Добавить зону вручную',
        zm_map_title: 'Интерактивная карта зон SCUM',
        zm_show_hide_zones: 'Отображать/скрыть',
        tooltip_zoom_out: 'Отдалить',
        tooltip_zoom_in: 'Приблизить',
        tooltip_reset_zoom: 'Сбросить зум',
        zm_view_map_btn: 'Карта',
        zm_drawing_instruction: 'Режим рисования зоны: зажмите ЛКМ и перетащите курсор на карте для выделения области.',
        btn_cancel: 'Отмена',
        zm_file_path_label: '📁 Путь к файлу:',
        btn_edit: 'Редактировать',
        btn_save_json: 'Сохранить JSON',
        zm_file_label: '📁 Файл:',
        zm_total_zones_label: 'Всего зон в конфиге:',
        
        // Modals & Popups
        modal_create_cooldown_file_title: 'Создать новый файл групп кулдаунов',
        file_name_label: 'Имя файла:',
        placeholder_filename_cooldown: 'например, Mod_Cooldowns_Food.json',
        modal_create_cooldown_file_desc: 'Файл будет автоматически создан в папке WindowsServer\\Loot\\CooldownGroups\\Override\\',
        btn_create: 'Создать',
        modal_override_item_title: 'Переопределить новый предмет',
        modal_override_item_desc: 'Выберите предмет из базы данных по умолчанию, чтобы начать редактировать его спавн-параметры.',
        select_item_label: 'Выберите предмет:',
        or_label: '— ИЛИ —',
        enter_item_id_manual: 'Введите вручную новый ID предмета:',
        placeholder_custom_item_id: 'например, My_Custom_Rifle_Id',
        modal_create_nodes_file_title: 'Создать новый файл Nodes',
        placeholder_filename_nodes: 'например, Mod_Nodes_Airfield.json',
        modal_create_nodes_file_desc: 'Файл будет автоматически создан в папке WindowsServer\\Loot\\Nodes\\Override\\',
        select_template_optional: 'Выберите шаблон (необязательно):',
        empty_nodes_template: '-- Пустой файл (ItemLootTreeNodes) --',
        template_desc: 'Позволяет скопировать структуру оригинального файла из папки Default для модификации.',
        modal_select_item_title: 'Выбрать предмет из базы данных',
        placeholder_enter_item_name_id: 'Введите название или ID предмета...',
        search_results_limit: 'Результаты поиска (показано до 100 совпадений):',
        btn_close: 'Закрыть',
        modal_create_spawner_override_title: 'Создать новый оверрайд пресета спавна',
        modal_create_spawner_override_desc: 'Копирует оригинальный файл из папки Default в выбранную папку Override для последующего редактирования.',
        default_template_file_label: 'Шаблон дефолтного файла:',
        save_to_override_folder_label: 'Сохранить в папку оверрайда (Presets/Override/):',
        placeholder_select_or_enter_folder: 'Выберите или введите новое имя папки...',
        modal_configure_loot_dir_title: 'Указать путь к файлам Loot',
        modal_configure_loot_dir_desc: 'Вы можете переопределить папку Loot (содержащую папки CooldownGroups, Items, Nodes, Spawners). Все подпапки являются необязательными. Редактор будет читать и писать Override конфигурации из указанной папки, а Default системные файлы по-прежнему будут считываться из папки по умолчанию.',
        absolute_path_loot_dir_label: 'Абсолютный путь к папке Loot:',
        placeholder_loot_dir: 'например, C:\\MyCustomServer\\Loot',
        blank_path_desc: 'Пустой путь сбрасывает настройки на папку по умолчанию.',
        btn_reset_default: 'Сбросить по умолчанию',
        btn_save: 'Сохранить',
        
        // Dinamic values
        badge_new: 'Новый',
        badge_custom: 'Кастом',
        badge_default: 'Дефолт',
        badge_override: 'Оверрайд',
        cooldown_sys: 'Системная',
        cooldown_custom: 'Кастомная',
        cooldown_min_label: 'Кулдаун Min',
        cooldown_max_label: 'Кулдаун Max',
        cooldown_lower_influence: 'Влияние нижних групп',
        btn_modify: 'Изменить',
        no_group: 'Без группы',
        no_limit: 'Без лимита',
        tooltip_reset_to_default: 'Сбросить к дефолтным параметрам',
        btn_reset: 'Сброс',
        tooltip_override_params: 'Переопределить параметры',
        btn_edit_short: 'Изм',
        no_presets_found: 'Пресеты не найдены',
        placeholder_node_name: 'Имя ноды или ID предмета...',
        tooltip_select_item_list: 'Выбрать предмет из списка',
        spawn_disabled_badge: 'СПАВН ВЫКЛ',
        tooltip_spawn_disabled: 'Этот предмет отключен для появления (IsDisabledForSpawning: true) в Parameters.json',
        tooltip_add_child: 'Добавить дочерний элемент',
        tooltip_copy_node: 'Копировать (дублировать) этот элемент/раздел',
        tooltip_delete_node: 'Удалить этот элемент и его подэлементы',
        tooltip_copy_path: 'Копировать полный путь ноды',
        default_path_label: 'По умолчанию',
        default_path_desc: 'По умолчанию (папка WindowsServer/Loot в корне)',
        list_is_empty: 'Список пуст',
        no_group_empty: 'Без группы (пусто)',
        btn_collapse: 'Свернуть',
        btn_expand: 'Развернуть',
        pagination_shown: 'Показано',
        pagination_of: 'из',
        pagination_items: 'предметов',
        nodes_tree_heading_editable: 'Иерархическая структура дерева Nodes',
        nodes_tree_heading_readonly: 'Иерархическая структура дерева Nodes (default) — только чтение',
        spawner_readonly_hint: 'Оригинальный системный файл (Read-Only до создания оверрайда)',
        all_fields_added: '-- Все поля добавлены --',
        spawner_section_fixed_items: '📦 Секция FixedItems (Гарантированные предметы)',
        spawner_section_items: '🏷️ Секция Items (Список случайных предметов)',
        spawner_section_nodes: '🌳 Секция Nodes (Связи с иерархией нод)',
        spawner_section_subpresets: '📑 Секция Subpresets (Дочерние пресеты спавна)',
        btn_add_node: 'Добавить ноду',
        btn_add_connection: 'Добавить связь',
        btn_delete_node: 'Удалить ноду',
        node_label: 'Нода',
        no_connections: 'Связей нет',
        node_badge: 'Нода',
        item_badge: 'Предмет',
        badge_active: 'Активен',
        confirm_delete_node: 'Вы уверены, что хотите удалить ноду "{nodeName}" и все её вложенные элементы?',
        confirm_delete_spawner_override: 'Вы действительно хотите удалить оверрайд пресета спавна "{relPath}"?',
        zones_count: 'зон',
        no_zones_message: 'Зоны отсутствуют. Нарисуйте зону на карте или добавьте вручную.',
        placeholder_zone_name: 'Имя зоны',
        tooltip_show_zone_on_map: 'Показать зону на карте',
        tooltip_hide_zone_from_map: 'Скрыть зону на карте',
        tooltip_delete_zone: 'Удалить зону',
        no_name: 'Без названия',
        modifier_label: 'Модификатор',
        confirm_unsaved_changes_nodes: 'В текущем файле дерева есть несохраненные изменения. Все изменения будут потеряны. Продолжить?',
        confirm_unsaved_changes_spawner: 'В текущих настройках спавна есть несохраненные изменения. Все изменения будут потеряны. Продолжить?'
    },
    en: {
        // Navigation & tabs
        nav_cooldowns: 'Cooldown Groups',
        nav_items: 'Items Parameters',
        nav_nodes: 'Nodes Tree',
        nav_spawners: 'Spawner Presets',
        nav_zonemodifiers: 'Zone Modifiers',
        
        // Titles & Subtitles
        title_cooldowns: 'Cooldown Groups Editor',
        subtitle_cooldowns: 'Manage cooldown configuration files in WindowsServer\\Loot\\CooldownGroups\\Override',
        title_items: 'Item Spawn Parameters',
        subtitle_items: 'Edit item spawn settings in WindowsServer\\Loot\\Items\\Override\\Parameters.json',
        title_nodes: 'Probability Tree (Nodes)',
        subtitle_nodes: 'Visual editor for hierarchical loot spawn structures in WindowsServer\\Loot\\Nodes\\Override',
        title_spawners: 'Spawn Presets (Spawners)',
        subtitle_spawners: 'Manage container and environment spawn rules in WindowsServer\\Loot\\Spawners\\Presets\\Override',
        title_zonemodifiers: 'Zone Modifiers',
        subtitle_zonemodifiers: 'Interactive management of spawn zones on the map',
        
        // Sidebar
        sidebar_loot_folder: 'Loot Working Folder:',
        default_path: 'Default',
        btn_specify_path: 'Specify Path',
        tooltip_refresh_files: 'Re-read and reload files',
        tooltip_toggle_sidebar: 'Hide/show sidebar',
        tooltip_help_info: 'Section help',
        local_server_connected: 'Local Server Connected',
        local_server_disconnected: 'Local Server Disconnected',
        
        // Global Actions
        dirty_badge_text: 'Unsaved changes exist',
        btn_save_all: 'Save All',
        
        // Cooldowns Tab
        active_override_file: 'Active Override File:',
        btn_create_new_file: 'Create New File',
        delete_all_default_cooldowns: 'DeleteAllDefaultCooldownGroups',
        delete_all_default_cooldowns_desc: 'Completely ignore game\'s default system cooldown settings',
        default_groups_to_delete: 'DefaultCooldownGroupsToDelete',
        default_groups_to_delete_desc: 'List of groups from Default folder that will be removed from the spawn system',
        btn_add_to_list: 'Add to List',
        cooldown_groups_in_file: 'Cooldown Groups List in This File',
        btn_add_new_group: 'Add New Group',
        
        // Items Tab
        search_item_id: 'Search by Item ID',
        placeholder_search_item: 'Enter Item ID to search...',
        cooldown_group: 'Cooldown Group',
        spawn_location: 'Spawn Location',
        parameter_status: 'Parameter Status',
        only_modified: 'Modified Only',
        only_disabled: 'Disabled Only',
        loaded_parameters: 'Loaded Parameters:',
        overridden: 'Modified:',
        file: 'File:',
        reset_filters: 'Reset Filters',
        btn_override_new_item: 'Override New Item',
        
        // Bulk operations
        bulk_edit: 'Bulk Edit',
        bulk_target: 'Target Area',
        bulk_target_filtered: 'All Filtered Items',
        bulk_target_checked: 'Only Checked Items',
        keep_no_change: '— No Changes —',
        remove_group: 'Remove Group (No Group)',
        spawn_disabled: 'Spawn Disabled',
        disable_spawn: 'Disable Spawn (True)',
        enable_spawn: 'Enable Spawn (False)',
        spawn_locations_label: 'Spawn Locations',
        all_locations: 'All Locations (Cst + Cnt + Mnt)',
        only_coastal: 'Only Coastal',
        only_continental: 'Only Continental',
        only_mountain: 'Only Mountain',
        bulk_cooldown_min_max: 'Cooldown Min / Max (h)',
        bulk_durability_override: 'Durability Override',
        override_durability_true: 'Override Durability (True)',
        override_durability_false: 'Use Map Default (False)',
        bulk_initial_usage_random: 'Initial Durability / Random Wear %',
        placeholder_initial: 'Initial',
        placeholder_wear: 'Wear %',
        btn_clear_selection: 'Clear Selection',
        btn_clear_fields: 'Clear Fields',
        btn_apply_changes: 'Apply Changes',
        
        // Table items
        table_header_id: 'Item ID',
        table_header_status: 'Status',
        table_header_spawn_disabled: 'Spawn Disabled',
        table_header_locations: 'Spawn Locations',
        table_header_cooldown_min: 'Cooldown Min',
        table_header_cooldown_max: 'Cooldown Max',
        table_header_cooldown_group: 'Cooldown Group',
        table_header_variations: 'Variations',
        table_header_durability: 'Custom Durability',
        table_header_initial: 'Initial Durability',
        table_header_random: 'Random Wear %',
        table_header_actions: 'Actions',
        no_items_found: 'No items found',
        try_changing_filters: 'Try changing search or filter parameters',
        rows_per_page: 'Rows per page:',
        
        // Nodes Tab
        active_nodes_file: 'Active Nodes File:',
        tooltip_show_override_files: 'Show files from Override folder (editable)',
        tooltip_show_default_files: 'Show original system files (read-only)',
        btn_add_root_node: 'Add Root Node',
        editor_mode_label: 'Editor',
        json_mode_label: 'JSON',
        tooltip_toggle_nodes_db: 'Hide/show Nodes database panel',
        btn_nodes_database_toggle: 'Nodes Base',
        tree_is_empty: 'Tree is Empty',
        tree_is_empty_desc: 'Add a root node or create a new file based on a template',
        json_data_nodes_title: 'Nodes Tree JSON Data',
        invalid_json_label: 'Invalid JSON!',
        default_nodes_db_title: 'Default Nodes Database',
        tooltip_collapse_panel: 'Collapse panel',
        btn_hide: 'Hide',
        placeholder_search_default_paths: 'Search default Nodes paths...',
        
        // Spawners Tab
        search_spawners_title: 'Search Spawn Presets',
        placeholder_search_spawner_files: 'Enter file name to search...',
        filters_and_view: 'Filters & View:',
        tooltip_reset_spawner_filters: 'Reset all filters and return to flat list',
        reset_all_spawner_filters: 'Reset All',
        tooltip_show_flat_files: 'Show all files as a flat list (no folder grouping)',
        spawner_view_flat_btn: 'All Files',
        tooltip_group_spawner_folders: 'Group files by virtual folders and categories',
        spawner_view_categories_btn: 'By Folders',
        tooltip_show_default_spawners: 'Show only original system preset files',
        tooltip_show_override_spawners: 'Show only modified override files',
        select_spawner_preset: 'Select Spawn Preset',
        select_spawner_preset_desc: 'Select a spawner file in the left panel for detailed editing or override creation',
        btn_delete_override: 'Delete Override',
        btn_create_override: 'Create Override',
        spawner_override_subfolder_label: 'Override Subfolder (in Presets/Override/):',
        spawner_override_subfolder_desc: 'Save folder',
        json_view_mode_label: 'View JSON',
        json_data_spawner_title: 'Preset JSON Data',
        general_spawner_settings_title: 'General Settings',
        add_field_to_config_label: 'Add field to configuration:',
        btn_add_field: '+ Add Field',
        
        // Zone Modifiers Tab
        zm_edit_mode_label: 'Zone Editing Mode:',
        zm_mode_general_btn: 'General Modifiers',
        zm_mode_spawners_btn: 'Spawners Zones',
        zm_modifiers_title: 'Zone Modifiers',
        btn_add: 'Add',
        zm_active_title: 'Modifier Parameters',
        btn_delete: 'Delete',
        zm_mod_name_label: 'Modifier Name:',
        zm_desc_spawn_prob: 'Affects open-world item spawn rate lying on surfaces.',
        zm_desc_exam_prob: 'Affects spawn rate of items hidden inside searchable containers.',
        zm_desc_exam_qty: 'Determines how many items spawn inside containers.',
        zm_desc_spawn_exp: 'How long items inside containers spawn since their disappearance.',
        zm_desc_exam_exp: 'How long open items spawn in the world since their disappearance.',
        zm_zones_list_label: 'Zones List:',
        zm_btn_draw_on_map: 'Draw on Map',
        zm_btn_add_zone_manual: '+ Add Zone Manually',
        zm_map_title: 'Interactive SCUM Zone Map',
        zm_show_hide_zones: 'Show/Hide',
        tooltip_zoom_out: 'Zoom Out',
        tooltip_zoom_in: 'Zoom In',
        tooltip_reset_zoom: 'Reset Zoom',
        zm_view_map_btn: 'Map',
        zm_drawing_instruction: 'Zone drawing mode: hold LMB and drag cursor on the map to highlight area.',
        btn_cancel: 'Cancel',
        zm_file_path_label: '📁 File Path:',
        btn_edit: 'Edit',
        btn_save_json: 'Save JSON',
        zm_file_label: '📁 File:',
        zm_total_zones_label: 'Total zones in config:',
        
        // Modals & Popups
        modal_create_cooldown_file_title: 'Create New Cooldown Groups File',
        file_name_label: 'File Name:',
        placeholder_filename_cooldown: 'e.g., Mod_Cooldowns_Food.json',
        modal_create_cooldown_file_desc: 'File will be automatically created in WindowsServer\\Loot\\CooldownGroups\\Override\\',
        btn_create: 'Create',
        modal_override_item_title: 'Override New Item',
        modal_override_item_desc: 'Select an item from default database to start editing its spawn parameters.',
        select_item_label: 'Select Item:',
        or_label: '— OR —',
        enter_item_id_manual: 'Enter new Item ID manually:',
        placeholder_custom_item_id: 'e.g., My_Custom_Rifle_Id',
        modal_create_nodes_file_title: 'Create New Nodes File',
        placeholder_filename_nodes: 'e.g., Mod_Nodes_Airfield.json',
        modal_create_nodes_file_desc: 'File will be automatically created in WindowsServer\\Loot\\Nodes\\Override\\',
        select_template_optional: 'Select Template (optional):',
        empty_nodes_template: '-- Empty File (ItemLootTreeNodes) --',
        template_desc: 'Allows copying the structure of an original file from Default folder for modification.',
        modal_select_item_title: 'Select Item from Database',
        placeholder_enter_item_name_id: 'Enter item name or ID...',
        search_results_limit: 'Search results (showing up to 100 matches):',
        btn_close: 'Close',
        modal_create_spawner_override_title: 'Create New Spawn Preset Override',
        modal_create_spawner_override_desc: 'Copies original file from Default folder to selected Override folder for subsequent editing.',
        default_template_file_label: 'Default Template File:',
        save_to_override_folder_label: 'Save to Override folder (Presets/Override/):',
        placeholder_select_or_enter_folder: 'Select or enter new folder name...',
        modal_configure_loot_dir_title: 'Specify Loot Folder Path',
        modal_configure_loot_dir_desc: 'You can override the Loot folder (containing CooldownGroups, Items, Nodes, Spawners). All subfolders are optional. The editor will read and write Override configurations from the specified folder, while Default system files will still be read from the default folder.',
        absolute_path_loot_dir_label: 'Absolute path to Loot folder:',
        placeholder_loot_dir: 'e.g., C:\\MyCustomServer\\Loot',
        blank_path_desc: 'Empty path resets settings to default folder.',
        btn_reset_default: 'Reset to Default',
        btn_save: 'Save',
        
        // Dinamic values
        badge_new: 'New',
        badge_custom: 'Custom',
        badge_default: 'Default',
        badge_override: 'Override',
        cooldown_sys: 'System',
        cooldown_custom: 'Custom',
        cooldown_min_label: 'Cooldown Min',
        cooldown_max_label: 'Cooldown Max',
        cooldown_lower_influence: 'Lower Groups Influence',
        btn_modify: 'Modify',
        no_group: 'No Group',
        no_limit: 'No Limit',
        tooltip_reset_to_default: 'Reset to default parameters',
        btn_reset: 'Reset',
        tooltip_override_params: 'Override parameters',
        btn_edit_short: 'Edit',
        no_presets_found: 'Presets not found',
        placeholder_node_name: 'Node name or Item ID...',
        tooltip_select_item_list: 'Select item from list',
        spawn_disabled_badge: 'SPAWN OFF',
        tooltip_spawn_disabled: 'This item is disabled for spawning (IsDisabledForSpawning: true) in Parameters.json',
        tooltip_add_child: 'Add child element',
        tooltip_copy_node: 'Copy (duplicate) this element/section',
        tooltip_delete_node: 'Delete this element and its sub-elements',
        tooltip_copy_path: 'Copy full node path',
        default_path_label: 'Default',
        default_path_desc: 'Default (WindowsServer/Loot folder in root)',
        list_is_empty: 'List is empty',
        no_group_empty: 'No Group (empty)',
        btn_collapse: 'Collapse',
        btn_expand: 'Expand',
        pagination_shown: 'Shown',
        pagination_of: 'of',
        pagination_items: 'items',
        nodes_tree_heading_editable: 'Hierarchical Nodes Tree Structure',
        nodes_tree_heading_readonly: 'Hierarchical Nodes Tree Structure (default) — read-only',
        spawner_readonly_hint: 'Original system file (Read-Only until override is created)',
        all_fields_added: '-- All fields added --',
        spawner_section_fixed_items: '📦 FixedItems Section (Guaranteed items)',
        spawner_section_items: '🏷️ Items Section (Random items list)',
        spawner_section_nodes: '🌳 Nodes Section (Hierarchical node connections)',
        spawner_section_subpresets: '📑 Subpresets Section (Child spawn presets)',
        btn_add_node: 'Add Node',
        btn_add_connection: 'Add Connection',
        btn_delete_node: 'Delete Node',
        node_label: 'Node',
        no_connections: 'No connections',
        node_badge: 'Node',
        item_badge: 'Item',
        badge_active: 'Active',
        confirm_delete_node: 'Are you sure you want to delete node "{nodeName}" and all its child elements?',
        confirm_delete_spawner_override: 'Are you sure you want to delete spawn preset override "{relPath}"?',
        zones_count: 'zones',
        no_zones_message: 'No zones present. Draw a zone on the map or add manually.',
        placeholder_zone_name: 'Zone Name',
        tooltip_show_zone_on_map: 'Show zone on map',
        tooltip_hide_zone_from_map: 'Hide zone from map',
        tooltip_delete_zone: 'Delete Zone',
        no_name: 'No Name',
        modifier_label: 'Modifier',
        confirm_unsaved_changes_nodes: 'There are unsaved changes in the current tree file. All changes will be lost. Continue?',
        confirm_unsaved_changes_spawner: 'There are unsaved changes in the current spawn settings. All changes will be lost. Continue?'
    }
};

// Global State
const state = {
    lang: localStorage.getItem('loot-spawn-editor-lang') || 'ru',
    customLootDir: null,
    activeTab: 'cooldowns',
    cooldownGroups: {
        defaultGroups: [],
        defaultDataMetadata: {
            DeleteAllDefaultCooldownGroups: false,
            DefaultCooldownGroupsToDelete: []
        },
        overrideFiles: {},
        activeFile: '',
        dirty: false
    },
    itemsData: {
        items: [],          // Current loaded items (merged default + override)
        originalItems: [],  // Snapshot for dirty state detection
        checkedItems: new Set(), // Set of selected item IDs for bulk edit
        sourceFile: 'Parameters.json',
        dirty: false,
        
        // Filtering
        searchQuery: '',
        filterGroup: 'ALL',
        filterLocations: new Set(['Coastal', 'Continental', 'Mountain']),
        filterCustomOnly: false,
        filterDisabledOnly: false,
        
        // Sorting
        sortColumn: 'Id',
        sortDirection: 'asc',
        
        // Pagination
        currentPage: 1,
        pageSize: 25
    },
    nodesData: {
        defaultFiles: [],
        defaultNodeNames: [],   // Set of all unique default node names
        defaultNodePaths: [],   // Set of all unique default node paths
        defaultTerminalNodePaths: [], // Set of all unique default terminal node paths
        overrideFiles: {},
        activeFile: '',
        activeTree: null,
        originalTreeJson: '',
        dirty: false,
        sourceMode: 'override',  // 'override' or 'default'
        editorMode: 'editor',    // 'editor' or 'json'
        jsonInvalid: false
    },
    spawnersData: {
        defaultFiles: [],
        overrideFiles: {},      // fileName -> relativePath map
        overrideDirs: [],       // list of override subfolders
        activeFileName: '',
        activeSpawner: null,
        originalSpawnerJson: '',
        dirty: false,
        searchQuery: '',
        collapsedFolders: new Set(),
        viewMode: 'flat',
        filterDefault: false,
        filterOverride: false,
        editorMode: 'editor',
        jsonInvalid: false
    },
    zoneModifiersData: {
        mode: 'general', // 'general' or 'spawners'
        modifiers: [],
        activeModifierIndex: -1,
        spawnersFolders: [],
        activeFolderIndex: -1,
        selectedZoneIndex: -1,
        dirty: false,
        isDrawing: false,
        drawingStart: null,
        drawingEnd: null,
        zoomScale: 1.0,
        baseWidth: 0,
        baseHeight: 0,
        showZones: true,
        isPanning: false,
        panStartMouse: null,
        panStartScroll: null
    }
};

// --- LANGUAGE LOCALIZATION HELPERS ---
function _t(key, fallback = '') {
    const lang = state.lang || 'ru';
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ? TRANSLATIONS[lang][key] : (fallback || key);
}

function translatePage() {
    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = _t(key);
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // 2. Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = _t(key);
        if (translation) {
            el.placeholder = translation;
        }
    });
    
    // 3. Titles/tooltips with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const translation = _t(key);
        if (translation) {
            el.title = translation;
        }
    });
}

window.changeLanguage = function(lang) {
    state.lang = lang;
    localStorage.setItem('loot-spawn-editor-lang', lang);
    
    // Update language buttons active state
    const ruBtn = document.getElementById('btn-lang-ru');
    const enBtn = document.getElementById('btn-lang-en');
    if (ruBtn && enBtn) {
        if (lang === 'ru') {
            ruBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            enBtn.classList.add('active');
            ruBtn.classList.remove('active');
        }
    }
    
    // Re-translate document static tags
    translatePage();
    
    // Update page title/subtitle based on active tab
    switchTab(state.activeTab);
    
    // Re-render active dynamic content
    if (state.activeTab === 'cooldowns') {
        renderCooldownGroups();
    } else if (state.activeTab === 'items') {
        renderItemsTable();
    } else if (state.activeTab === 'nodes') {
        renderNodesTree();
    } else if (state.activeTab === 'spawners') {
        renderSpawnerEditor();
    } else if (state.activeTab === 'zonemodifiers') {
        renderZoneModifiers();
    }
    
    // Update dynamically-managed toggle buttons
    const bulkBody = document.getElementById('bulk-card-body');
    const bulkBtn = document.getElementById('btn-toggle-bulk');
    if (bulkBody && bulkBtn) {
        bulkBtn.textContent = bulkBody.classList.contains('hidden') ? '[+] ' + _t('btn_expand') : '[-] ' + _t('btn_collapse');
    }
    const searchBody = document.getElementById('spawner-search-body');
    const searchBtn = document.getElementById('spawner-search-toggle-btn');
    if (searchBody && searchBtn) {
        searchBtn.textContent = searchBody.classList.contains('hidden') ? '[+] ' + _t('btn_expand') : '[-] ' + _t('btn_collapse');
    }
    const settingsBody = document.getElementById('spawner-settings-body');
    const settingsBtn = document.getElementById('btn-toggle-spawner-settings');
    if (settingsBody && settingsBtn) {
        settingsBtn.textContent = settingsBody.classList.contains('hidden') ? '[+] ' + _t('btn_expand') : '[-] ' + _t('btn_collapse');
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language switcher active class and translate page
    const ruBtn = document.getElementById('btn-lang-ru');
    const enBtn = document.getElementById('btn-lang-en');
    if (ruBtn && enBtn) {
        if (state.lang === 'ru') {
            ruBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            enBtn.classList.add('active');
            ruBtn.classList.remove('active');
        }
    }
    translatePage();

    // Set initial text for dynamically-managed toggle buttons
    const bulkBtn = document.getElementById('btn-toggle-bulk');
    if (bulkBtn) bulkBtn.textContent = '[+] ' + _t('btn_expand');
    
    const settingsBtn = document.getElementById('btn-toggle-spawner-settings');
    const settingsBody = document.getElementById('spawner-settings-body');
    if (settingsBtn && settingsBody) {
        settingsBtn.textContent = settingsBody.classList.contains('hidden') ? '[+] ' + _t('btn_expand') : '[-] ' + _t('btn_collapse');
    }
    
    const searchToggleBtn = document.getElementById('spawner-search-toggle-btn');

    // Restore sidebar state from local storage immediately to avoid layout thrashing
    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
    if (sidebarCollapsed === 'true') {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.add('collapsed');
    }
    
    // Restore spawner explorer search card state
    const searchCollapsed = localStorage.getItem('spawner-search-collapsed');
    if (searchCollapsed === 'true') {
        const body = document.getElementById('spawner-search-body');
        if (body) body.classList.add('hidden');
        if (searchToggleBtn) searchToggleBtn.textContent = '[+] ' + _t('btn_expand');
    } else {
        if (searchToggleBtn) searchToggleBtn.textContent = '[-] ' + _t('btn_collapse');
    }
    
    // Restore nodes sidebar collapsed state
    const nodesSidebarCollapsed = localStorage.getItem('nodes-sidebar-collapsed');
    if (nodesSidebarCollapsed === 'true') {
        const nodesSidebar = document.querySelector('.nodes-default-sidebar');
        const toggleBtn = document.getElementById('btn-toggle-nodes-sidebar');
        if (nodesSidebar) nodesSidebar.classList.add('collapsed');
        if (toggleBtn) toggleBtn.classList.add('sidebar-hidden');
    }
    
    loadAllData();
});

// Load all data from backend APIs
async function loadAllData() {
    try {
        await Promise.all([
            fetchConfig(),
            fetchCooldownGroups(),
            fetchItems(),
            fetchNodes(),
            fetchSpawners(),
            fetchZoneModifiers(),
            fetchSpawnerZones()
        ]);
        
        // Populate dropdown of default groups to delete in Cooldowns view
        populateDefaultGroupsToDeleteSelect();
        
        // Populate items autocomplete datalist
        populateItemsDatalist();
        
        // Render all views
        renderCooldownGroups();
        renderItemsTable();
        renderNodesTree();
        renderDefaultNodesList();
        
        switchTab(state.activeTab);
    } catch (err) {
        showToast('Ошибка загрузки', 'Не удалось загрузить данные с сервера.', 'error');
        console.error(err);
    }
}

// --- API FETCHERS & SAVERS ---

// Fetch Cooldown Groups configuration
async function fetchCooldownGroups() {
    const res = await fetch('/api/cooldown-groups');
    if (!res.ok) throw new Error('Failed to load cooldown groups');
    const data = await res.json();
    
    state.cooldownGroups.defaultGroups = data.defaultGroups || [];
    state.cooldownGroups.defaultDataMetadata = data.defaultDataMetadata || {
        DeleteAllDefaultCooldownGroups: false,
        DefaultCooldownGroupsToDelete: []
    };
    state.cooldownGroups.overrideFiles = data.overrideFiles || {};
    
    // Choose active file (first available in overrideFiles, or fallback)
    const files = Object.keys(state.cooldownGroups.overrideFiles);
    if (files.length > 0) {
        if (!state.cooldownGroups.activeFile || !state.cooldownGroups.overrideFiles[state.cooldownGroups.activeFile]) {
            state.cooldownGroups.activeFile = files[0];
        }
    } else {
        // No files exist, create a default one
        state.cooldownGroups.activeFile = 'Mod_CooldownGroups.json';
        state.cooldownGroups.overrideFiles['Mod_CooldownGroups.json'] = {
            DeleteAllDefaultCooldownGroups: false,
            DefaultCooldownGroupsToDelete: [],
            CooldownGroups: []
        };
    }
    
    state.cooldownGroups.dirty = false;
}

// Fetch Item Parameters configuration
async function fetchItems() {
    const res = await fetch('/api/items');
    if (!res.ok) throw new Error('Failed to load items');
    const data = await res.json();
    
    // Deep clone to separate original snapshot
    state.itemsData.items = JSON.parse(JSON.stringify(data.items || []));
    state.itemsData.originalItems = JSON.parse(JSON.stringify(data.items || []));
    state.itemsData.sourceFile = data.sourceFile || 'Parameters.json';
    
    state.itemsData.dirty = false;
}

// Fetch Custom Loot Directory Configuration
async function fetchConfig() {
    try {
        const res = await fetch('/api/config');
        if (res.ok) {
            const data = await res.json();
            state.customLootDir = data.customLootDir || null;
            renderCustomLootDirStatus();
            
            // Display game version under logo
            const verEl = document.getElementById('logo-version-text');
            if (verEl && data.ver) {
                verEl.textContent = `ver. ${data.ver}`;
            }
        }
    } catch (err) {
        console.error('Failed to fetch custom Loot config:', err);
    }
}

function renderCustomLootDirStatus() {
    const el = document.getElementById('sidebar-loot-path');
    if (!el) return;
    if (state.customLootDir) {
        el.textContent = state.customLootDir;
        el.title = state.customLootDir;
        el.classList.remove('text-muted');
        el.style.color = 'var(--color-accent)';
    } else {
        el.textContent = '❌ ' + _t('default_path_label');
        el.title = _t('default_path_desc');
        el.classList.add('text-muted');
        el.style.color = '';
    }
}

// Save Cooldown Groups to active file
async function saveCooldownGroups() {
    const activeFile = state.cooldownGroups.activeFile;
    const fileData = state.cooldownGroups.overrideFiles[activeFile];
    
    if (!fileData) return;
    
    // Simple frontend validations
    for (const group of fileData.CooldownGroups) {
        if (!group.Name || group.Name.trim() === '') {
            showToast('Ошибка валидации', 'Имя группы кулдаунов не может быть пустым', 'error');
            return;
        }
        if (group.CooldownMin > group.CooldownMax) {
            showToast('Ошибка валидации', `Группа "${group.Name}": Min кулдаун не может быть больше Max кулдауна`, 'error');
            return;
        }
    }

    try {
        const response = await fetch('/api/cooldown-groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName: activeFile,
                data: fileData
            })
        });
        
        if (!response.ok) throw new Error('Server error saving cooldown groups');
        
        state.cooldownGroups.dirty = false;
        showToast('Успех', `Файл кулдаунов ${activeFile} успешно сохранен`, 'success');
        
        // Reload all data so items dropdowns and location configs sync
        await loadAllData();
    } catch (err) {
        showToast('Ошибка сохранения', err.message, 'error');
    }
}

// Save Overridden Item Parameters to Parameters.json
async function saveItems() {
    // We only save items that are overridden (isOverridden === true)
    const overriddenItems = state.itemsData.items.filter(item => item.isOverridden);
    
    // Basic durability logic check before saving
    for (const item of overriddenItems) {
        if (item.CooldownPerSquadMemberMin > item.CooldownPerSquadMemberMax) {
            showToast('Ошибка валидации', `Предмет "${item.Id}": Min кулдаун не может быть больше Max кулдауна`, 'error');
            return;
        }
        if (item.ShouldOverrideInitialAndRandomUsage) {
            if (item.InitialUsageOverride < 0 || item.InitialUsageOverride > 100) {
                showToast('Ошибка валидации', `Предмет "${item.Id}": Начальная прочность должна быть от 0 до 100%`, 'error');
                return;
            }
            if (item.RandomUsageOverrideUsage < 0 || item.RandomUsageOverrideUsage > 100) {
                showToast('Ошибка валидации', `Предмет "${item.Id}": Случ. износ должен быть от 0 до 100%`, 'error');
                return;
            }
        }
    }

    try {
        const response = await fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: overriddenItems })
        });
        
        if (!response.ok) throw new Error('Server error saving item parameters');
        
        state.itemsData.dirty = false;
        showToast('Успех', 'Параметры предметов успешно сохранены в Override/Parameters.json', 'success');
        
        // Reload items list
        await fetchItems();
        renderItemsTable();
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка сохранения', err.message, 'error');
    }
}

// --- NAVIGATION & TABS ---
function switchTab(tabName) {
    state.activeTab = tabName;
    
    // Toggle active buttons
    document.getElementById('btn-tab-cooldowns').classList.toggle('active', tabName === 'cooldowns');
    document.getElementById('btn-tab-items').classList.toggle('active', tabName === 'items');
    document.getElementById('btn-tab-nodes').classList.toggle('active', tabName === 'nodes');
    document.getElementById('btn-tab-spawners').classList.toggle('active', tabName === 'spawners');
    document.getElementById('btn-tab-zonemodifiers').classList.toggle('active', tabName === 'zonemodifiers');
    
    // Toggle active sections
    document.getElementById('tab-cooldowns').classList.toggle('active', tabName === 'cooldowns');
    document.getElementById('tab-items').classList.toggle('active', tabName === 'items');
    document.getElementById('tab-nodes').classList.toggle('active', tabName === 'nodes');
    document.getElementById('tab-spawners').classList.toggle('active', tabName === 'spawners');
    document.getElementById('tab-zonemodifiers').classList.toggle('active', tabName === 'zonemodifiers');
    
    // Update Header title
    const title = _t(`title_${tabName}`);
    const subtitle = _t(`subtitle_${tabName}`);
        
    document.getElementById('page-title').textContent = title;
    document.getElementById('page-subtitle').textContent = subtitle;
    
    // Refresh rendering on tab switch
    if (tabName === 'cooldowns') {
        populateDefaultGroupsToDeleteSelect();
        renderCooldownGroups();
    } else if (tabName === 'items') {
        populateCooldownGroupsFilterSelect();
        renderItemsTable();
    } else if (tabName === 'nodes') {
        populateNodesFileSelect();
        renderNodesTree();
        const searchInput = document.getElementById('nodes-default-search');
        if (searchInput) searchInput.value = '';
        renderDefaultNodesList();
    } else if (tabName === 'spawners') {
        renderSpawnerTree();
        renderSpawnerEditor();
    } else if (tabName === 'zonemodifiers') {
        state.zoneModifiersData.baseWidth = 0;
        state.zoneModifiersData.baseHeight = 0;
        resetZoom();
        
        const toggleEl = document.getElementById('zm-toggle-zones');
        if (toggleEl) toggleEl.checked = state.zoneModifiersData.showZones;
        
        renderZoneModifiers();
        initZoneModifiersMap();
    }
    
    updateDirtyStateIndicator();
}

function saveActiveTab() {
    if (state.activeTab === 'cooldowns') {
        saveCooldownGroups();
    } else if (state.activeTab === 'items') {
        saveItems();
    } else if (state.activeTab === 'nodes') {
        saveNodes();
    } else if (state.activeTab === 'spawners') {
        saveSpawner();
    } else if (state.activeTab === 'zonemodifiers') {
        saveZoneModifiers();
    }
}

function updateDirtyStateIndicator() {
    const dirtyCountEl = document.getElementById('dirty-count');
    const badgeEl = document.getElementById('dirty-badge');
    
    let isDirty = false;
    let text = '';
    if (state.activeTab === 'cooldowns') {
        isDirty = state.cooldownGroups.dirty;
        text = 'Несохраненные кулдаун-группы';
    } else if (state.activeTab === 'items') {
        isDirty = state.itemsData.dirty;
        const count = getDirtyItemsCount();
        text = `Несохраненных изменений: ${count}`;
    } else if (state.activeTab === 'nodes') {
        isDirty = state.nodesData.dirty;
        text = 'Несохраненные изменения в дереве Nodes';
    } else if (state.activeTab === 'spawners') {
        isDirty = state.spawnersData.dirty;
        text = 'Несохраненные изменения в настройках спавна';
    } else if (state.activeTab === 'zonemodifiers') {
        isDirty = state.zoneModifiersData.dirty;
        text = 'Несохраненные изменения в модификаторах зон';
    }
    
    if (isDirty) {
        badgeEl.classList.remove('hidden');
        dirtyCountEl.textContent = text;
    } else {
        badgeEl.classList.add('hidden');
    }
}

// Calculate the number of items that have been modified compared to originalItems
function getDirtyItemsCount() {
    let count = 0;
    const items = state.itemsData.items;
    const originals = state.itemsData.originalItems;
    
    for (let i = 0; i < items.length; i++) {
        if (isItemDirty(items[i], originals[i])) {
            count++;
        }
    }
    return count;
}

// Helper to deeply compare items
function isItemDirty(item, original) {
    if (!original) return true; // Newly added custom items
    
    // Check key fields
    if (item.IsDisabledForSpawning !== original.IsDisabledForSpawning) return true;
    if (item.CooldownPerSquadMemberMin !== original.CooldownPerSquadMemberMin) return true;
    if (item.CooldownPerSquadMemberMax !== original.CooldownPerSquadMemberMax) return true;
    if (item.CooldownGroup !== original.CooldownGroup) return true;
    if (item.ShouldOverrideInitialAndRandomUsage !== original.ShouldOverrideInitialAndRandomUsage) return true;
    if (item.InitialUsageOverride !== original.InitialUsageOverride) return true;
    if (item.RandomUsageOverrideUsage !== original.RandomUsageOverrideUsage) return true;
    if (item.isOverridden !== original.isOverridden) return true;
    
    // Check Locations array
    const allowedLocs = item.AllowedLocations || [];
    const origAllowedLocs = original.AllowedLocations || [];
    if (allowedLocs.length !== origAllowedLocs.length) return true;
    const locSet = new Set(origAllowedLocs);
    for (const loc of allowedLocs) {
        if (!locSet.has(loc)) return true;
    }
    
    // Check Variations array
    const variations = item.Variations || [];
    const origVariations = original.Variations || [];
    if (variations.length !== origVariations.length) return true;
    const varSet = new Set(origVariations);
    for (const v of variations) {
        if (!varSet.has(v)) return true;
    }
    
    return false;
}

// --- COOLDOWN GROUPS LOGIC & RENDERING ---

function renderCooldownGroups() {
    const fileSelector = document.getElementById('cooldown-file-select');
    const container = document.getElementById('cooldown-groups-container');
    const chipsWrapper = document.getElementById('deleted-groups-chips');
    const deleteAllDefaultToggle = document.getElementById('cooldown-delete-all-default');
    
    // Save scroll position
    const scrollPos = window.scrollY;

    // 1. Populate override files list
    fileSelector.innerHTML = '';
    const files = Object.keys(state.cooldownGroups.overrideFiles);
    files.forEach(file => {
        const option = document.createElement('option');
        option.value = file;
        option.textContent = file;
        option.selected = (file === state.cooldownGroups.activeFile);
        fileSelector.appendChild(option);
    });

    const activeFile = state.cooldownGroups.activeFile;
    const activeData = state.cooldownGroups.overrideFiles[activeFile] || {
        DeleteAllDefaultCooldownGroups: false,
        DefaultCooldownGroupsToDelete: [],
        CooldownGroups: []
    };

    // 2. Set Globals Toggles
    deleteAllDefaultToggle.checked = activeData.DeleteAllDefaultCooldownGroups;
    
    // 3. Render Deleted Default Groups list chips
    chipsWrapper.innerHTML = '';
    const deletedGroups = activeData.DefaultCooldownGroupsToDelete || [];
    if (deletedGroups.length === 0) {
        chipsWrapper.innerHTML = `<span class="text-muted" style="font-size: 12px; font-style: italic;">${_t('list_is_empty')}</span>`;
    } else {
        deletedGroups.forEach(groupName => {
            const chip = document.createElement('div');
            chip.className = 'tag-chip';
            chip.innerHTML = `
                <span>${groupName}</span>
                <span class="tag-chip-remove" onclick="removeDeletedDefaultGroup('${groupName}')">&times;</span>
            `;
            chipsWrapper.appendChild(chip);
        });
    }

    // 4. Render Cooldown Cards
    container.innerHTML = '';
    
    // Render custom groups (from the active override file)
    const customGroups = activeData.CooldownGroups || [];
    customGroups.forEach((group, index) => {
        const card = createCooldownCard(group, index, false);
        container.appendChild(card);
    });

    // Render default groups (from default path) for read-only view and reference
    state.cooldownGroups.defaultGroups.forEach((group, index) => {
        // Only render default if it isn't overridden by a custom group with the same name
        const isOverridden = customGroups.some(cg => cg.Name === group.Name);
        if (!isOverridden) {
            const card = createCooldownCard(group, index, true);
            container.appendChild(card);
        }
    });

    // Restore scroll position
    window.scrollTo(0, scrollPos);
}

function createCooldownCard(group, index, isDefault) {
    const card = document.createElement('div');
    card.className = `cooldown-card ${isDefault ? 'default-card' : ''}`;
    
    card.innerHTML = `
        <div class="cooldown-card-header">
            <div class="cooldown-card-title">${group.Name}</div>
            <span class="cooldown-card-meta ${isDefault ? 'default-badge' : 'override-badge'}">
                ${isDefault ? _t('cooldown_sys') : _t('cooldown_custom')}
            </span>
        </div>
        
        <div class="cooldown-card-row">
            <div class="form-group">
                <label class="form-label">${_t('cooldown_min_label')}</label>
                <input type="number" step="0.1" min="0" value="${group.CooldownMin}" 
                    class="grid-input" ${isDefault ? 'disabled' : ''} 
                    onchange="updateCooldownGroupProperty(${index}, 'CooldownMin', this.value)">
            </div>
            <div class="form-group">
                <label class="form-label">${_t('cooldown_max_label')}</label>
                <input type="number" step="0.1" min="0" value="${group.CooldownMax}" 
                    class="grid-input" ${isDefault ? 'disabled' : ''} 
                    onchange="updateCooldownGroupProperty(${index}, 'CooldownMax', this.value)">
            </div>
        </div>

        <div class="cooldown-card-footer">
            <div class="form-group flex-row" style="margin-bottom: 0;">
                <label class="switch">
                    <input type="checkbox" ${group.IsAffectedByLowerGroups ? 'checked' : ''} 
                        ${isDefault ? 'disabled' : ''} 
                        onchange="updateCooldownGroupProperty(${index}, 'IsAffectedByLowerGroups', this.checked)">
                    <span class="slider round"></span>
                </label>
                <span class="form-label" style="font-size: 11px;">${_t('cooldown_lower_influence')}</span>
            </div>
            
            ${!isDefault ? `
                <button class="btn btn-danger btn-xs" onclick="deleteCooldownGroup(${index})">
                    ${_t('btn_delete')}
                </button>
            ` : `
                <button class="btn btn-secondary btn-xs" onclick="overrideDefaultCooldownGroup('${group.Name}')">
                    ${_t('btn_modify')}
                </button>
            `}
        </div>
    `;
    return card;
}

// Modify local properties of custom groups
function updateCooldownGroupProperty(index, property, value) {
    const activeFile = state.cooldownGroups.activeFile;
    const groups = state.cooldownGroups.overrideFiles[activeFile].CooldownGroups;
    
    let parsedVal = value;
    if (property === 'CooldownMin' || property === 'CooldownMax') {
        parsedVal = parseFloat(value) || 0;
    }
    
    groups[index][property] = parsedVal;
    markCooldownsDirty();
}

function markCooldownsDirty() {
    state.cooldownGroups.dirty = true;
    
    // Save checkbox state as well
    const activeFile = state.cooldownGroups.activeFile;
    state.cooldownGroups.overrideFiles[activeFile].DeleteAllDefaultCooldownGroups = 
        document.getElementById('cooldown-delete-all-default').checked;
        
    updateDirtyStateIndicator();
}

function onCooldownFileChange() {
    const select = document.getElementById('cooldown-file-select');
    state.cooldownGroups.activeFile = select.value;
    state.cooldownGroups.dirty = false; // Reset dirty on file switch
    renderCooldownGroups();
}

// Populate the Delete Default list options dropdown
function populateDefaultGroupsToDeleteSelect() {
    const select = document.getElementById('select-delete-default-group');
    select.innerHTML = '';
    
    const activeFile = state.cooldownGroups.activeFile;
    const activeData = state.cooldownGroups.overrideFiles[activeFile] || { DefaultCooldownGroupsToDelete: [] };
    const currentDeleted = new Set(activeData.DefaultCooldownGroupsToDelete || []);

    state.cooldownGroups.defaultGroups.forEach(group => {
        if (!currentDeleted.has(group.Name)) {
            const opt = document.createElement('option');
            opt.value = group.Name;
            opt.textContent = group.Name;
            select.appendChild(opt);
        }
    });
}

function addDeletedDefaultGroup() {
    const select = document.getElementById('select-delete-default-group');
    const groupName = select.value;
    
    if (!groupName) return;
    
    const activeFile = state.cooldownGroups.activeFile;
    if (!state.cooldownGroups.overrideFiles[activeFile].DefaultCooldownGroupsToDelete) {
        state.cooldownGroups.overrideFiles[activeFile].DefaultCooldownGroupsToDelete = [];
    }
    
    state.cooldownGroups.overrideFiles[activeFile].DefaultCooldownGroupsToDelete.push(groupName);
    markCooldownsDirty();
    populateDefaultGroupsToDeleteSelect();
    renderCooldownGroups();
}

function removeDeletedDefaultGroup(groupName) {
    const activeFile = state.cooldownGroups.activeFile;
    const list = state.cooldownGroups.overrideFiles[activeFile].DefaultCooldownGroupsToDelete || [];
    state.cooldownGroups.overrideFiles[activeFile].DefaultCooldownGroupsToDelete = list.filter(item => item !== groupName);
    
    markCooldownsDirty();
    populateDefaultGroupsToDeleteSelect();
    renderCooldownGroups();
}

// Create new empty cooldown group in active file
function createNewCooldownGroup() {
    const activeFile = state.cooldownGroups.activeFile;
    const groups = state.cooldownGroups.overrideFiles[activeFile].CooldownGroups || [];
    
    // Find unique name
    let newName = 'NewGroup';
    let counter = 1;
    while (groups.some(g => g.Name === newName) || state.cooldownGroups.defaultGroups.some(g => g.Name === newName)) {
        newName = `NewGroup_${counter++}`;
    }

    groups.push({
        Name: newName,
        CooldownMin: 1.0,
        CooldownMax: 2.0,
        IsAffectedByLowerGroups: true
    });
    
    // Scroll directly to new cards
    markCooldownsDirty();
    renderCooldownGroups();
    
    // Rename immediately by auto-focusing on name? Well, name is rendered inside card. 
    // Let's make the card title editable on double click! 
    // Double click to rename:
    const cards = document.getElementById('cooldown-groups-container').children;
    const lastCard = cards[groups.length - 1];
    if (lastCard) {
        const titleEl = lastCard.querySelector('.cooldown-card-title');
        makeCooldownTitleEditable(titleEl, groups.length - 1);
    }
}

// Inline Double-Click rename for custom groups names
function makeCooldownTitleEditable(element, index) {
    const currentName = element.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.className = 'grid-input';
    input.style.fontSize = '15px';
    input.style.fontWeight = '700';
    
    input.onblur = () => {
        const val = input.value.trim();
        if (val && val !== currentName) {
            const activeFile = state.cooldownGroups.activeFile;
            const groups = state.cooldownGroups.overrideFiles[activeFile].CooldownGroups;
            
            // Check uniqueness
            if (groups.some((g, i) => g.Name === val && i !== index) || state.cooldownGroups.defaultGroups.some(g => g.Name === val)) {
                showToast('Ошибка имени', 'Группа кулдаунов с таким именем уже существует!', 'error');
                element.textContent = currentName;
            } else {
                groups[index].Name = val;
                element.textContent = val;
                markCooldownsDirty();
            }
        } else {
            element.textContent = currentName;
        }
    };
    
    input.onkeydown = (e) => {
        if (e.key === 'Enter') input.blur();
        if (e.key === 'Escape') {
            input.value = currentName;
            input.blur();
        }
    };
    
    element.innerHTML = '';
    element.appendChild(input);
    input.focus();
    input.select();
}

// Hook double click on all custom card titles
document.addEventListener('dblclick', (e) => {
    const titleEl = e.target.closest('.cooldown-card:not(.default-card) .cooldown-card-title');
    if (titleEl) {
        const card = titleEl.closest('.cooldown-card');
        const index = Array.from(card.parentNode.children).indexOf(card);
        makeCooldownTitleEditable(titleEl, index);
    }
});

function deleteCooldownGroup(index) {
    const activeFile = state.cooldownGroups.activeFile;
    const groups = state.cooldownGroups.overrideFiles[activeFile].CooldownGroups || [];
    groups.splice(index, 1);
    
    markCooldownsDirty();
    renderCooldownGroups();
}

// Duplicate/Override a default group to custom so they can edit its values
function overrideDefaultCooldownGroup(groupName) {
    const defaultGroup = state.cooldownGroups.defaultGroups.find(g => g.Name === groupName);
    if (!defaultGroup) return;
    
    const activeFile = state.cooldownGroups.activeFile;
    const groups = state.cooldownGroups.overrideFiles[activeFile].CooldownGroups || [];
    
    if (groups.some(g => g.Name === groupName)) {
        showToast('Предупреждение', 'Эта группа уже переопределена в кастомных.', 'warning');
        return;
    }
    
    groups.push({
        ...defaultGroup
    });
    
    markCooldownsDirty();
    renderCooldownGroups();
    showToast('Переопределено', `Группа кулдаунов "${groupName}" скопирована в кастомные для редактирования`, 'success');
}

// MODAL - Create new Cooldown Groups override file name
function openCreateFileModal() {
    document.getElementById('new-file-name-input').value = 'Mod_Cooldowns_';
    document.getElementById('modal-create-file').classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

// ========== HELP DATA & MODAL ==========
const HELP_DATA = {
    spawners: {
        titleRu: 'Справка: Пресеты спавна (Spawners)',
        titleEn: 'Help: Spawn Presets (Spawners)',
        bodyRu: `
            <div class="help-section">
                <div class="help-section-title">📦 Экспорт дефолтных пресетов</div>
                <p>Выгрузка (обновление) спавнеров в папку Default:</p>
                <div class="help-command">#ExportDefaultItemSpawnerPresets</div>
                <p>Экспортирует все дефолтные пресеты спавнеров, используемые в игре.</p>
                <p><b>Multiplayer:</b> <span class="help-path">Server\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Spawners\\Presets\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Spawners\\Presets\\Default</span></p>
                <p style="margin-top: 6px;">Внутри папки Default находятся все экспортированные пресеты. Нельзя создавать новые — можно только изменять существующие.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📍 Экспорт пресетов по зонам</div>
                <div class="help-command">#ExportItemSpawnerPresetsInZone</div>
                <p>Экспортирует все пресеты спавнеров, используемые в определенной зоне.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🔍 Отладка спавнеров</div>
                <div class="help-command">#SetShouldPrintExamineSpawnerPresets</div>
                <p>Выводит в лог, какой пресет спавна используется для каждого объекта. Сохраняет файл <span class="help-path">loot.log</span></p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🎲 Rarity (Редкость)</div>
                <p>Определяет вероятность выбора предмета из набора. Каждому объекту назначается один из уровней редкости:</p>
                <table class="help-rarity-table">
                    <tr><td class="rarity-Abundant">Abundant</td><td>в 32 раза вероятнее, чем <span class="rarity-ExtremelyRare">Extremely Rare</span></td></tr>
                    <tr><td class="rarity-Common">Common</td><td>в 16 раз вероятнее</td></tr>
                    <tr><td class="rarity-Uncommon">Uncommon</td><td>в 8 раз вероятнее</td></tr>
                    <tr><td class="rarity-Rare">Rare</td><td>в 4 раза вероятнее</td></tr>
                    <tr><td class="rarity-VeryRare">Very Rare</td><td>в 2 раза вероятнее</td></tr>
                    <tr><td class="rarity-ExtremelyRare">Extremely Rare</td><td>базовый уровень вероятности</td></tr>
                </table>
                <p>Можно комбинировать методы: <b>FixedItems</b> + <b>Items</b> / <b>Subpresets</b> / <b>Nodes</b>.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🔄 Применение изменений</div>
                <div class="help-command">#ReloadLootCustomizationsAndResetSpawners</div>
                <p>Перезагружает все пользовательские настройки лута из папки Config/Loot и применяет их в игре.</p>
            </div>
        `,
        bodyEn: `
            <div class="help-section">
                <div class="help-section-title">📦 Export Default Presets</div>
                <div class="help-command">#ExportDefaultItemSpawnerPresets</div>
                <p>Exports all default spawner presets used in the game.</p>
                <p><b>Multiplayer:</b> <span class="help-path">Server\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Spawners\\Presets\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Spawners\\Presets\\Default</span></p>
                <p style="margin-top: 6px;">Inside the Default folder you will find all exported spawner presets. You can't create new ones, you can only change the existing ones.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📍 Export Presets In Zone</div>
                <div class="help-command">#ExportItemSpawnerPresetsInZone</div>
                <p>Exports all spawner presets used in a certain zone.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🔍 Debug Spawners</div>
                <div class="help-command">#SetShouldPrintExamineSpawnerPresets</div>
                <p>Prints which spawner preset you are looting from which object and saves file <span class="help-path">loot.log</span></p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🎲 Rarity</div>
                <p>Determines the probability of selecting an object from a set. Each object is assigned a rarity level:</p>
                <table class="help-rarity-table">
                    <tr><td class="rarity-Abundant">Abundant</td><td>32× more likely than <span class="rarity-ExtremelyRare">Extremely Rare</span></td></tr>
                    <tr><td class="rarity-Common">Common</td><td>16× more likely</td></tr>
                    <tr><td class="rarity-Uncommon">Uncommon</td><td>8× more likely</td></tr>
                    <tr><td class="rarity-Rare">Rare</td><td>4× more likely</td></tr>
                    <tr><td class="rarity-VeryRare">Very Rare</td><td>2× more likely</td></tr>
                    <tr><td class="rarity-ExtremelyRare">Extremely Rare</td><td>Base probability level</td></tr>
                </table>
                <p>You can combine methods: <b>FixedItems</b> with <b>Items</b> / <b>Subpresets</b> / <b>Nodes</b>.</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">🔄 Reload Changes</div>
                <div class="help-command">#ReloadLootCustomizationsAndResetSpawners</div>
                <p>Reloads all loot customizations you have made in the Config/Loot.</p>
            </div>
        `
    },
    nodes: {
        titleRu: 'Справка: Дерево вероятностей (Nodes)',
        titleEn: 'Help: Probability Tree (Nodes)',
        bodyRu: `
            <div class="help-section">
                <div class="help-section-title">🌲 Экспорт дерева Nodes</div>
                <div class="help-command">#ExportDefaultLootTree</div>
                <p>Экспортирует дерево лута в его дефолтном состоянии (до любых пользовательских настроек — то, с чем игра поставляется).</p>
                <p><b>Multiplayer:</b> <span class="help-path">&lt;Server&gt;\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Nodes\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Nodes\\Default</span></p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📸 Экспорт текущего состояния</div>
                <div class="help-command">#ExportCurrentLootTree</div>
                <p>Экспортирует дерево лута в его текущем состоянии (с учётом всех применённых оверрайдов).</p>
            </div>
        `,
        bodyEn: `
            <div class="help-section">
                <div class="help-section-title">🌲 Export Default Loot Tree</div>
                <div class="help-command">#ExportDefaultLootTree</div>
                <p>Exports the loot tree in its default state — the state before any customizations, as shipped with the game.</p>
                <p><b>Multiplayer:</b> <span class="help-path">&lt;Server&gt;\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Nodes\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Nodes\\Default</span></p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📸 Export Current State</div>
                <div class="help-command">#ExportCurrentLootTree</div>
                <p>Exports the loot tree in its current state (with all applied overrides).</p>
            </div>
        `
    },
    items: {
        titleRu: 'Справка: Параметры появления предметов',
        titleEn: 'Help: Item Spawn Parameters',
        bodyRu: `
            <div class="help-section">
                <div class="help-section-title">📋 Экспорт параметров предметов</div>
                <div class="help-command">#ExportDefaultItemSpawningParameters</div>
                <p>Создаёт файл <b>Parameters.json</b> с параметрами для всех предметов, которые могут спавниться системой лута. Предметы, которые создаются через крафт, не включены.</p>
                <p><b>Multiplayer:</b> <span class="help-path">Server\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Items\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Items\\Default</span></p>
            </div>
        `,
        bodyEn: `
            <div class="help-section">
                <div class="help-section-title">📋 Export Item Parameters</div>
                <div class="help-command">#ExportDefaultItemSpawningParameters</div>
                <p>Creates a <b>Parameters.json</b> file with parameters for all items that can be spawned by the loot system. Crafted items are not included.</p>
                <p><b>Multiplayer:</b> <span class="help-path">Server\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\Items\\Default</span></p>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%\\SCUM\\Saved\\Config\\WindowsNoEditor\\Loot\\Items\\Default</span></p>
            </div>
        `
    },
    zonemodifiers: {
        titleRu: 'Справка: Модификатор зон (Zone Modifiers)',
        titleEn: 'Help: Zone Modifiers',
        bodyRu: `
            <div class="help-section">
                <div class="help-section-title">🗺️ Zones.json</div>
                <p>Файл <b>Zones.json</b> определяет границы для пресетов спавнеров в определённой папке.</p>
                <p>Если в папке нет файла Zones — используется Zones из родительской папки (дочерний Zones перекрывает родительский).</p>
                <p>Если файл Zones отсутствует во всей папке Override — используется глобальная настройка (пресеты будут применены ко всей карте).</p>
            </div>
        `,
        bodyEn: `
            <div class="help-section">
                <div class="help-section-title">🗺️ Zones.json</div>
                <p>The <b>Zones.json</b> determines the boundaries for the spawner presets in a certain folder.</p>
                <p>If there is no Zones file in a certain folder, it will use the Zones from the parent folder (the child Zones file overrides the parent's Zones file).</p>
                <p>If there is no Zones file included anywhere in the entire "Override" folder, it will use the global location (the presets will be used on the entire map).</p>
            </div>
        `
    },
    cooldowns: {
        titleRu: 'Справка: Редактор групп кулдаунов',
        titleEn: 'Help: Cooldown Groups Editor',
        bodyRu: `
            <div class="help-section">
                <div class="help-section-title">⏱️ Параметры групп кулдаунов</div>
                <p>Каждая группа кулдаунов определяется набором параметров:</p>
                <table class="help-rarity-table">
                    <tr><td>Name</td><td>Имя группы — используется в Parameters.json для привязки предметов</td></tr>
                    <tr><td>_comment</td><td>Примечание для организации (личная заметка)</td></tr>
                    <tr><td>CooldownMin</td><td>Минимальный кулдаун группы (в часах)</td></tr>
                    <tr><td>CooldownMax</td><td>Максимальный кулдаун группы (в часах)</td></tr>
                    <tr><td>IsAffectedByLowerGroups</td><td>true/false — влияют ли нижестоящие группы</td></tr>
                </table>
                <p style="margin-top: 6px;">Значения измеряются в часах. Например: 2 часа = <b>2</b>, 1 минута = <b>0.01667</b> (1/60).</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📦 Экспорт дефолтных кулдаунов</div>
                <div class="help-command">#ExportDefaultItemSpawningCooldownGroups</div>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%/SCUM/Saved/Config/WindowsNoEditor/Loot/CooldownGroups/Default</span></p>
                <p><b>Multiplayer:</b> <span class="help-path">&lt;Server&gt;\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\CooldownGroups\\Default</span></p>
            </div>
        `,
        bodyEn: `
            <div class="help-section">
                <div class="help-section-title">⏱️ Cooldown Group Parameters</div>
                <p>Each cooldown group is defined by these parameters:</p>
                <table class="help-rarity-table">
                    <tr><td>Name</td><td>Group name — used in Parameters.json to assign items to the group</td></tr>
                    <tr><td>_comment</td><td>Organizational note (personal memo)</td></tr>
                    <tr><td>CooldownMin</td><td>Minimum cooldown for the group (in hours)</td></tr>
                    <tr><td>CooldownMax</td><td>Maximum cooldown for the group (in hours)</td></tr>
                    <tr><td>IsAffectedByLowerGroups</td><td>true/false — whether lower groups affect this one</td></tr>
                </table>
                <p style="margin-top: 6px;">Values are measured in hours. E.g.: 2 hours = <b>2</b>, 1 minute = <b>0.01667</b> (1/60).</p>
            </div>
            <div class="help-section">
                <div class="help-section-title">📦 Export Default Cooldown Groups</div>
                <div class="help-command">#ExportDefaultItemSpawningCooldownGroups</div>
                <p><b>Singleplayer:</b> <span class="help-path">%LocalAppData%/SCUM/Saved/Config/WindowsNoEditor/Loot/CooldownGroups/Default</span></p>
                <p><b>Multiplayer:</b> <span class="help-path">&lt;Server&gt;\\SCUM\\Saved\\Config\\WindowsServer\\Loot\\CooldownGroups\\Default</span></p>
            </div>
        `
    }
};

function openHelpModal() {
    const tab = state.activeTab;
    const helpData = HELP_DATA[tab];
    if (!helpData) return;
    
    const isRu = state.lang === 'ru';
    document.getElementById('modal-help-title').textContent = isRu ? helpData.titleRu : helpData.titleEn;
    document.getElementById('modal-help-body').innerHTML = isRu ? helpData.bodyRu : helpData.bodyEn;
    document.getElementById('modal-help-info').classList.remove('hidden');
}

async function submitCreateCooldownFile() {
    let name = document.getElementById('new-file-name-input').value.trim();
    if (!name.endsWith('.json')) {
        name += '.json';
    }
    
    if (name === '.json' || name === 'Mod_Cooldowns_.json') {
        showToast('Ошибка имени', 'Введите корректное имя файла', 'error');
        return;
    }

    try {
        const res = await fetch('/api/cooldown-groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName: name,
                data: {
                    DeleteAllDefaultCooldownGroups: false,
                    DefaultCooldownGroupsToDelete: [],
                    CooldownGroups: []
                }
            })
        });
        
        if (!res.ok) throw new Error('Failed to create file');
        
        closeModal('modal-create-file');
        showToast('Файл создан', `Успешно создан кастомный файл кулдаунов ${name}`, 'success');
        
        // Reload groups list, selecting this file as active
        state.cooldownGroups.activeFile = name;
        await fetchCooldownGroups();
        renderCooldownGroups();
    } catch (err) {
        showToast('Ошибка создания', err.message, 'error');
    }
}

// --- ITEMS PARAMETERS RENDERING & LOGIC ---

// Populates Cooldown Groups filter selector dropdown dynamically
function populateCooldownGroupsFilterSelect() {
    const select = document.getElementById('filter-cooldown-select');
    const bulkSelect = document.getElementById('bulk-cooldown-group');
    const currentValue = select.value;
    const currentBulkValue = bulkSelect ? bulkSelect.value : 'KEEP';
    
    select.innerHTML = `
        <option value="ALL">${_t('all_groups')}</option>
        <option value="NONE">${_t('no_group_empty')}</option>
    `;
    
    if (bulkSelect) {
        bulkSelect.innerHTML = `
            <option value="KEEP">${_t('keep_no_change')}</option>
            <option value="NONE">${_t('remove_group')}</option>
        `;
    }
    
    const uniqueGroups = getAllAvailableCooldownGroupNames();
    uniqueGroups.forEach(gName => {
        // Filter dropdown
        const opt = document.createElement('option');
        opt.value = gName;
        opt.textContent = gName;
        opt.selected = (gName === currentValue);
        select.appendChild(opt);
        
        // Bulk dropdown
        if (bulkSelect) {
            const bulkOpt = document.createElement('option');
            bulkOpt.value = gName;
            bulkOpt.textContent = gName;
            bulkOpt.selected = (gName === currentBulkValue);
            bulkSelect.appendChild(bulkOpt);
        }
    });
}

// Returns a set of all unique groups names from both Default and current Active file
function getAllAvailableCooldownGroupNames() {
    const names = new Set();
    
    // 1. Defaults
    state.cooldownGroups.defaultGroups.forEach(g => names.add(g.Name));
    
    // 2. Custom override groups in active file
    const activeFile = state.cooldownGroups.activeFile;
    const fileData = state.cooldownGroups.overrideFiles[activeFile];
    if (fileData && fileData.CooldownGroups) {
        fileData.CooldownGroups.forEach(g => names.add(g.Name));
    }
    
    // Remove groups marked for deletion (unless DeleteAllDefault is true, in which case defaults are gone)
    const activeDeleted = fileData?.DefaultCooldownGroupsToDelete || [];
    const deleteAllDefault = fileData?.DeleteAllDefaultCooldownGroups || false;
    
    if (deleteAllDefault) {
        // clear default groups out of the names list
        names.clear();
        fileData?.CooldownGroups.forEach(g => names.add(g.Name));
    } else {
        activeDeleted.forEach(delGroup => names.delete(delGroup));
    }
    
    return Array.from(names).sort();
}

// Returns full group object (default or override) by name
function getCooldownGroupInfo(gName) {
    if (!gName) return null;
    
    // 1. Check custom override groups
    const activeFile = state.cooldownGroups.activeFile;
    const fileData = state.cooldownGroups.overrideFiles[activeFile];
    if (fileData && fileData.CooldownGroups) {
        const found = fileData.CooldownGroups.find(g => g.Name === gName);
        if (found) return found;
    }
    
    // 2. Check default groups (if not overridden or DeleteAllDefault is false)
    const deleteAllDefault = fileData?.DeleteAllDefaultCooldownGroups || false;
    const activeDeleted = new Set(fileData?.DefaultCooldownGroupsToDelete || []);
    if (!deleteAllDefault && !activeDeleted.has(gName)) {
        const found = state.cooldownGroups.defaultGroups.find(g => g.Name === gName);
        if (found) return found;
    }
    
    return null;
}

function renderItemsTable() {
    const tbody = document.getElementById('items-table-body');
    const noItemsEl = document.getElementById('no-items-message');
    
    // Reset tbody
    tbody.innerHTML = '';
    
    // Get list of filtered items
    const filteredItems = getFilteredItems();
    
    // Populate pagination numbers
    const totalCount = filteredItems.length;
    document.getElementById('total-items-count').textContent = state.itemsData.items.length;
    document.getElementById('overridden-items-count').textContent = state.itemsData.items.filter(i => i.isOverridden).length;
    document.getElementById('items-source-file').textContent = state.itemsData.sourceFile;
    document.getElementById('pag-total').textContent = totalCount;
    
    if (totalCount === 0) {
        noItemsEl.classList.remove('hidden');
        document.getElementById('pag-start').textContent = 0;
        document.getElementById('pag-end').textContent = 0;
        renderPaginationControls(0);
        return;
    }
    
    noItemsEl.classList.add('hidden');
    
    // Paginate items
    const startIndex = (state.itemsData.currentPage - 1) * state.itemsData.pageSize;
    const endIndex = Math.min(startIndex + state.itemsData.pageSize, totalCount);
    
    document.getElementById('pag-start').textContent = startIndex + 1;
    document.getElementById('pag-end').textContent = endIndex;
    
    const paginatedItems = filteredItems.slice(startIndex, endIndex);
    
    // Render row for each paginated item
    paginatedItems.forEach(item => {
        const originalIndex = state.itemsData.items.findIndex(i => i.Id === item.Id);
        const originalItem = state.itemsData.originalItems.find(i => i.Id === item.Id);
        const isDirty = isItemDirty(item, originalItem);
        
        const tr = document.createElement('tr');
        if (isDirty) tr.classList.add('dirty-row');
        if (item.IsDisabledForSpawning) tr.classList.add('disabled-row');
        
        // HTML columns representation
        tr.innerHTML = `
            <!-- Checkbox -->
            <td style="text-align: center; vertical-align: middle;">
                <input type="checkbox" class="item-row-checkbox" style="cursor: pointer;" 
                    ${state.itemsData.checkedItems.has(item.Id) ? 'checked' : ''} 
                    onchange="toggleItemChecked('${item.Id}', this.checked)">
            </td>
            
            <!-- ID -->
            <td class="col-id" title="${item.Id}">
                <div style="display: flex; align-items: center; gap: 8px; width: 100%; overflow: hidden;">
                    <img src="images/${item.Id}.webp" onerror="if(this.src.endsWith('.webp')){this.src=this.src.slice(0,-5)+'.png';}else{this.src='images/unknown.webp';}" class="item-table-icon">
                    <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.Id}</span>
                </div>
            </td>
            
            <!-- Status Badge -->
            <td class="col-status">
                ${item.isNew 
                    ? `<span class="badge badge-new">${_t('badge_new')}</span>` 
                    : item.isOverridden 
                        ? `<span class="badge badge-custom">${_t('badge_custom')}</span>` 
                        : `<span class="badge badge-default">${_t('badge_default')}</span>`}
            </td>
            
            <!-- Spawning Disabled Toggle -->
            <td class="col-disabled">
                <label class="switch">
                    <input type="checkbox" ${item.IsDisabledForSpawning ? 'checked' : ''} 
                        onchange="updateItemField(${originalIndex}, 'IsDisabledForSpawning', this.checked)">
                    <span class="slider round"></span>
                </label>
            </td>
            
            <!-- Allowed Locations -->
            <td class="col-locations">
                <div class="table-loc-chips">
                    <button class="loc-btn ${(item.AllowedLocations || []).includes('Coastal') ? 'active' : ''}" 
                        onclick="toggleItemLocation(${originalIndex}, 'Coastal')">Cst</button>
                    <button class="loc-btn ${(item.AllowedLocations || []).includes('Continental') ? 'active' : ''}" 
                        onclick="toggleItemLocation(${originalIndex}, 'Continental')">Cnt</button>
                    <button class="loc-btn ${(item.AllowedLocations || []).includes('Mountain') ? 'active' : ''}" 
                        onclick="toggleItemLocation(${originalIndex}, 'Mountain')">Mnt</button>
                </div>
            </td>
            
            <!-- Cooldown Min -->
            <td class="col-cooldown-min">
                <input type="number" step="0.1" min="0" value="${item.CooldownPerSquadMemberMin}" 
                    class="grid-input" 
                    onchange="updateItemField(${originalIndex}, 'CooldownPerSquadMemberMin', parseFloat(this.value) || 0)">
            </td>
            
            <!-- Cooldown Max -->
            <td class="col-cooldown-max">
                <input type="number" step="0.1" min="0" value="${item.CooldownPerSquadMemberMax}" 
                    class="grid-input" 
                    onchange="updateItemField(${originalIndex}, 'CooldownPerSquadMemberMax', parseFloat(this.value) || 0)">
            </td>
            
            <!-- Cooldown Group -->
            <td class="col-cooldown-group">
                <div class="select-wrapper select-xs" style="width: 100%;">
                    <select onchange="updateItemField(${originalIndex}, 'CooldownGroup', this.value)">
                        <option value="">${_t('no_group')}</option>
                        ${getAllAvailableCooldownGroupNames().map(gName => `
                            <option value="${gName}" ${item.CooldownGroup === gName ? 'selected' : ''}>${gName}</option>
                        `).join('')}
                    </select>
                </div>
                ${(() => {
                    const info = getCooldownGroupInfo(item.CooldownGroup);
                    if (info) {
                        return `<div class="cooldown-group-hint" style="font-size: 10px; color: var(--color-accent); margin-top: 4px; font-family: var(--font-secondary); font-weight: 500;">
                            Min: ${info.CooldownMin}${state.lang === 'ru' ? 'ч' : 'h'} | Max: ${info.CooldownMax}${state.lang === 'ru' ? 'ч' : 'h'}
                        </div>`;
                    }
                    return `<div class="cooldown-group-hint" style="font-size: 10px; color: var(--color-text-muted); margin-top: 4px; font-style: italic;">
                        ${_t('no_limit')}
                    </div>`;
                })()}
            </td>
            
            <!-- Variations Badges -->
            <td class="col-variations">
                <div class="variations-list">
                    ${(item.Variations || []).map((vName, vIdx) => `
                        <span class="variation-chip">
                            <span>${vName}</span>
                            <span class="variation-delete" onclick="removeItemVariation(${originalIndex}, ${vIdx})">&times;</span>
                        </span>
                    `).join('')}
                    <button class="btn-add-chip" onclick="addItemVariationPrompt(${originalIndex})">+</button>
                </div>
            </td>
            
            <!-- Should Override Durability Toggle -->
            <td class="col-usage-override">
                <label class="switch">
                    <input type="checkbox" ${item.ShouldOverrideInitialAndRandomUsage ? 'checked' : ''} 
                        onchange="updateItemField(${originalIndex}, 'ShouldOverrideInitialAndRandomUsage', this.checked)">
                    <span class="slider round"></span>
                </label>
            </td>
            
            <!-- Initial Usage Override -->
            <td class="col-initial-usage">
                <input type="number" min="0" max="100" value="${item.InitialUsageOverride}" 
                    class="grid-input" 
                    ${!item.ShouldOverrideInitialAndRandomUsage ? 'disabled' : ''}
                    onchange="updateItemField(${originalIndex}, 'InitialUsageOverride', parseInt(this.value) || 0)">
            </td>
            
            <!-- Random Usage Override -->
            <td class="col-random-usage">
                <input type="number" min="0" max="100" value="${item.RandomUsageOverrideUsage}" 
                    class="grid-input" 
                    ${!item.ShouldOverrideInitialAndRandomUsage ? 'disabled' : ''}
                    onchange="updateItemField(${originalIndex}, 'RandomUsageOverrideUsage', parseInt(this.value) || 0)">
            </td>
            
            <!-- Action Actions -->
            <td class="col-actions">
                ${item.isOverridden ? `
                    <button class="btn btn-danger btn-xs" title="${_t('tooltip_reset_to_default')}" onclick="resetItemToDefault('${item.Id}')">
                        ${_t('btn_reset')}
                    </button>
                ` : `
                    <button class="btn btn-accent btn-xs" title="${_t('tooltip_override_params')}" onclick="forceOverrideItem(${originalIndex})">
                        ${_t('btn_edit_short')}
                    </button>
                `}
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    renderPaginationControls(totalCount);
}

// Fetch list after search, filters, and sort applied
function getFilteredItems() {
    let items = [...state.itemsData.items];
    
    // 1. Search Query ID
    if (state.itemsData.searchQuery.trim() !== '') {
        const query = state.itemsData.searchQuery.toLowerCase();
        items = items.filter(item => item.Id.toLowerCase().includes(query));
    }
    
    // 2. Cooldown Group Filter
    if (state.itemsData.filterGroup !== 'ALL') {
        if (state.itemsData.filterGroup === 'NONE') {
            items = items.filter(item => !item.CooldownGroup || item.CooldownGroup === '');
        } else {
            items = items.filter(item => item.CooldownGroup === state.itemsData.filterGroup);
        }
    }
    
    // 3. Location Filters (Item is kept if it matches AT LEAST ONE of the active location chips)
    items = items.filter(item => {
        const allowed = item.AllowedLocations || [];
        if (allowed.length === 0) return true; // Show items with empty locations always? Or keep them.
        return allowed.some(loc => state.itemsData.filterLocations.has(loc));
    });
    
    // 4. Override Status Toggle Filter
    if (state.itemsData.filterCustomOnly) {
        items = items.filter(item => item.isOverridden);
    }
    
    // 5. Spawning Disabled Toggle Filter
    if (state.itemsData.filterDisabledOnly) {
        items = items.filter(item => item.IsDisabledForSpawning);
    }
    
    // 6. Sorting Column
    const col = state.itemsData.sortColumn;
    const isAsc = state.itemsData.sortDirection === 'asc';
    
    items.sort((a, b) => {
        let valA = a[col];
        let valB = b[col];
        
        // Handle strings / numbers conversion
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        
        if (valA < valB) return isAsc ? -1 : 1;
        if (valA > valB) return isAsc ? 1 : -1;
        return 0;
    });
    
    return items;
}

// Helper to render pagination controls buttons
function renderPaginationControls(totalItems) {
    const container = document.getElementById('pagination-controls');
    container.innerHTML = '';
    
    const pageCount = Math.ceil(totalItems / state.itemsData.pageSize);
    if (pageCount <= 1) return;
    
    const curr = state.itemsData.currentPage;
    
    // Back Button
    const prevBtn = document.createElement('button');
    prevBtn.className = `pag-btn ${curr === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = '&lt;';
    prevBtn.onclick = () => {
        if (curr > 1) {
            state.itemsData.currentPage--;
            renderItemsTable();
        }
    };
    container.appendChild(prevBtn);
    
    // Page Numbers (Render max 5 around current)
    const range = 2;
    let start = Math.max(1, curr - range);
    let end = Math.min(pageCount, curr + range);
    
    if (curr <= range) {
        end = Math.min(pageCount, 1 + range * 2);
    }
    if (curr > pageCount - range) {
        start = Math.max(1, pageCount - range * 2);
    }
    
    if (start > 1) {
        const btn = document.createElement('button');
        btn.className = `pag-btn`;
        btn.textContent = '1';
        btn.onclick = () => {
            state.itemsData.currentPage = 1;
            renderItemsTable();
        };
        container.appendChild(btn);
        
        if (start > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'text-muted';
            ellipsis.style.padding = '0 4px';
            ellipsis.textContent = '...';
            container.appendChild(ellipsis);
        }
    }
    
    for (let p = start; p <= end; p++) {
        const btn = document.createElement('button');
        btn.className = `pag-btn ${p === curr ? 'active' : ''}`;
        btn.textContent = p;
        btn.onclick = () => {
            state.itemsData.currentPage = p;
            renderItemsTable();
        };
        container.appendChild(btn);
    }
    
    if (end < pageCount) {
        if (end < pageCount - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'text-muted';
            ellipsis.style.padding = '0 4px';
            ellipsis.textContent = '...';
            container.appendChild(ellipsis);
        }
        
        const btn = document.createElement('button');
        btn.className = `pag-btn`;
        btn.textContent = pageCount;
        btn.onclick = () => {
            state.itemsData.currentPage = pageCount;
            renderItemsTable();
        };
        container.appendChild(btn);
    }
    
    // Forward Button
    const nextBtn = document.createElement('button');
    nextBtn.className = `pag-btn ${curr === pageCount ? 'disabled' : ''}`;
    nextBtn.innerHTML = '&gt;';
    nextBtn.onclick = () => {
        if (curr < pageCount) {
            state.itemsData.currentPage++;
            renderItemsTable();
        }
    };
    container.appendChild(nextBtn);
}

// --- FILTER & PAGE SIZE CHANGE HANDLERS ---

let searchDebounceTimeout = null;
function onItemSearchChange() {
    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
        state.itemsData.searchQuery = document.getElementById('item-search-input').value;
        state.itemsData.currentPage = 1; // Reset to page 1
        renderItemsTable();
    }, 200); // 200ms debounce
}

function onItemFilterChange() {
    state.itemsData.filterGroup = document.getElementById('filter-cooldown-select').value;
    state.itemsData.filterCustomOnly = document.getElementById('filter-custom-only').checked;
    state.itemsData.filterDisabledOnly = document.getElementById('filter-disabled-only').checked;
    state.itemsData.currentPage = 1;
    renderItemsTable();
}

function toggleLocationFilter(element) {
    const locName = element.getAttribute('data-loc');
    const filterLocs = state.itemsData.filterLocations;
    
    if (filterLocs.has(locName)) {
        if (filterLocs.size === 1) {
            showToast('Фильтр локаций', 'Хотя бы одна локация должна оставаться активной!', 'warning');
            return;
        }
        filterLocs.delete(locName);
        element.classList.remove('active');
    } else {
        filterLocs.add(locName);
        element.classList.add('active');
    }
    
    state.itemsData.currentPage = 1;
    renderItemsTable();
}

function resetFilters() {
    document.getElementById('item-search-input').value = '';
    state.itemsData.searchQuery = '';
    
    document.getElementById('filter-cooldown-select').value = 'ALL';
    state.itemsData.filterGroup = 'ALL';
    
    document.getElementById('filter-custom-only').checked = false;
    state.itemsData.filterCustomOnly = false;
    
    document.getElementById('filter-disabled-only').checked = false;
    state.itemsData.filterDisabledOnly = false;
    
    state.itemsData.filterLocations = new Set(['Coastal', 'Continental', 'Mountain']);
    document.querySelectorAll('.loc-filter-chip').forEach(chip => chip.classList.add('active'));
    
    state.itemsData.currentPage = 1;
    renderItemsTable();
    showToast('Сброшено', 'Все поисковые фильтры возвращены в исходное состояние', 'success');
}

function onPageSizeChange() {
    state.itemsData.pageSize = parseInt(document.getElementById('pagination-size').value) || 25;
    state.itemsData.currentPage = 1;
    renderItemsTable();
}

function sortItems(column) {
    const currentSort = state.itemsData.sortColumn;
    const currentDir = state.itemsData.sortDirection;
    
    // Clear old header styling indicators
    document.querySelectorAll('.sort-indicator').forEach(ind => ind.className = 'sort-indicator');
    
    if (currentSort === column) {
        state.itemsData.sortDirection = currentDir === 'asc' ? 'desc' : 'asc';
    } else {
        state.itemsData.sortColumn = column;
        state.itemsData.sortDirection = 'asc';
    }
    
    // Add sorting indicator class
    const indicator = document.getElementById(`sort-${column}`);
    if (indicator) {
        indicator.className = `sort-indicator ${state.itemsData.sortDirection}`;
    }
    
    renderItemsTable();
}

// --- ITEM INLINE FIELDS CHANGERS ---

// Modifies single property of item
function updateItemField(originalIndex, field, value) {
    const item = state.itemsData.items[originalIndex];
    if (!item) return;
    
    // Update and automatically toggle overridden flag
    item[field] = value;
    item.isOverridden = true;
    
    state.itemsData.dirty = true;
    
    renderItemsTable();
    updateDirtyStateIndicator();
}

// Toggles locations array list
function toggleItemLocation(originalIndex, locationName) {
    const item = state.itemsData.items[originalIndex];
    if (!item) return;
    
    const locList = [...(item.AllowedLocations || [])];
    const idx = locList.indexOf(locationName);
    
    if (idx > -1) {
        // Remove
        locList.splice(idx, 1);
    } else {
        // Add
        locList.push(locationName);
    }
    
    updateItemField(originalIndex, 'AllowedLocations', locList);
}

// Add variation tags
function addItemVariationPrompt(originalIndex) {
    const item = state.itemsData.items[originalIndex];
    if (!item) return;
    
    const newVar = prompt(`Добавить ID вариации для предмета "${item.Id}":`).trim();
    if (!newVar) return;
    
    // Ensure variation ID doesn't already exist in item variations
    if ((item.Variations || []).includes(newVar)) {
        showToast('Дубликат', 'Эта вариация уже добавлена к предмету', 'warning');
        return;
    }
    
    const list = [...(item.Variations || []), newVar];
    updateItemField(originalIndex, 'Variations', list);
}

// Remove variation tag
function removeItemVariation(originalIndex, variationIndex) {
    const item = state.itemsData.items[originalIndex];
    if (!item) return;
    
    const list = [...(item.Variations || [])];
    list.splice(variationIndex, 1);
    
    updateItemField(originalIndex, 'Variations', list);
}

// Clicking override button on default items
function forceOverrideItem(originalIndex) {
    updateItemField(originalIndex, 'isOverridden', true);
    showToast('Переопределено', `Вы переопределили спавн предмета ${state.itemsData.items[originalIndex].Id}. Теперь вы можете сохранить свои настройки.`, 'success');
}

// Delete item override (reset back to system defaults)
function resetItemToDefault(itemId) {
    const originalItem = state.itemsData.originalItems.find(i => i.Id === itemId);
    const index = state.itemsData.items.findIndex(i => i.Id === itemId);
    
    if (index === -1) return;
    
    if (originalItem && originalItem.isNew) {
        // If it was newly created by user, remove it from list
        state.itemsData.items.splice(index, 1);
    } else {
        // Revert properties from default
        const defaultItem = state.itemsData.originalItems.find(i => i.Id === itemId && !i.isNew);
        state.itemsData.items[index] = JSON.parse(JSON.stringify(defaultItem));
        state.itemsData.items[index].isOverridden = false;
    }
    
    state.itemsData.dirty = true;
    renderItemsTable();
    updateDirtyStateIndicator();
    showToast('Сброшено', `Параметры спавна предмета ${itemId} сброшены к значениям по умолчанию`, 'success');
}

// MODAL - Override custom item
function openAddOverrideModal() {
    const select = document.getElementById('add-override-select');
    select.innerHTML = '';
    
    // Get list of default items that are not overridden yet
    const nonOverridden = state.itemsData.items.filter(item => !item.isOverridden);
    
    nonOverridden.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.Id;
        opt.textContent = item.Id;
        select.appendChild(opt);
    });
    
    document.getElementById('add-override-custom-id').value = '';
    document.getElementById('modal-add-override').classList.remove('hidden');
}

function submitAddItemOverride() {
    const selectId = document.getElementById('add-override-select').value;
    const customId = document.getElementById('add-override-custom-id').value.trim();
    
    const itemId = customId !== '' ? customId : selectId;
    
    if (!itemId) {
        showToast('Ошибка ID', 'Выберите предмет или введите ID вручную', 'error');
        return;
    }

    // Check if item is already in list and already overridden
    const existingIndex = state.itemsData.items.findIndex(i => i.Id === itemId);
    
    if (existingIndex > -1) {
        if (state.itemsData.items[existingIndex].isOverridden) {
            showToast('Уже кастомный', `Предмет с ID "${itemId}" уже переопределен в списке`, 'warning');
            closeModal('modal-add-override');
            return;
        } else {
            // Set overridden true for existing default item
            updateItemField(existingIndex, 'isOverridden', true);
            state.itemsData.currentPage = Math.ceil((existingIndex + 1) / state.itemsData.pageSize) || 1;
        }
    } else {
        // Create completely new custom item parameter config
        const newItem = {
            Id: itemId,
            IsDisabledForSpawning: false,
            AllowedLocations: ['Coastal', 'Continental', 'Mountain'],
            CooldownPerSquadMemberMin: 1.0,
            CooldownPerSquadMemberMax: 2.0,
            CooldownGroup: '',
            Variations: [],
            ShouldOverrideInitialAndRandomUsage: false,
            InitialUsageOverride: 0,
            RandomUsageOverrideUsage: 0,
            isOverridden: true,
            isNew: true
        };
        
        state.itemsData.items.push(newItem);
        state.itemsData.dirty = true;
        
        // Go to last page to see newly added custom item
        const pageCount = Math.ceil(state.itemsData.items.length / state.itemsData.pageSize);
        state.itemsData.currentPage = pageCount;
    }
    
    closeModal('modal-add-override');
    renderItemsTable();
    updateDirtyStateIndicator();
    showToast('Добавлен оверрайд', `Оверрайд спавна для "${itemId}" успешно добавлен`, 'success');
}

// --- UTILITIES: TOASTS REAL-TIME MANAGER ---

function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    toast.innerHTML = `
        <div class="toast-header">${title}</div>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Auto remove toast after 3.5 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3500);
}

// --- BULK OPERATIONS LOGIC ---

// Select/unselect all currently filtered items at once
function toggleSelectAllItems(masterCheckbox) {
    const filtered = getFilteredItems();
    if (masterCheckbox.checked) {
        filtered.forEach(item => state.itemsData.checkedItems.add(item.Id));
    } else {
        filtered.forEach(item => state.itemsData.checkedItems.delete(item.Id));
    }
    renderItemsTable();
}

// Toggle individual item checkbox selection
function toggleItemChecked(itemId, isChecked) {
    if (isChecked) {
        state.itemsData.checkedItems.add(itemId);
    } else {
        state.itemsData.checkedItems.delete(itemId);
        // Uncheck header select-all if any single row gets unchecked
        const selectAllCheckbox = document.getElementById('select-all-items');
        if (selectAllCheckbox) selectAllCheckbox.checked = false;
    }
}

// Clear all input fields inside the bulk editing card
function clearBulkFields() {
    document.getElementById('bulk-cooldown-group').value = 'KEEP';
    document.getElementById('bulk-disabled').value = 'KEEP';
    document.getElementById('bulk-locations').value = 'KEEP';
    document.getElementById('bulk-cooldown-min').value = '';
    document.getElementById('bulk-cooldown-max').value = '';
    document.getElementById('bulk-durability-override').value = 'KEEP';
    document.getElementById('bulk-initial-usage').value = '';
    document.getElementById('bulk-random-usage').value = '';
    
    showToast('Очищено', 'Поля групповых операций сброшены', 'info');
}

// Apply mass changes to items based on targeted scope
function applyBulkChanges() {
    const target = document.getElementById('bulk-target-select').value;
    let targetItems = [];
    
    if (target === 'FILTERED') {
        targetItems = getFilteredItems();
    } else {
        const checked = state.itemsData.checkedItems;
        targetItems = state.itemsData.items.filter(item => checked.has(item.Id));
    }
    
    if (targetItems.length === 0) {
        showToast('Групповые изменения', 'Нет выбранных предметов для редактирования!', 'warning');
        return;
    }
    
    // Read bulk parameters
    const cooldownGroup = document.getElementById('bulk-cooldown-group').value;
    const disabled = document.getElementById('bulk-disabled').value;
    const locations = document.getElementById('bulk-locations').value;
    const cooldownMinStr = document.getElementById('bulk-cooldown-min').value;
    const cooldownMaxStr = document.getElementById('bulk-cooldown-max').value;
    const durabilityOverride = document.getElementById('bulk-durability-override').value;
    const initialUsageStr = document.getElementById('bulk-initial-usage').value;
    const randomUsageStr = document.getElementById('bulk-random-usage').value;
    
    let changesCount = 0;
    
    // Loop through all items matching the target scope
    targetItems.forEach(item => {
        const idx = state.itemsData.items.findIndex(i => i.Id === item.Id);
        if (idx === -1) return;
        
        let changed = false;
        
        // 1. Cooldown Group
        if (cooldownGroup !== 'KEEP') {
            const val = cooldownGroup === 'NONE' ? '' : cooldownGroup;
            if (state.itemsData.items[idx].CooldownGroup !== val) {
                state.itemsData.items[idx].CooldownGroup = val;
                changed = true;
            }
        }
        
        // 2. Spawn Disabled status
        if (disabled !== 'KEEP') {
            const val = (disabled === 'TRUE');
            if (state.itemsData.items[idx].IsDisabledForSpawning !== val) {
                state.itemsData.items[idx].IsDisabledForSpawning = val;
                changed = true;
            }
        }
        
        // 3. Locations
        if (locations !== 'KEEP') {
            let val = [];
            if (locations === 'ALL') val = ['Coastal', 'Continental', 'Mountain'];
            else if (locations === 'COASTAL') val = ['Coastal'];
            else if (locations === 'CONTINENTAL') val = ['Continental'];
            else if (locations === 'MOUNTAIN') val = ['Mountain'];
            
            const existing = state.itemsData.items[idx].AllowedLocations;
            const hasSameLocations = existing.length === val.length && existing.every(l => val.includes(l));
            if (!hasSameLocations) {
                state.itemsData.items[idx].AllowedLocations = val;
                changed = true;
            }
        }
        
        // 4. Cooldown Min / Max (Squad member)
        if (cooldownMinStr !== '') {
            const val = parseFloat(cooldownMinStr) || 0;
            if (state.itemsData.items[idx].CooldownPerSquadMemberMin !== val) {
                state.itemsData.items[idx].CooldownPerSquadMemberMin = val;
                changed = true;
            }
        }
        if (cooldownMaxStr !== '') {
            const val = parseFloat(cooldownMaxStr) || 0;
            if (state.itemsData.items[idx].CooldownPerSquadMemberMax !== val) {
                state.itemsData.items[idx].CooldownPerSquadMemberMax = val;
                changed = true;
            }
        }
        
        // 5. Durability override
        if (durabilityOverride !== 'KEEP') {
            const val = (durabilityOverride === 'TRUE');
            if (state.itemsData.items[idx].ShouldOverrideInitialAndRandomUsage !== val) {
                state.itemsData.items[idx].ShouldOverrideInitialAndRandomUsage = val;
                changed = true;
            }
        }
        
        // 6. Durability values (Initial / Random)
        if (initialUsageStr !== '') {
            const val = parseInt(initialUsageStr) || 0;
            if (state.itemsData.items[idx].InitialUsageOverride !== val) {
                state.itemsData.items[idx].InitialUsageOverride = val;
                changed = true;
            }
        }
        if (randomUsageStr !== '') {
            const val = parseInt(randomUsageStr) || 0;
            if (state.itemsData.items[idx].RandomUsageOverrideUsage !== val) {
                state.itemsData.items[idx].RandomUsageOverrideUsage = val;
                changed = true;
            }
        }
        
        if (changed) {
            state.itemsData.items[idx].isOverridden = true;
            changesCount++;
        }
    });
    
    if (changesCount > 0) {
        state.itemsData.dirty = true;
        
        // Refresh items table and update headers count
        renderItemsTable();
        updateDirtyStateIndicator();
        
        showToast('Групповое изменение', `Параметры изменены для ${changesCount} предметов! Не забудьте сохранить изменения кнопкой "Сохранить всё".`, 'success');
    } else {
        showToast('Групповое изменение', 'Параметры не изменены. Выбранные предметы уже соответствуют указанным значениям.', 'info');
    }
}

// Toggle bulk operations card visibility (expansion/collapse)
function toggleBulkCard() {
    const body = document.getElementById('bulk-card-body');
    const btn = document.getElementById('btn-toggle-bulk');
    if (!body || !btn) return;
    
    const isHidden = body.classList.contains('hidden');
    if (isHidden) {
        body.classList.remove('hidden');
        btn.textContent = '[-] ' + _t('btn_collapse');
        btn.classList.add('btn-accent');
        btn.classList.remove('btn-secondary');
    } else {
        body.classList.add('hidden');
        btn.textContent = '[+] ' + _t('btn_expand');
        btn.classList.remove('btn-accent');
        btn.classList.add('btn-secondary');
    }
}

// Clear all active checkboxes and reset master select-all
function clearCheckedItems() {
    state.itemsData.checkedItems.clear();
    
    // Uncheck master checkbox if present
    const master = document.getElementById('select-all-items');
    if (master) master.checked = false;
    
    renderItemsTable();
    showToast('Выделение сброшено', 'Выделение предметов галочками успешно очищено', 'info');
}

// ==========================================================================
// TAB 3: NODES EDITOR LOGIC
// ==========================================================================

// Fetch available Default and Override Nodes files
async function fetchNodes() {
    const res = await fetch('/api/nodes');
    if (!res.ok) throw new Error('Failed to load nodes data');
    const data = await res.json();
    
    state.nodesData.defaultFiles = data.defaultFiles || [];
    state.nodesData.defaultNodeNames = data.defaultNodeNames || [];
    state.nodesData.defaultNodePaths = data.defaultNodePaths || [];
    state.nodesData.defaultTerminalNodePaths = data.defaultTerminalNodePaths || [];
    state.nodesData.overrideFiles = data.overrideFiles || {};
    
    const keys = Object.keys(state.nodesData.overrideFiles);
    if (keys.length > 0) {
        if (!state.nodesData.activeFile || !state.nodesData.overrideFiles[state.nodesData.activeFile]) {
            state.nodesData.activeFile = keys[0];
        }
        
        // Deep clone active file's tree
        state.nodesData.activeTree = JSON.parse(JSON.stringify(state.nodesData.overrideFiles[state.nodesData.activeFile]));
    } else {
        // Fallback placeholder root
        state.nodesData.activeFile = 'Mod_Nodes.json';
        state.nodesData.activeTree = { Name: "ItemLootTreeNodes", Children: [] };
        state.nodesData.overrideFiles['Mod_Nodes.json'] = JSON.parse(JSON.stringify(state.nodesData.activeTree));
    }
    
    state.nodesData.originalTreeJson = JSON.stringify(state.nodesData.activeTree);
    state.nodesData.dirty = false;
}

// Render the default nodes list inside Nodes tab sidebar
function renderDefaultNodesList(filteredPaths = null) {
    const listEl = document.getElementById('nodes-default-list');
    if (!listEl) return;
    
    listEl.innerHTML = '';
    
    // Sort paths alphabetically
    const paths = filteredPaths || state.nodesData.defaultNodePaths || [];
    
    if (paths.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'text-muted';
        emptyDiv.style.fontStyle = 'italic';
        emptyDiv.style.fontSize = '12px';
        emptyDiv.style.padding = '8px';
        emptyDiv.textContent = 'Совпадений не найдено';
        listEl.appendChild(emptyDiv);
        return;
    }
    
    const fragment = document.createDocumentFragment();
    paths.forEach(path => {
        const row = document.createElement('div');
        row.className = 'default-node-row';
        row.innerHTML = `
            <span class="node-path-text">${path}</span>
            <button class="btn btn-secondary btn-xs" onclick="copyToClipboard('${path}', this)" title="Скопировать строку" style="flex-shrink: 0; padding: 4px; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </button>
        `;
        fragment.appendChild(row);
    });
    listEl.appendChild(fragment);
}

// Filter the default nodes list based on the search query
function filterDefaultNodesList() {
    const searchVal = document.getElementById('nodes-default-search').value.trim().toLowerCase();
    const allPaths = state.nodesData.defaultNodePaths || [];
    
    if (!searchVal) {
        renderDefaultNodesList(allPaths);
        return;
    }
    
    const filtered = allPaths.filter(path => path.toLowerCase().includes(searchVal));
    renderDefaultNodesList(filtered);
}

// Toggle the default nodes sidebar open/closed with smooth transition
function toggleNodesSidebar() {
    const sidebar = document.querySelector('.nodes-default-sidebar');
    const toggleBtn = document.getElementById('btn-toggle-nodes-sidebar');
    if (!sidebar) return;
    
    const isCollapsed = sidebar.classList.toggle('collapsed');
    localStorage.setItem('nodes-sidebar-collapsed', isCollapsed ? 'true' : 'false');
    
    if (toggleBtn) {
        toggleBtn.classList.toggle('sidebar-hidden', isCollapsed);
    }
}

// Switch Nodes editor between visual tree and JSON textarea mode
function setNodesEditorMode(mode) {
    // Prevent switching to editor if JSON is invalid
    if (mode === 'editor' && state.nodesData.editorMode === 'json' && state.nodesData.jsonInvalid) {
        showToast('Ошибка переключения', 'Невозможно переключиться в редактор, пока JSON содержит синтаксические ошибки!', 'error');
        return;
    }
    
    state.nodesData.editorMode = mode;
    
    // Update toggle button styles
    const btnEditor = document.getElementById('btn-nodes-mode-editor');
    const btnJson = document.getElementById('btn-nodes-mode-json');
    if (btnEditor) btnEditor.classList.toggle('active', mode === 'editor');
    if (btnJson) btnJson.classList.toggle('active', mode === 'json');
    
    const treeCard = document.querySelector('.tree-editor-card');
    const noNodesMsg = document.getElementById('no-nodes-message');
    const jsonCard = document.getElementById('nodes-json-card');
    const jsonTextarea = document.getElementById('nodes-json-textarea');
    const jsonError = document.getElementById('nodes-json-error');
    const btnAddRoot = document.getElementById('btn-add-root-node');
    
    if (mode === 'json') {
        // Hide tree editor, show JSON card
        if (treeCard) treeCard.classList.add('hidden');
        if (noNodesMsg) noNodesMsg.classList.add('hidden');
        if (jsonCard) {
            jsonCard.classList.remove('hidden');
            jsonCard.style.display = 'flex';
        }
        
        // Hide add root button in JSON mode
        if (btnAddRoot) btnAddRoot.classList.add('hidden');
        
        // Populate textarea
        if (jsonTextarea && state.nodesData.activeTree) {
            jsonTextarea.value = JSON.stringify(state.nodesData.activeTree, null, 4);
        }
        
        // Set readonly in Default source mode
        if (jsonTextarea) {
            jsonTextarea.readOnly = (state.nodesData.sourceMode === 'default');
        }
        
        // Clear error indicators
        if (jsonError) jsonError.classList.add('hidden');
        if (jsonTextarea) {
            jsonTextarea.style.borderColor = '';
            jsonTextarea.style.boxShadow = '';
        }
        state.nodesData.jsonInvalid = false;
    } else {
        // Hide JSON card, show tree editor
        if (jsonCard) {
            jsonCard.classList.add('hidden');
            jsonCard.style.display = '';
        }
        if (treeCard) treeCard.classList.remove('hidden');
        
        // Show add root button (if not in Default mode)
        if (btnAddRoot && state.nodesData.sourceMode !== 'default') {
            btnAddRoot.classList.remove('hidden');
        }
        
        // Re-render tree from the (possibly updated) activeTree
        renderNodesTree();
    }
}

// Handle live JSON editing input in Nodes JSON textarea
function onNodesJsonTextareaInput() {
    const textarea = document.getElementById('nodes-json-textarea');
    const jsonError = document.getElementById('nodes-json-error');
    if (!textarea || !jsonError) return;
    
    const value = textarea.value;
    try {
        const parsed = JSON.parse(value);
        
        // JSON is valid
        jsonError.classList.add('hidden');
        textarea.style.borderColor = '';
        textarea.style.boxShadow = '';
        state.nodesData.jsonInvalid = false;
        
        // Update activeTree with parsed data
        state.nodesData.activeTree = parsed;
        
        // Check dirty status
        const currentJson = JSON.stringify(parsed);
        state.nodesData.dirty = (currentJson !== state.nodesData.originalTreeJson);
        updateDirtyStateIndicator();
    } catch (e) {
        // JSON is invalid
        jsonError.classList.remove('hidden');
        jsonError.textContent = `⚠️ Ошибка JSON: ${e.message}`;
        textarea.style.borderColor = 'var(--color-danger)';
        textarea.style.boxShadow = '0 0 10px rgba(255, 23, 68, 0.15)';
        state.nodesData.jsonInvalid = true;
        
        state.nodesData.dirty = true;
        updateDirtyStateIndicator();
    }
}

// Switch between Override (editable) and Default (read-only) source mode
async function setNodesSourceMode(mode) {
    if (mode === state.nodesData.sourceMode) return;
    
    // Warn if there are unsaved changes
    if (state.nodesData.sourceMode === 'override' && state.nodesData.dirty) {
        if (!confirm(_t('confirm_unsaved_changes_nodes'))) {
            return;
        }
    }
    
    state.nodesData.sourceMode = mode;
    
    // Reset editorMode to tree editor on source switch
    state.nodesData.editorMode = 'editor';
    state.nodesData.jsonInvalid = false;
    const btnEditor = document.getElementById('btn-nodes-mode-editor');
    const btnJson = document.getElementById('btn-nodes-mode-json');
    if (btnEditor) btnEditor.classList.toggle('active', true);
    if (btnJson) btnJson.classList.toggle('active', false);
    const jsonCard = document.getElementById('nodes-json-card');
    const treeCard = document.querySelector('.tree-editor-card');
    if (jsonCard) { jsonCard.classList.add('hidden'); jsonCard.style.display = ''; }
    if (treeCard) treeCard.classList.remove('hidden');
    
    // Update toggle button styles
    const btnOverride = document.getElementById('btn-nodes-src-override');
    const btnDefault = document.getElementById('btn-nodes-src-default');
    if (btnOverride) {
        btnOverride.classList.toggle('active', mode === 'override');
    }
    if (btnDefault) {
        btnDefault.classList.toggle('active', mode === 'default');
    }
    
    // Show/hide edit-only controls
    const btnCreate = document.getElementById('btn-create-node-file');
    const btnAddRoot = document.getElementById('btn-add-root-node');
    const btnSave = document.getElementById('btn-save-global');
    const heading = document.getElementById('nodes-tree-heading');
    
    if (mode === 'default') {
        if (btnCreate) btnCreate.classList.add('hidden');
        if (btnAddRoot) btnAddRoot.classList.add('hidden');
        if (heading) heading.textContent = _t('nodes_tree_heading_readonly');
    } else {
        if (btnCreate) btnCreate.classList.remove('hidden');
        if (btnAddRoot) btnAddRoot.classList.remove('hidden');
        if (heading) heading.textContent = _t('nodes_tree_heading_editable');
    }
    
    // Repopulate file select for the new source
    populateNodesFileSelect();
    
    // Load the first file content
    const select = document.getElementById('nodes-file-select');
    if (select && select.options.length > 0) {
        state.nodesData.activeFile = select.value;
        await loadActiveNodeFile();
    } else {
        state.nodesData.activeTree = null;
        state.nodesData.dirty = false;
        renderNodesTree();
    }
    
    updateDirtyStateIndicator();
}

// Load a single node file based on current sourceMode
async function loadActiveNodeFile() {
    const file = state.nodesData.activeFile;
    if (!file) return;
    
    if (state.nodesData.sourceMode === 'override') {
        state.nodesData.activeTree = JSON.parse(JSON.stringify(
            state.nodesData.overrideFiles[file] || { Name: 'ItemLootTreeNodes', Children: [] }
        ));
        state.nodesData.originalTreeJson = JSON.stringify(state.nodesData.activeTree);
        state.nodesData.dirty = false;
    } else {
        // Fetch from the new default-detail API
        try {
            const res = await fetch(`/api/nodes/default-detail?fileName=${encodeURIComponent(file)}`);
            if (!res.ok) throw new Error('Failed to load default node file');
            const data = await res.json();
            state.nodesData.activeTree = data;
            state.nodesData.originalTreeJson = JSON.stringify(data);
            state.nodesData.dirty = false;
        } catch (err) {
            showToast('Ошибка загрузки', `Не удалось загрузить файл ${file}: ${err.message}`, 'error');
            state.nodesData.activeTree = null;
        }
    }
    
    renderNodesTree();
    updateDirtyStateIndicator();
}

// Copy text to clipboard and show visual success feedback inside the button
async function copyToClipboard(text, btn) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Успех', 'Строка пути скопирована в буфер обмена', 'success');
        
        if (btn) {
            const origHtml = btn.innerHTML;
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2.5" width="12" height="12"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            btn.style.borderColor = 'var(--color-success)';
            btn.style.backgroundColor = 'rgba(0, 230, 118, 0.05)';
            
            setTimeout(() => {
                btn.innerHTML = origHtml;
                btn.style.borderColor = '';
                btn.style.backgroundColor = '';
            }, 1500);
        }
    } catch (err) {
        showToast('Ошибка', 'Не удалось скопировать', 'error');
    }
}

// Populate the Nodes active file dropdown select
function populateNodesFileSelect() {
    const select = document.getElementById('nodes-file-select');
    if (!select) return;
    
    select.innerHTML = '';
    
    let filesList;
    if (state.nodesData.sourceMode === 'default') {
        filesList = (state.nodesData.defaultFiles || []).slice().sort();
    } else {
        filesList = Object.keys(state.nodesData.overrideFiles).sort();
    }
    
    filesList.forEach(file => {
        const option = document.createElement('option');
        option.value = file;
        option.textContent = file;
        select.appendChild(option);
    });
    
    // Ensure activeFile points to a valid entry
    if (filesList.length > 0) {
        if (!filesList.includes(state.nodesData.activeFile)) {
            state.nodesData.activeFile = filesList[0];
        }
        select.value = state.nodesData.activeFile;
    }
}

// Triggered when switching Nodes files
async function onNodesFileChange() {
    const select = document.getElementById('nodes-file-select');
    if (!select) return;
    
    const file = select.value;
    if (state.nodesData.sourceMode === 'override' && state.nodesData.dirty) {
        if (!confirm(_t('confirm_unsaved_changes_nodes'))) {
            select.value = state.nodesData.activeFile;
            return;
        }
    }
    
    state.nodesData.activeFile = file;
    await loadActiveNodeFile();
    showToast('Файл загружен', `Дерево из файла ${file} успешно загружено`, 'success');
}

// Populate datalist with item IDs for fast node naming autocomplete
function populateItemsDatalist() {
    const datalist = document.getElementById('items-datalist');
    if (!datalist) return;
    
    datalist.innerHTML = '';
    const uniqueIds = new Set();
    
    // Collect unique item IDs from our main items list
    state.itemsData.items.forEach(item => {
        if (item && item.Id) {
            uniqueIds.add(item.Id);
        }
    });
    
    const sortedIds = Array.from(uniqueIds).sort();
    sortedIds.forEach(id => {
        const option = document.createElement('option');
        option.value = id;
        datalist.appendChild(option);
    });
}

// Open modal for creating new override Nodes files
function openCreateNodeFileModal() {
    const modal = document.getElementById('modal-create-node-file');
    if (!modal) return;
    
    document.getElementById('new-node-file-name').value = '';
    
    const templateSelect = document.getElementById('new-node-template-select');
    if (templateSelect) {
        templateSelect.innerHTML = '<option value="">-- Пустой файл (ItemLootTreeNodes) --</option>';
        state.nodesData.defaultFiles.forEach(file => {
            const option = document.createElement('option');
            option.value = file;
            option.textContent = file;
            templateSelect.appendChild(option);
        });
    }
    
    modal.classList.remove('hidden');
}

// Submit and create new Nodes override file
async function submitCreateNodeFile() {
    let fileName = document.getElementById('new-node-file-name').value.trim();
    const templateName = document.getElementById('new-node-template-select').value;
    
    if (!fileName) {
        showToast('Ошибка ввода', 'Имя файла не может быть пустым', 'error');
        return;
    }
    
    if (!fileName.endsWith('.json')) {
        fileName += '.json';
    }
    
    try {
        const res = await fetch('/api/nodes/create-from-template', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileName, templateName })
        });
        
        if (!res.ok) throw new Error('Failed to create file from template');
        
        showToast('Файл создан', `Файл ${fileName} успешно создан в папке Override`, 'success');
        closeModal('modal-create-node-file');
        
        // Reload nodes data
        await fetchNodes();
        state.nodesData.activeFile = fileName;
        state.nodesData.activeTree = JSON.parse(JSON.stringify(state.nodesData.overrideFiles[fileName]));
        state.nodesData.originalTreeJson = JSON.stringify(state.nodesData.activeTree);
        state.nodesData.dirty = false;
        
        populateNodesFileSelect();
        renderNodesTree();
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка создания файла', err.message, 'error');
        console.error(err);
    }
}

// Render the recursive tree editor UI
function renderNodesTree() {
    const wrapper = document.getElementById('nodes-tree-wrapper');
    const noNodes = document.getElementById('no-nodes-message');
    if (!wrapper || !noNodes) return;
    
    wrapper.innerHTML = '';
    
    const tree = state.nodesData.activeTree;
    if (!tree || !tree.Children || tree.Children.length === 0) {
        wrapper.classList.add('hidden');
        noNodes.classList.remove('hidden');
        return;
    }
    
    wrapper.classList.remove('hidden');
    noNodes.classList.add('hidden');
    
    // Renders nodes recursively. Each index represents hierarchy path, e.g. [0, 2, 1]
    const rootFragment = document.createDocumentFragment();
    tree.Children.forEach((childNode, index) => {
        rootFragment.appendChild(renderNodeElement(childNode, [index]));
    });
    
    wrapper.appendChild(rootFragment);
}

// Recursive helper to render individual node element and all its children
function renderNodeElement(node, path) {
    const hasChildren = node.Children && Array.isArray(node.Children) && node.Children.length > 0;
    const pathStr = path.join(',');
    
    const nodeEl = document.createElement('div');
    nodeEl.className = 'tree-node';
    
    // Build row layout
    const rowEl = document.createElement('div');
    const isReadOnly = state.nodesData.sourceMode === 'default';
    rowEl.className = `tree-node-row ${hasChildren ? 'is-parent' : 'is-leaf'}${isReadOnly ? ' readonly' : ''}`;
    
    // 1. Collapse toggle and Icon (folder/file)
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'tree-node-icon';
    
    if (hasChildren) {
        // Toggle arrow button
        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'tree-node-toggle';
        toggleBtn.innerHTML = node.collapsed ? '▶' : '▼';
        toggleBtn.style.marginRight = '8px';
        toggleBtn.onclick = () => toggleNodeCollapse(pathStr);
        rowEl.appendChild(toggleBtn);
        
        // Folder icon SVG
        iconWrapper.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
        `;
        iconWrapper.classList.add('clickable');
        iconWrapper.onclick = () => toggleNodeCollapse(pathStr);
    } else {
        // Empty spacer to align with the toggle arrow
        const toggleSpacer = document.createElement('span');
        toggleSpacer.style.width = '24px';
        toggleSpacer.style.display = 'inline-block';
        rowEl.appendChild(toggleSpacer);
        
        // File/item icon Image with fallback support
        iconWrapper.innerHTML = `
            <img src="images/${node.Name}.webp" onerror="if(this.src.endsWith('.webp')){this.src=this.src.slice(0,-5)+'.png';}else{this.src='images/unknown.webp';}" class="item-mini-icon" style="width: 24px; height: 24px;">
        `;
    }
    rowEl.appendChild(iconWrapper);
    
    // 2. Form controls
    const inputsEl = document.createElement('div');
    inputsEl.className = 'tree-node-inputs';
    
    // Check if this item is currently disabled in spawn override config
    const isItemDisabled = !hasChildren && state.itemsData.items.some(item => 
        item && item.Id === node.Name && item.IsDisabledForSpawning === true
    );
    if (isItemDisabled) {
        rowEl.classList.add('disabled-spawn');
    }
    
    // 2a. Name Input with autocomplete & dedicated visual picker button
    const nameWrapper = document.createElement('div');
    nameWrapper.className = 'tree-node-name-wrapper';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'tree-node-input-name';
    nameInput.value = node.Name || '';
    nameInput.setAttribute('list', 'items-datalist');
    nameInput.placeholder = _t('placeholder_node_name');
    nameInput.oninput = (e) => onNodeNameInput(e.target, pathStr);
    nameInput.onchange = (e) => onNodeNameInput(e.target, pathStr);
    nameWrapper.appendChild(nameInput);
    
    // Add visual search picker button inside input box ONLY if it is an item (not a group) AND not in read-only mode
    if (!hasChildren && !isReadOnly) {
        const searchPickerBtn = document.createElement('button');
        searchPickerBtn.className = 'btn-select-item-search';
        searchPickerBtn.type = 'button';
        searchPickerBtn.title = _t('tooltip_select_item_list');
        searchPickerBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="pointer-events: none;">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        `;
        searchPickerBtn.onclick = () => openSelectItemModal(pathStr);
        nameWrapper.appendChild(searchPickerBtn);
    }
    
    inputsEl.appendChild(nameWrapper);
    
    // Add visual verification status badge
    const statusBadge = getStatusBadge(node, hasChildren);
    inputsEl.appendChild(statusBadge);
    
    // Add visual "Spawn Disabled" warning badge if it's disabled in parameters
    if (isItemDisabled) {
        const disabledBadge = document.createElement('span');
        disabledBadge.className = 'disabled-spawn-badge';
        disabledBadge.textContent = _t('spawn_disabled_badge');
        disabledBadge.title = _t('tooltip_spawn_disabled');
        inputsEl.appendChild(disabledBadge);
    }
    
    // 2b. Rarity Select
    const rarityWrapper = document.createElement('div');
    rarityWrapper.className = 'select-wrapper tree-node-select-rarity';
    const raritySelect = document.createElement('select');
    raritySelect.className = `rarity-${node.Rarity || 'Common'}`;
    
    const rarities = [
        { value: '', label: state.lang === 'ru' ? '(Не задано)' : '(Not set)' },
        { value: 'Abundant', label: state.lang === 'ru' ? 'Abundant (Обильно)' : 'Abundant' },
        { value: 'Common', label: state.lang === 'ru' ? 'Common (Обычный)' : 'Common' },
        { value: 'Uncommon', label: state.lang === 'ru' ? 'Uncommon (Необычный)' : 'Uncommon' },
        { value: 'Rare', label: state.lang === 'ru' ? 'Rare (Редкий)' : 'Rare' },
        { value: 'VeryRare', label: state.lang === 'ru' ? 'VeryRare (Очень редкий)' : 'VeryRare' },
        { value: 'ExtremelyRare', label: state.lang === 'ru' ? 'ExtremelyRare (Крайне редкий)' : 'ExtremelyRare' }
    ];
    
    rarities.forEach(rar => {
        const option = document.createElement('option');
        option.value = rar.value;
        option.textContent = rar.label;
        option.className = `rarity-${rar.value || 'Common'}`;
        if (node.Rarity === rar.value) {
            option.selected = true;
        }
        raritySelect.appendChild(option);
    });
    
    raritySelect.onchange = (e) => onNodeRarityChange(e.target, pathStr);
    rarityWrapper.appendChild(raritySelect);
    inputsEl.appendChild(rarityWrapper);
    
    // 2c. Merge Mode Select
    const mergeWrapper = document.createElement('div');
    mergeWrapper.className = 'select-wrapper tree-node-select-merge';
    const mergeSelect = document.createElement('select');
    
    const mergeModes = [
        { value: '', label: state.lang === 'ru' ? '(Слияние не задано)' : '(Merge not set)' },
        { value: 'Replace', label: state.lang === 'ru' ? 'Replace (Замена)' : 'Replace' },
        { value: 'Append', label: state.lang === 'ru' ? 'Append (Добавить)' : 'Append' }
    ];
    
    mergeModes.forEach(m => {
        const option = document.createElement('option');
        option.value = m.value;
        option.textContent = m.label;
        if (node.ChildrenMergeMode === m.value) {
            option.selected = true;
        }
        mergeSelect.appendChild(option);
    });
    
    mergeSelect.onchange = (e) => onNodeMergeModeChange(e.target, pathStr);
    mergeWrapper.appendChild(mergeSelect);
    inputsEl.appendChild(mergeWrapper);
    
    rowEl.appendChild(inputsEl);
    
    // 3. Actions (Add child, Copy & Delete node) — omitted in read-only mode
    if (!isReadOnly) {
        const actionsEl = document.createElement('div');
        actionsEl.className = 'tree-node-actions';
        
        // 3a. Add child
        const btnAdd = document.createElement('button');
        btnAdd.className = 'btn btn-secondary btn-xs';
        btnAdd.title = _t('tooltip_add_child');
        btnAdd.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="pointer-events: none;">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        `;
        btnAdd.onclick = () => onNodeAddChild(pathStr);
        actionsEl.appendChild(btnAdd);
        
        // 3b. Copy / Duplicate
        const btnCopy = document.createElement('button');
        btnCopy.className = 'btn btn-secondary btn-xs';
        btnCopy.title = _t('tooltip_copy_node');
        btnCopy.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="pointer-events: none;">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        `;
        btnCopy.onclick = () => onNodeCopy(pathStr);
        actionsEl.appendChild(btnCopy);
        
        // 3c. Delete
        const btnDel = document.createElement('button');
        btnDel.className = 'btn btn-danger btn-xs';
        btnDel.title = _t('tooltip_delete_node');
        btnDel.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="pointer-events: none;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
        btnDel.onclick = () => onNodeDelete(pathStr);
        actionsEl.appendChild(btnDel);
        rowEl.appendChild(actionsEl);
    }
    
    // 4. Copy path button — available in ALL modes (override & default)
    const btnCopyPath = document.createElement('button');
    btnCopyPath.className = 'btn btn-secondary btn-xs btn-copy-node-path';
    btnCopyPath.title = _t('tooltip_copy_path');
    btnCopyPath.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="pointer-events: none;">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
    `;
    btnCopyPath.onclick = () => {
        const fullPath = buildNodeDotPath(path);
        copyToClipboard(fullPath, btnCopyPath);
    };
    rowEl.appendChild(btnCopyPath);
    nodeEl.appendChild(rowEl);
    
    // Renders child nodes recursively if they exist and are not collapsed
    if (hasChildren && !node.collapsed) {
        const childrenEl = document.createElement('div');
        childrenEl.className = 'tree-node-children';
        
        node.Children.forEach((childNode, index) => {
            childrenEl.appendChild(renderNodeElement(childNode, [...path, index]));
        });
        nodeEl.appendChild(childrenEl);
    }
    
    return nodeEl;
}

// Build a dotted path string from path indices: e.g. "ItemLootTreeNodes.Bar.Drinks.Alcoholic"
function buildNodeDotPath(pathIndices) {
    const tree = state.nodesData.activeTree;
    if (!tree) return '';
    
    const segments = [tree.Name || 'ItemLootTreeNodes'];
    let current = tree;
    
    for (const idx of pathIndices) {
        if (!current || !current.Children || !current.Children[idx]) break;
        current = current.Children[idx];
        segments.push(current.Name || '');
    }
    
    return segments.join('.');
}

// Tree node helper navigation functions
function getNodeByPath(indices) {
    let current = state.nodesData.activeTree;
    for (const idx of indices) {
        if (!current || !current.Children) return null;
        current = current.Children[idx];
    }
    return current;
}

function deleteNodeByPath(indices) {
    if (indices.length === 0) return;
    const parentIndices = indices.slice(0, -1);
    const lastIndex = indices[indices.length - 1];
    
    let parent = state.nodesData.activeTree;
    for (const idx of parentIndices) {
        if (!parent || !parent.Children) return;
        parent = parent.Children[idx];
    }
    
    if (parent && parent.Children) {
        parent.Children.splice(lastIndex, 1);
    }
}

// Check if tree data has been modified compared to original snapshot
function checkNodesDirty() {
    const currentJson = JSON.stringify(state.nodesData.activeTree);
    state.nodesData.dirty = (currentJson !== state.nodesData.originalTreeJson);
    updateDirtyStateIndicator();
}

// Input Handlers
function onNodeNameInput(el, pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.Name = el.value;
        
        // Dynamically update the mini icon next to it in real-time
        const rowEl = el.closest('.tree-node-row');
        if (rowEl) {
            const img = rowEl.querySelector('.item-mini-icon');
            if (img) {
                img.src = `images/${el.value}.webp`;
            }
        }
        
        checkNodesDirty();
    }
}

function onNodeRarityChange(el, pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.Rarity = el.value || undefined;
        
        // Remove existing rarity styling and apply new one
        el.className = `rarity-${el.value || 'Common'}`;
        
        checkNodesDirty();
    }
}

// Handle merge mode change
function onNodeMergeModeChange(el, pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.ChildrenMergeMode = el.value || undefined;
        checkNodesDirty();
    }
}

// Structural modifications
function onNodeAddChild(pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.Children = node.Children || [];
        node.Children.push({
            Name: 'New_Node',
            Rarity: 'Common'
        });
        
        renderNodesTree();
        checkNodesDirty();
        showToast('Поднода добавлена', 'Ветвь структуры успешно расширена новым элементом', 'success');
    }
}

function onNodeDelete(pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    const nodeName = node ? node.Name || 'без имени' : '';
    
    const confirmMsg = _t('confirm_delete_node').replace('{nodeName}', nodeName);
    if (confirm(confirmMsg)) {
        deleteNodeByPath(indices);
        renderNodesTree();
        checkNodesDirty();
        showToast('Ветвь удалена', 'Элемент дерева успешно удален', 'warning');
    }
}

// Copy/duplicate nodes or sections recursively
function onNodeCopy(pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        // Deep clone the node and all of its children recursively
        const clonedNode = JSON.parse(JSON.stringify(node));
        
        // Find the parent array and insert the clone right after the original
        const parentIndices = indices.slice(0, -1);
        const lastIndex = indices[indices.length - 1];
        
        let parent = state.nodesData.activeTree;
        for (const idx of parentIndices) {
            if (!parent || !parent.Children) return;
            parent = parent.Children[idx];
        }
        
        if (parent && parent.Children) {
            parent.Children.splice(lastIndex + 1, 0, clonedNode);
            
            renderNodesTree();
            checkNodesDirty();
            showToast('Скопировано', `Элемент "${node.Name || 'без имени'}" успешно скопирован`, 'success');
        }
    }
}

// Add top-level root node to activeTree.Children
function addRootNode() {
    if (state.nodesData.sourceMode === 'default') return;
    const tree = state.nodesData.activeTree;
    if (!tree) return;
    
    tree.Children = tree.Children || [];
    tree.Children.push({
        Name: 'New_Root_Group',
        Rarity: 'Common'
    });
    
    renderNodesTree();
    checkNodesDirty();
    showToast('Корневая нода добавлена', 'Создан новый корневой элемент дерева', 'success');
}

// Save active Node tree structure back to the server
async function saveNodes() {
    // Prevent saving in read-only Default mode
    if (state.nodesData.sourceMode === 'default') {
        showToast('Только чтение', 'Системные файлы Default не подлежат редактированию и сохранению', 'warning');
        return;
    }
    
    // Prevent saving if JSON is currently invalid
    if (state.nodesData.jsonInvalid) {
        showToast('Ошибка сохранения', 'JSON содержит синтаксические ошибки. Исправьте JSON перед сохранением.', 'error');
        return;
    }
    
    const file = state.nodesData.activeFile;
    const treeData = state.nodesData.activeTree;
    
    if (!file || !treeData) return;
    
    // Basic root sanity checks
    if (!treeData.Name || treeData.Name.trim() === '') {
        showToast('Ошибка валидации', 'Корень дерева (Name) не может быть пустым', 'error');
        return;
    }
    
    try {
        const response = await fetch('/api/nodes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName: file,
                data: treeData
            })
        });
        
        if (!response.ok) throw new Error('Server error saving nodes tree data');
        
        state.nodesData.originalTreeJson = JSON.stringify(treeData);
        state.nodesData.dirty = false;
        
        // Sync the in-memory overrideFiles list
        state.nodesData.overrideFiles[file] = JSON.parse(JSON.stringify(treeData));
        
        updateDirtyStateIndicator();
        showToast('Успех', `Дерево Nodes успешно сохранено в Override/${file}`, 'success');
    } catch (err) {
        showToast('Ошибка сохранения', err.message, 'error');
        console.error(err);
    }
}

// Toggle collapsible state of a node in the tree
function toggleNodeCollapse(pathStr) {
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.collapsed = !node.collapsed;
        renderNodesTree();
    }
}

// Open select item modal for a specific node path
function openSelectItemModal(pathStr) {
    state.nodesData.activeSelectNodePath = pathStr;
    const modal = document.getElementById('modal-select-node-item');
    if (!modal) return;
    
    // Clear search box and list
    document.getElementById('select-node-item-search').value = '';
    onSelectNodeItemSearch(); // Populate initially with some items
    
    modal.classList.remove('hidden');
}

// Collect and return sorted unique Node names from default and override Node files
function getUniqueNodeNames() {
    const names = new Set(state.nodesData.defaultNodeNames || []);
    
    // Also scan override files
    if (state.nodesData.overrideFiles) {
        Object.values(state.nodesData.overrideFiles).forEach(tree => {
            const collectNames = (node) => {
                if (node && node.Name) {
                    names.add(node.Name);
                }
                if (node && node.Children && Array.isArray(node.Children)) {
                    node.Children.forEach(collectNames);
                }
            };
            collectNames(tree);
        });
    }
    
    return Array.from(names).sort();
}

// Collect and return sorted unique Node paths (e.g., ItemLootTreeNodes.Police.Clothes)
// from default node paths and override Node files
function getUniqueNodePaths() {
    const paths = new Set(state.nodesData.defaultNodePaths || []);
    
    // Also scan override files
    if (state.nodesData.overrideFiles) {
        Object.values(state.nodesData.overrideFiles).forEach(tree => {
            const collectPaths = (node, currentPath = '') => {
                if (node && node.Name) {
                    const nodePath = currentPath ? `${currentPath}.${node.Name}` : node.Name;
                    if (node.Children && Array.isArray(node.Children) && node.Children.length > 0) {
                        paths.add(nodePath);
                    }
                    if (node.Children && Array.isArray(node.Children)) {
                        node.Children.forEach(child => collectPaths(child, nodePath));
                    }
                }
            };
            collectPaths(tree);
        });
    }
    
    return Array.from(paths).sort();
}

// Classify node path into 'node' (non-terminal node) or 'item' (terminal node/item ID)
function classifyNodePath(pathStr) {
    if (!pathStr) return 'item';
    
    const lowerPath = pathStr.toLowerCase().trim();
    
    // 1. Check in override files
    if (state.nodesData.overrideFiles) {
        let foundNode = null;
        for (const tree of Object.values(state.nodesData.overrideFiles)) {
            const findNodeByPath = (node, currentPath = '') => {
                if (!node || !node.Name) return null;
                const nodePath = currentPath ? `${currentPath}.${node.Name}` : node.Name;
                if (nodePath.toLowerCase() === lowerPath) {
                    return node;
                }
                if (node.Children && Array.isArray(node.Children)) {
                    for (const child of node.Children) {
                        const res = findNodeByPath(child, nodePath);
                        if (res) return res;
                    }
                }
                return null;
            };
            
            foundNode = findNodeByPath(tree);
            if (foundNode) {
                if (foundNode.Children && Array.isArray(foundNode.Children) && foundNode.Children.length > 0) {
                    const hasSubGroups = foundNode.Children.some(child => child.Children && Array.isArray(child.Children) && child.Children.length > 0);
                    return hasSubGroups ? 'node' : 'item';
                }
                return 'item';
            }
        }
    }
    
    // 2. Check in default terminal node paths
    const defaultTerminals = state.nodesData.defaultTerminalNodePaths || [];
    const isDefaultTerminal = defaultTerminals.some(p => p.toLowerCase() === lowerPath);
    if (isDefaultTerminal) {
        return 'item';
    }
    
    // 3. Check in default node paths
    const defaultPaths = state.nodesData.defaultNodePaths || [];
    const isDefaultPath = defaultPaths.some(p => p.toLowerCase() === lowerPath);
    if (isDefaultPath) {
        return 'node';
    }
    
    // 4. Fallback: if it starts with "ItemLootTreeNodes.", treat it as a Node unless specified otherwise
    if (lowerPath.startsWith('itemloottreenodes.')) {
        return 'node';
    }
    
    return 'item';
}

// Handle real-time filtering in the items search picker modal
function onSelectNodeItemSearch() {
    const searchVal = document.getElementById('select-node-item-search').value.toLowerCase().trim();
    const container = document.getElementById('select-node-item-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Check if we are selecting a Node name in Spawners presets editor
    const isSelectingNode = (state.activeTab === 'spawners' && state.spawnersData.activeSelectItemContext?.type === 'Nodes');
    
    if (isSelectingNode) {
        const nodePaths = getUniqueNodePaths();
        const filtered = nodePaths.filter(pathName => pathName.toLowerCase().includes(searchVal));
        const limit = filtered.slice(0, 100);
        
        if (limit.length === 0) {
            container.innerHTML = `<div style="padding: 20px; text-align: center;" class="text-muted">${state.lang === 'ru' ? 'Ничего не найдено' : 'Nothing found'}</div>`;
            return;
        }
        
        limit.forEach(name => {
            const row = document.createElement('div');
            row.className = 'select-item-row';
            row.onclick = () => selectNodeItem(name);
            
            row.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px; overflow: hidden; margin-right: 12px;">
                    <div class="item-mini-icon" style="width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; background: rgba(0, 230, 118, 0.05); border-color: rgba(0, 230, 118, 0.2); flex-shrink: 0; padding: 0;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2" width="12" height="12" style="display: block;">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <span class="select-item-row-id" style="color: var(--color-success); word-break: break-all;">${name}</span>
                </div>
                <span class="select-item-row-meta" style="background-color: rgba(0, 230, 118, 0.05); color: var(--color-success); border-color: rgba(0, 230, 118, 0.2); font-size: 10px; font-weight: 600; flex-shrink: 0;">${state.lang === 'ru' ? 'Нода (Node)' : 'Node'}</span>
            `;
            container.appendChild(row);
        });
        return;
    }
    
    // Otherwise filter matching items
    const filtered = state.itemsData.items.filter(item => {
        if (!item || !item.Id) return false;
        return item.Id.toLowerCase().includes(searchVal);
    });
    
    // Slice to top 100 for great performance
    const limit = filtered.slice(0, 100);
    
    if (limit.length === 0) {
        container.innerHTML = `<div style="padding: 20px; text-align: center;" class="text-muted">${state.lang === 'ru' ? 'Ничего не найдено' : 'Nothing found'}</div>`;
        return;
    }
    
    limit.forEach(item => {
        const row = document.createElement('div');
        row.className = 'select-item-row';
        row.onclick = () => selectNodeItem(item.Id);
        
        row.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; overflow: hidden; margin-right: 12px;">
                <img src="images/${item.Id}.webp" onerror="if(this.src.endsWith('.webp')){this.src=this.src.slice(0,-5)+'.png';}else{this.src='images/unknown.webp';}" class="item-mini-icon" style="width: 24px; height: 24px;">
                <span class="select-item-row-id" style="word-break: break-all;">${item.Id}</span>
            </div>
            <span class="select-item-row-meta" style="flex-shrink: 0;">${item.CooldownGroup || _t('no_group')}</span>
        `;
        container.appendChild(row);
    });
}

// Sets the selected item ID as node Name and closes the modal
function selectNodeItem(itemId) {
    if (state.activeTab === 'spawners') {
        selectSpawnerItemFromDb(itemId);
        return;
    }
    const pathStr = state.nodesData.activeSelectNodePath;
    if (!pathStr) return;
    
    const indices = pathStr.split(',').map(Number);
    const node = getNodeByPath(indices);
    if (node) {
        node.Name = itemId;
        
        // Re-render tree
        renderNodesTree();
        checkNodesDirty();
        
        showToast('Предмет выбран', `ID предмета изменен на "${itemId}"`, 'success');
        closeModal('modal-select-node-item');
    }
}

// Generate safety status badge indicating node targets (system match vs new branch)
function getStatusBadge(node, hasChildren) {
    const isSystemNode = state.nodesData.defaultNodeNames.includes(node.Name);
    const badge = document.createElement('span');
    badge.className = 'node-status-badge';
    
    if (hasChildren) {
        if (isSystemNode) {
            if (node.ChildrenMergeMode === 'Replace') {
                badge.className += ' status-replace';
                badge.textContent = state.lang === 'ru' ? 'ЗАМЕНА (Replace)' : 'Replace';
                badge.title = state.lang === 'ru' ? 'Эта группа совпадает с системной и полностью ЗАМЕНИТ её содержимое в игре' : 'This group matches default system group and will completely REPLACE its children';
            } else if (node.ChildrenMergeMode === 'Append') {
                badge.className += ' status-append';
                badge.textContent = state.lang === 'ru' ? 'ДОБАВЛЕНИЕ (Append)' : 'Append';
                badge.title = state.lang === 'ru' ? 'Эта группа совпадает с системной и ДОБАВИТ новых детей в её конец в игре' : 'This group matches default system group and will APPEND new children to its end';
            } else {
                badge.className += ' status-system';
                badge.textContent = state.lang === 'ru' ? 'СИСТЕМА (System)' : 'System';
                badge.title = state.lang === 'ru' ? 'Системная папка по умолчанию (без указания слияния)' : 'Default system folder (no merge specified)';
            }
        } else {
            badge.className += ' status-add';
            badge.textContent = state.lang === 'ru' ? 'НОВАЯ ГРУППА (Add)' : 'Add Group';
            badge.title = state.lang === 'ru' ? 'Новая пользовательская группа спавна' : 'New custom spawn group';
        }
    } else {
        if (isSystemNode) {
            badge.className += ' status-default-item';
            badge.textContent = state.lang === 'ru' ? 'ПРЕДМЕТ' : 'ITEM';
            badge.title = state.lang === 'ru' ? 'Оригинальный предмет из базы данных по умолчанию' : 'Original default database item';
        } else {
            badge.className += ' status-custom-item';
            badge.textContent = state.lang === 'ru' ? 'НОВЫЙ ПРЕДМЕТ' : 'NEW ITEM';
            badge.title = state.lang === 'ru' ? 'Новый пользовательский предмет' : 'New custom item';
        }
    }
    
    return badge;
}

// ==========================================================================
// TAB 4: SPAWNERS PRESETS EDITOR CLIENT LOGIC
// ==========================================================================

const GENERAL_FIELDS_METADATA = {
    Probability: { type: 'number', min: 0, max: 100, def: 100, labelRu: 'Вероятность спавна (%)', labelEn: 'Probability', descRu: 'Шанс того, что лут заспавнится в этой точке.', descEn: 'Chance that the loot will spawn at this point.' },
    QuantityMin: { type: 'number', min: 0, max: 100, def: 1, labelRu: 'Количество предметов Min', labelEn: 'QuantityMin', descRu: 'Нижний предел количества спавнящихся предметов.', descEn: 'Minimum limit of spawned items.' },
    QuantityMax: { type: 'number', min: 0, max: 100, def: 1, labelRu: 'Количество предметов Max', labelEn: 'QuantityMax', descRu: 'Верхний предел количества спавнящихся предметов.', descEn: 'Maximum limit of spawned items.' },
    AllowDuplicates: { type: 'boolean', def: false, labelRu: 'Разрешить дубликаты', labelEn: 'AllowDuplicates', descRu: 'Могут ли одинаковые предметы спавняться в одной точке.', descEn: 'Whether identical items can spawn at the same point.' },
    ShouldFilterItemsByZone: { type: 'boolean', def: true, labelRu: 'Фильтровать по зоне', labelEn: 'ShouldFilterItemsByZone', descRu: 'Фильтровать предметы в зависимости от зоны спавна.', descEn: 'Filter items depending on spawn zone.' },
    ShouldApplyLocationSpecificProbabilityModifier: { type: 'boolean', def: true, labelRu: 'Множитель вероятности зоны', labelEn: 'ShouldApplyLocationSpecificProbabilityModifier', descRu: 'Умножать ли вероятность на коэффициент зоны локации.', descEn: 'Multiply probability by zone modifier coefficient.' },
    ShouldApplyLocationSpecificDamageModifier: { type: 'boolean', def: true, labelRu: 'Множитель повреждений зоны', labelEn: 'ShouldApplyLocationSpecificDamageModifier', descRu: 'Масштабировать ли урон предметов коэффициентом зоны.', descEn: 'Scale item damage by zone modifier coefficient.' },
    InitialDamage: { type: 'number', min: 0, max: 100, def: 0, labelRu: 'Базовый износ предметов (%)', labelEn: 'InitialDamage', descRu: 'Начальный базовый процент повреждения предмета.', descEn: 'Initial base percentage of item damage.' },
    RandomDamage: { type: 'number', min: 0, max: 100, def: 0, labelRu: 'Случайный износ предметов (%)', labelEn: 'RandomDamage', descRu: 'Добавочный случайный процент износа от 0 до значения.', descEn: 'Additional random wear percentage.' },
    InitialUsage: { type: 'number', min: 0, max: 100, def: 0, labelRu: 'Базовый расход ресурса (%)', labelEn: 'InitialUsage', descRu: 'Начальный израсходованный ресурс (патроны, заряды).', descEn: 'Initial resource usage.' },
    RandomUsage: { type: 'number', min: 0, max: 100, def: 0, labelRu: 'Случайный расход ресурса (%)', labelEn: 'RandomUsage', descRu: 'Добавочный случайный процент расхода от 0 до значения.', descEn: 'Additional random usage percentage.' },
    PostSpawnActions: { type: 'PostSpawnActions', def: [], labelRu: 'Действия постобработки спавна', labelEn: 'PostSpawnActions', descRu: 'Список специальных скриптов, применяемых к предметам.', descEn: 'List of special scripts applied to items.' }
};

const POST_SPAWN_ACTIONS_CATALOGUE = [
    {
        categoryRu: '💳 Ключ-карты бункеров и киллбоксов',
        categoryEn: 'Keycards',
        items: [
            { name: 'AbandonedBunkerKeycard', descRu: 'Привязать ключ-карту к ближайшему заброшенному бункеру', descEn: 'Bind keycard to nearest abandoned bunker' },
            { name: 'KillboxKeycard_Cargo', descRu: 'Cargo Keycard: длительность 72ч, обход лимитов сервера', descEn: 'Cargo Keycard: duration 72h, bypass server limits' },
            { name: 'KillboxKeycard_Sentry', descRu: 'Sentry Keycard: длительность 48ч, обход лимитов сервера', descEn: 'Sentry Keycard: duration 48h, bypass server limits' },
            { name: 'KillboxKeycard_Police', descRu: 'Police Keycard: длительность 24ч, с учетом лимитов сервера', descEn: 'Police Keycard: duration 24h, subject to server limits' },
            { name: 'KillboxKeycard_Radiation', descRu: 'Rad Police Keycard: длительность 24ч, с учетом лимитов радиации', descEn: 'Rad Police Keycard: duration 24h, subject to radiation limits' }
        ]
    },
    {
        categoryRu: '🔫 Заполнение боеприпасов',
        categoryEn: 'Ammo Refilling',
        items: [
            { name: 'SetAmmoAmount_SmallStash', descRu: 'Заполнить патроны в магазине/коробке на 0–35% емкости', descEn: 'Fill ammo in mag/box to 0–35% capacity' },
            { name: 'SetAmmoAmount_BigStash', descRu: 'Заполнить патроны на 50–100% емкости калибра', descEn: 'Fill ammo to 50–100% of caliber capacity' }
        ]
    },
    {
        categoryRu: '💰 Пачки денег (Cash)',
        categoryEn: 'Cash Bundles',
        items: [
            { name: 'SetCashAmount_SmallStash', descRu: 'Установить номинал купюр в пачке от 1 до 100$', descEn: 'Set bill denomination from 1 to 100$' },
            { name: 'SetCashAmount_MediumStash', descRu: 'Установить номинал купюр в пачке от 50 до 200$', descEn: 'Set bill denomination from 50 to 200$' },
            { name: 'SetCashAmount_BigStash', descRu: 'Установить номинал купюр в пачке от 200 до 500$', descEn: 'Set bill denomination from 200 to 500$' }
        ]
    },
    {
        categoryRu: '🧥 Грязь на одежде (Clothes Dirtiness)',
        categoryEn: 'Clothes Dirtiness',
        items: [
            { name: 'SetClothesDirtiness_ResidentialClothes', descRu: 'Слегка грязная одежда (0–20% загрязненности)', descEn: 'Slightly dirty clothes (0–20% dirtiness)' },
            { name: 'SetClothesDirtiness_DirtyClothes', descRu: 'Очень грязная одежда (60–85% загрязненности)', descEn: 'Very dirty clothes (60–85% dirtiness)' },
            { name: 'SetClothesDirtiness_DeadPuppets', descRu: 'Грязное тряпье с трупов зомби (93–96% загрязненности)', descEn: 'Dirty rags from puppet corpses (93–96% dirtiness)' }
        ]
    },
    {
        categoryRu: '🔋 Прочие ресурсы и расходы',
        categoryEn: 'Other Resources & Usage',
        items: [
            { name: 'SetUsage_Max', descRu: 'Опустошить предмет с расходом (0/5 или 0/20 использований)', descEn: 'Empty item with usage (0/5 or 0/20 uses)' },
            { name: 'SetResourceAmount_CargoDropGasolineCanister', descRu: 'Спец. оверрайд InitialUsage для канистр в CargoDrop', descEn: 'Special override InitialUsage for canisters in CargoDrop' }
        ]
    }
];

async function fetchSpawners() {
    const res = await fetch('/api/spawners');
    if (!res.ok) throw new Error('Failed to load spawners metadata');
    const data = await res.json();
    
    state.spawnersData.defaultFiles = data.defaultFiles || [];
    state.spawnersData.overrideDirs = data.overrideDirs || [];
    
    // Map overrideFiles as a map: fileName -> relativePath
    state.spawnersData.overrideFiles = {};
    if (data.overrideFiles) {
        data.overrideFiles.forEach(o => {
            state.spawnersData.overrideFiles[o.fileName] = o.relativePath;
        });
    }
    state.spawnersData.dirty = false;
}

function onSpawnerSearchChange() {
    state.spawnersData.searchQuery = document.getElementById('spawner-search-input').value.trim();
    renderSpawnerTree();
}

// Filters flat defaultFiles list according to search queries and state filter checkboxes
function getFilteredSpawners() {
    const showDefault = state.spawnersData.filterDefault;
    const showOverride = state.spawnersData.filterOverride;
    
    let files = [];
    if (showOverride && !showDefault) {
        // Only Override files
        files = Object.keys(state.spawnersData.overrideFiles);
    } else if (showDefault && !showOverride) {
        // Only Default files (show all files from the Default folder)
        files = state.spawnersData.defaultFiles;
    } else {
        // All files: defaultFiles + any overrideFiles that might be custom
        const allFilesSet = new Set(state.spawnersData.defaultFiles);
        Object.keys(state.spawnersData.overrideFiles).forEach(f => allFilesSet.add(f));
        files = Array.from(allFilesSet);
    }
    
    // Apply search query
    const query = state.spawnersData.searchQuery.toLowerCase();
    if (query) {
        files = files.filter(fileName => fileName.toLowerCase().includes(query));
    }
    
    // Sort files alphabetically
    files.sort((a, b) => a.localeCompare(b));
    
    return files;
}

// Toggle between flat view and category view
function setSpawnerViewMode(mode) {
    state.spawnersData.viewMode = mode;
    
    // Update button active classes
    const btnFlat = document.getElementById('btn-spawner-view-flat');
    const btnCat = document.getElementById('btn-spawner-view-categories');
    
    if (btnFlat && btnCat) {
        if (mode === 'flat') {
            btnFlat.classList.add('active');
            btnCat.classList.remove('active');
        } else {
            btnFlat.classList.remove('active');
            btnCat.classList.add('active');
        }
    }
    
    renderSpawnerTree();
}

// Toggle Default or Override filter state
function toggleSpawnerStateFilter(type) {
    if (type === 'Default') {
        state.spawnersData.filterDefault = !state.spawnersData.filterDefault;
        const btn = document.getElementById('btn-filter-state-default');
        if (btn) btn.classList.toggle('active', state.spawnersData.filterDefault);
        
        // If Default is active, deactivate Override
        if (state.spawnersData.filterDefault && state.spawnersData.filterOverride) {
            state.spawnersData.filterOverride = false;
            const btnO = document.getElementById('btn-filter-state-override');
            if (btnO) btnO.classList.remove('active');
        }
    } else if (type === 'Override') {
        state.spawnersData.filterOverride = !state.spawnersData.filterOverride;
        const btn = document.getElementById('btn-filter-state-override');
        if (btn) btn.classList.toggle('active', state.spawnersData.filterOverride);
        
        // If Override is active, deactivate Default
        if (state.spawnersData.filterOverride && state.spawnersData.filterDefault) {
            state.spawnersData.filterDefault = false;
            const btnD = document.getElementById('btn-filter-state-default');
            if (btnD) btnD.classList.remove('active');
        }
        
        // When Override is selected, automatically switch to categories mode to group by folder
        if (state.spawnersData.filterOverride) {
            state.spawnersData.viewMode = 'categories';
            const btnFlat = document.getElementById('btn-spawner-view-flat');
            const btnCat = document.getElementById('btn-spawner-view-categories');
            if (btnFlat && btnCat) {
                btnFlat.classList.remove('active');
                btnCat.classList.add('active');
            }
        }
    }
    
    renderSpawnerTree();
}

// Reset all spawner explorer filters to default (flat view showing all files)
function resetSpawnerFilters() {
    state.spawnersData.viewMode = 'flat';
    state.spawnersData.filterDefault = false;
    state.spawnersData.filterOverride = false;
    state.spawnersData.searchQuery = '';
    
    // Reset inputs & active classes
    const searchInput = document.getElementById('spawner-search-input');
    if (searchInput) searchInput.value = '';
    
    const btnFlat = document.getElementById('btn-spawner-view-flat');
    const btnCat = document.getElementById('btn-spawner-view-categories');
    const btnDefault = document.getElementById('btn-filter-state-default');
    const btnOverride = document.getElementById('btn-filter-state-override');
    
    if (btnFlat) btnFlat.classList.add('active');
    if (btnCat) btnCat.classList.remove('active');
    if (btnDefault) btnDefault.classList.remove('active');
    if (btnOverride) btnOverride.classList.remove('active');
    
    renderSpawnerTree();
}

function groupSpawnersByOverrideFolders(files) {
    const tree = { name: "Root", isFolder: true, children: [] };
    
    // Helper to get or create a folder node inside parent folder
    function getOrCreateFolder(parentFolder, folderName) {
        let found = parentFolder.children.find(c => c.name === folderName && c.isFolder);
        if (!found) {
            found = { name: folderName, isFolder: true, children: [] };
            parentFolder.children.push(found);
            parentFolder.children.sort((a, b) => {
                if (a.isFolder && !b.isFolder) return -1;
                if (!a.isFolder && b.isFolder) return 1;
                return a.name.localeCompare(b.name);
            });
        }
        return found;
    }
    
    files.forEach(fileName => {
        const relPath = state.spawnersData.overrideFiles[fileName];
        if (relPath) {
            const parts = relPath.split('/');
            let targetFolder = tree;
            
            // The directory path is everything except the last part (the filename)
            for (let i = 0; i < parts.length - 1; i++) {
                targetFolder = getOrCreateFolder(targetFolder, parts[i]);
            }
            
            targetFolder.children.push({
                name: fileName,
                isFolder: false
            });
        }
    });
    
    // Sort all child folders' children
    function sortChildren(node) {
        node.children.sort((a, b) => {
            if (a.isFolder && !b.isFolder) return -1;
            if (!a.isFolder && b.isFolder) return 1;
            return a.name.localeCompare(b.name);
        });
        node.children.forEach(c => {
            if (c.isFolder) sortChildren(c);
        });
    }
    sortChildren(tree);
    
    return tree;
}

function groupSpawners(files) {
    const tree = { name: "Root", isFolder: true, children: [] };
    
    // Helper to get or create a folder node inside parent folder
    function getOrCreateFolder(parentFolder, folderName) {
        let found = parentFolder.children.find(c => c.name === folderName && c.isFolder);
        if (!found) {
            found = { name: folderName, isFolder: true, children: [] };
            parentFolder.children.push(found);
            // Sort folder children alphabetically
            parentFolder.children.sort((a, b) => {
                if (a.isFolder && !b.isFolder) return -1;
                if (!a.isFolder && b.isFolder) return 1;
                return a.name.localeCompare(b.name);
            });
        }
        return found;
    }
    
    files.forEach(fileName => {
        let targetFolder = tree;
        const nameWithoutExt = fileName.replace('.json', '');
        
        // 1. Check special global patterns
        let isSpecial = false;
        const specialPatterns = [
            { key: 'World_Shelf', label: 'World_Shelf', regex: /World_(Shelf|Self|Shelve)/i },
            { key: 'CardBox', label: 'CardBox', regex: /Card[Bb]ox/i },
            { key: 'Trash', label: 'Trash', regex: /(Trash|Garbage)/i },
            { key: 'Crate', label: 'Crate', regex: /Crate(?!_Tarp)/i },
            { key: 'Ammo_box', label: 'Ammo_box', regex: /Ammo[_-]?[Bb]ox/i },
            { key: 'Desk', label: 'Desk', regex: /Desk/i },
            { key: 'File_Cabinet', label: 'File_Cabinet', regex: /File[_-]?[Cc]abinet/i }
        ];
        
        for (const pattern of specialPatterns) {
            if (pattern.regex.test(nameWithoutExt)) {
                targetFolder = getOrCreateFolder(tree, pattern.label);
                isSpecial = true;
                break;
            }
        }
        
        if (!isSpecial) {
            // 2. Check Buildings
            if (fileName.startsWith('Buildings-')) {
                const buildingsFolder = getOrCreateFolder(tree, 'Buildings');
                const parts = fileName.split('-');
                
                // parts looks like: ["Buildings", "Category", "Subcategory", "Examine_Something.json"]
                const category = parts[1] || '';
                const subcategory = parts[2] || '';
                
                if (category === 'Armory' && ['Secret_Bunker', 'Prison', 'TV_Bunker'].includes(subcategory)) {
                    // Nest inside Buildings -> Armory -> Subcategory
                    const armoryFolder = getOrCreateFolder(buildingsFolder, 'Armory');
                    targetFolder = getOrCreateFolder(armoryFolder, subcategory);
                } else if (category) {
                    targetFolder = getOrCreateFolder(buildingsFolder, category);
                } else {
                    targetFolder = buildingsFolder;
                }
            } else {
                // 3. Others: group by their prefix before first hyphen
                const parts = fileName.split('-');
                const prefix = parts[0] || 'Others';
                let cleanPrefix = prefix;
                if (prefix === 'Character' && parts[1]) {
                    cleanPrefix = parts[1];
                }
                targetFolder = getOrCreateFolder(tree, cleanPrefix);
            }
        }
        
        // Add file node
        targetFolder.children.push({
            name: fileName,
            isFolder: false
        });
        
        // Sort folder children so files come after folders, sorted alphabetically
        targetFolder.children.sort((a, b) => {
            if (a.isFolder && !b.isFolder) return -1;
            if (!a.isFolder && b.isFolder) return 1;
            return a.name.localeCompare(b.name);
        });
    });
    
    return tree;
}

function renderSpawnerTree() {
    const container = document.getElementById('spawners-tree-container');
    if (!container) return;
    container.innerHTML = '';
    
    const filteredFiles = getFilteredSpawners();
    
    // Recursive HTML renderer for folder view mode
    function buildTreeHtml(node, path = '') {
        const fragment = document.createDocumentFragment();
        
        node.children.forEach((child, index) => {
            const childPath = path ? `${path}/${index}` : `${index}`;
            const collapsedKey = path ? `${path}/${child.name}` : child.name;
            
            if (child.isFolder) {
                const folderDiv = document.createElement('div');
                folderDiv.className = 'spawner-folder-node';
                
                const isCollapsed = state.spawnersData.collapsedFolders.has(collapsedKey);
                
                const header = document.createElement('div');
                header.className = 'spawner-folder-header';
                header.onclick = () => {
                    if (state.spawnersData.collapsedFolders.has(collapsedKey)) {
                        state.spawnersData.collapsedFolders.delete(collapsedKey);
                    } else {
                        state.spawnersData.collapsedFolders.add(collapsedKey);
                    }
                    renderSpawnerTree();
                };
                
                header.innerHTML = `
                    <span class="spawner-folder-arrow">${isCollapsed ? '▶' : '▼'}</span>
                    <span class="spawner-folder-icon">📁</span>
                    <span>${child.name}</span>
                `;
                folderDiv.appendChild(header);
                
                const childrenContainer = document.createElement('div');
                childrenContainer.className = `spawner-folder-children ${isCollapsed ? 'collapsed' : ''}`;
                childrenContainer.appendChild(buildTreeHtml(child, childPath));
                
                folderDiv.appendChild(childrenContainer);
                fragment.appendChild(folderDiv);
            } else {
                // It is a file node
                const fileDiv = document.createElement('div');
                const hasOverride = !!state.spawnersData.overrideFiles[child.name] && !state.spawnersData.filterDefault;
                const isActive = child.name === state.spawnersData.activeFileName;
                
                fileDiv.className = `spawner-file-node ${isActive ? 'active' : ''}`;
                fileDiv.onclick = () => selectSpawner(child.name);
                
                fileDiv.innerHTML = `
                    <div class="spawner-file-info">
                        <span class="spawner-file-icon">📄</span>
                        <span class="spawner-file-name" title="${child.name}">${child.name.replace('.json', '')}</span>
                    </div>
                    <div class="spawner-file-badges">
                        ${hasOverride ? `<span class="spawner-file-badge badge-override">${_t('badge_override')}</span>` : ''}
                    </div>
                `;
                fragment.appendChild(fileDiv);
            }
        });
        
        return fragment;
    }
    
    if (state.spawnersData.viewMode === 'categories') {
        const tree = (state.spawnersData.filterOverride && !state.spawnersData.filterDefault)
            ? groupSpawnersByOverrideFolders(filteredFiles)
            : groupSpawners(filteredFiles);
        container.appendChild(buildTreeHtml(tree));
    } else {
        // Render flat list directly
        const fragment = document.createDocumentFragment();
        if (filteredFiles.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'text-muted';
            emptyDiv.style.padding = '12px 14px';
            emptyDiv.style.fontStyle = 'italic';
            emptyDiv.textContent = _t('no_presets_found');
            fragment.appendChild(emptyDiv);
        } else {
            filteredFiles.forEach(fileName => {
                const fileDiv = document.createElement('div');
                const hasOverride = !!state.spawnersData.overrideFiles[fileName] && !state.spawnersData.filterDefault;
                const isActive = fileName === state.spawnersData.activeFileName;
                
                fileDiv.className = `spawner-file-node ${isActive ? 'active' : ''}`;
                fileDiv.onclick = () => selectSpawner(fileName);
                
                fileDiv.innerHTML = `
                    <div class="spawner-file-info">
                        <span class="spawner-file-icon">📄</span>
                        <span class="spawner-file-name" title="${fileName}">${fileName.replace('.json', '')}</span>
                    </div>
                    <div class="spawner-file-badges">
                        ${hasOverride ? `<span class="spawner-file-badge badge-override">${_t('badge_override')}</span>` : ''}
                    </div>
                `;
                fragment.appendChild(fileDiv);
            });
        }
        container.appendChild(fragment);
    }
}

async function selectSpawner(fileName) {
    if (state.spawnersData.dirty) {
        if (!confirm(_t('confirm_unsaved_changes_spawner'))) {
            return;
        }
    }
    
    try {
        const res = await fetch(`/api/spawners/detail?fileName=${fileName}`);
        if (!res.ok) throw new Error('Failed to load spawner details');
        const data = await res.json();
        
        state.spawnersData.activeFileName = fileName;
        
        // If "Default" filter is active, force using the default original read-only template
        const forceDefault = state.spawnersData.filterDefault && !state.spawnersData.filterOverride;
        if (forceDefault) {
            state.spawnersData.activeSpawner = data.defaultData ? JSON.parse(JSON.stringify(data.defaultData)) : {};
            state.spawnersData.activeSpawnerOverridePath = null;
        } else {
            state.spawnersData.activeSpawner = data.overrideData || (data.defaultData ? JSON.parse(JSON.stringify(data.defaultData)) : {});
            state.spawnersData.activeSpawnerOverridePath = data.overridePath;
        }
        
        // Clean `.json` extensions from Subpresets list in memory
        const activeSpawner = state.spawnersData.activeSpawner;
        if (activeSpawner && activeSpawner.Subpresets && Array.isArray(activeSpawner.Subpresets)) {
            activeSpawner.Subpresets.forEach(sub => {
                if (sub && sub.Id && typeof sub.Id === 'string') {
                    sub.Id = sub.Id.replace(/\.json$/i, '');
                }
            });
        }
        
        state.spawnersData.originalSpawnerJson = JSON.stringify(state.spawnersData.activeSpawner);
        state.spawnersData.dirty = false;
        state.spawnersData.editorMode = 'editor';
        state.spawnersData.jsonInvalid = false;
        
        // Re-render tree to highlight active
        renderSpawnerTree();
        renderSpawnerEditor();
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка загрузки', err.message, 'error');
        console.error(err);
    }
}

function renderSpawnerEditor() {
    const emptyState = document.getElementById('spawner-empty-state');
    const editorContainer = document.getElementById('spawner-editor-container');
    if (!emptyState || !editorContainer) return;
    
    const fileName = state.spawnersData.activeFileName;
    if (!fileName) {
        emptyState.classList.remove('hidden');
        editorContainer.classList.add('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    editorContainer.classList.remove('hidden');
    
    // 1. Populate top header info
    document.getElementById('spawner-active-title').textContent = fileName;
    const hasOverride = !!state.spawnersData.activeSpawnerOverridePath;
    const statusBadge = document.getElementById('spawner-status-badge');
    const overridePathHint = document.getElementById('spawner-override-path-hint');
    const btnCreateOverride = document.getElementById('btn-create-spawner-override');
    const btnDeleteOverride = document.getElementById('btn-delete-spawner-override');
    const subfolderRow = document.getElementById('spawner-override-subfolder-row');
    const subfolderSelect = document.getElementById('spawner-override-subfolder-select');
    
    if (hasOverride) {
        editorContainer.classList.remove('readonly-mode');
        statusBadge.className = 'badge badge-custom';
        statusBadge.textContent = _t('badge_override');
        overridePathHint.textContent = `Путь: Override/${state.spawnersData.activeSpawnerOverridePath}`;
        
        btnCreateOverride.classList.add('hidden');
        btnDeleteOverride.classList.remove('hidden');
        subfolderRow.classList.remove('hidden');
        
        // Populate directories select list
        subfolderSelect.innerHTML = '';
        state.spawnersData.overrideDirs.forEach(dir => {
            const opt = document.createElement('option');
            opt.value = dir;
            opt.textContent = dir;
            subfolderSelect.appendChild(opt);
        });
        const currentSubdir = state.spawnersData.activeSpawnerOverridePath.split('/')[0] || '_Global_misc';
        subfolderSelect.value = currentSubdir;
    } else {
        editorContainer.classList.add('readonly-mode');
        statusBadge.className = 'badge badge-default';
        statusBadge.textContent = _t('badge_default');
        overridePathHint.textContent = `Путь: WindowsServer\\Loot\\Spawners\\Presets\\Default\\${fileName} (Read-Only)`;
        
        btnCreateOverride.classList.remove('hidden');
        btnDeleteOverride.classList.add('hidden');
        subfolderRow.classList.add('hidden');
    }

    // Update Mode switch buttons state
    const mode = state.spawnersData.editorMode || 'editor';
    const btnModeEditor = document.getElementById('btn-spawner-mode-editor');
    const btnModeJson = document.getElementById('btn-spawner-mode-json');
    if (btnModeEditor) btnModeEditor.classList.toggle('active', mode === 'editor');
    if (btnModeJson) btnModeJson.classList.toggle('active', mode === 'json');

    const sectionsContainer = document.getElementById('spawner-sections-container');
    const generalCard = document.getElementById('spawner-general-card');
    const jsonCard = document.getElementById('spawner-json-card');
    const jsonTextarea = document.getElementById('spawner-json-textarea');
    const jsonError = document.getElementById('spawner-json-error');

    if (mode === 'json') {
        // Hide editor blocks
        sectionsContainer.classList.add('hidden');
        generalCard.classList.add('hidden');
        
        // Show JSON block
        jsonCard.classList.remove('hidden');
        
        // Populate JSON block
        jsonTextarea.value = JSON.stringify(state.spawnersData.activeSpawner, null, 4);
        jsonTextarea.readOnly = !hasOverride;
        
        // Clear/hide invalid indicators initially
        jsonError.classList.add('hidden');
        jsonTextarea.style.borderColor = '';
        jsonTextarea.style.boxShadow = '';
    } else {
        // Hide JSON block
        jsonCard.classList.add('hidden');
        
        // Show editor blocks
        sectionsContainer.classList.remove('hidden');
        generalCard.classList.remove('hidden');
        
        // Clear editor blocks
        sectionsContainer.innerHTML = '';
        
        const spawner = state.spawnersData.activeSpawner;
        
        // Render sections in order: FixedItems, Items, Nodes, Subpresets
        if (spawner.FixedItems) {
            sectionsContainer.appendChild(renderFixedItemsSection(spawner.FixedItems));
        }
        if (spawner.Items) {
            sectionsContainer.appendChild(renderItemsSection(spawner.Items));
        }
        if (spawner.Nodes) {
            sectionsContainer.appendChild(renderNodesSection(spawner.Nodes));
        }
        if (spawner.Subpresets) {
            sectionsContainer.appendChild(renderSubpresetsSection(spawner.Subpresets));
        }
        
        renderGeneralSettingsFields();
        
        // Check if only Subpresets exist
        const hasOnlySubpresets = spawner.Subpresets && 
                                  !spawner.FixedItems && 
                                  !spawner.Items && 
                                  !spawner.Nodes;
        if (hasOnlySubpresets) {
            generalCard.classList.add('hidden');
        } else {
            generalCard.classList.remove('hidden');
        }
    }
}

function setSpawnerEditorMode(mode) {
    if (mode === 'editor' && state.spawnersData.editorMode === 'json' && state.spawnersData.jsonInvalid) {
        showToast('Ошибка переключения', 'Невозможно переключиться в визуальный редактор, пока JSON содержит синтаксические ошибки!', 'error');
        return;
    }
    state.spawnersData.editorMode = mode;
    renderSpawnerEditor();
}

function onSpawnerJsonTextareaInput() {
    const textarea = document.getElementById('spawner-json-textarea');
    const jsonError = document.getElementById('spawner-json-error');
    if (!textarea || !jsonError) return;
    
    const value = textarea.value;
    try {
        const parsed = JSON.parse(value);
        
        // JSON is valid
        jsonError.classList.add('hidden');
        textarea.style.borderColor = '';
        textarea.style.boxShadow = '';
        state.spawnersData.jsonInvalid = false;
        
        // Update activeSpawner object
        state.spawnersData.activeSpawner = parsed;
        
        // Check dirty status
        checkSpawnersDirty();
    } catch (e) {
        // JSON is invalid
        jsonError.classList.remove('hidden');
        jsonError.textContent = `⚠️ Ошибка JSON: ${e.message}`;
        textarea.style.borderColor = 'var(--color-danger)';
        textarea.style.boxShadow = '0 0 10px rgba(255, 23, 68, 0.15)';
        state.spawnersData.jsonInvalid = true;
        
        state.spawnersData.dirty = true;
        updateDirtyStateIndicator();
    }
}

function renderFixedItemsSection(fixedItems) {
    const card = document.createElement('div');
    card.className = 'card spawner-section-card section-fixed';
    
    let html = `
        <div class="card-header-flex" style="margin-bottom: 12px; padding-bottom: 8px;">
            <h3 style="font-size: 15px; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                ${_t('spawner_section_fixed_items')}
            </h3>
            <button class="btn btn-accent btn-xs" onclick="addSpawnerFixedItem()">+ Добавить</button>
        </div>
        <div class="spawner-section-items-list">
    `;
    
    if (fixedItems.length === 0) {
        html += `<div class="text-muted" style="font-style: italic; padding: 12px 14px;">${_t('list_is_empty')}</div>`;
    } else {
        fixedItems.forEach((itemId, idx) => {
            const isItemDisabled = state.itemsData.items.some(item => 
                item && item.Id === itemId && item.IsDisabledForSpawning === true
            );
            
            html += `
                <div class="spawner-item-editor-row ${isItemDisabled ? 'item-disabled' : ''}" style="display: flex; align-items: center; gap: 8px;">
                    <!-- Mini Icon -->
                    <img src="images/${itemId}.webp" onerror="if(this.src.endsWith('.webp')){this.src=this.src.slice(0,-5)+'.png';}else{this.src='images/unknown.webp';}" class="item-mini-icon" style="width: 26px; height: 26px;">
                    
                    <!-- ID input -->
                    <div style="position: relative; flex-grow: 1; display: flex; align-items: center;">
                        <input type="text" value="${itemId || ''}" class="spawner-input-item-id" 
                            list="items-datalist" placeholder="Введите ID предмета..."
                            onchange="updateSpawnerFixedItem(${idx}, this.value)">
                        <button class="btn-select-item-search" onclick="openSelectItemModalForSpawner('FixedItems', ${idx})" title="Выбрать из базы данных">🔍</button>
                    </div>
                    
                    <div class="spawner-item-db-indicator">
                        ${isItemDisabled 
                            ? `<span class="disabled-spawn-badge">СПАВН ВЫКЛ</span>` 
                            : `<span class="badge badge-default">${_t('badge_active')}</span>`}
                    </div>
                    
                    <button class="btn btn-danger btn-xs" onclick="deleteSpawnerFixedItem(${idx})">&times; ${_t('btn_delete')}</button>
                </div>
            `;
        });
    }
    
    html += `</div>`;
    card.innerHTML = html;
    return card;
}

function renderItemsSection(items) {
    const card = document.createElement('div');
    card.className = 'card spawner-section-card section-items';
    
    let html = `
        <div class="card-header-flex" style="margin-bottom: 12px; padding-bottom: 8px;">
            <h3 style="font-size: 15px; color: var(--color-accent); display: flex; align-items: center; gap: 8px;">
                ${_t('spawner_section_items')}
            </h3>
            <button class="btn btn-accent btn-xs" onclick="addSpawnerItem()">+ Добавить</button>
        </div>
        <div class="spawner-section-items-list">
    `;
    
    const rarities = ['Abundant', 'Common', 'Uncommon', 'Rare', 'VeryRare', 'ExtremelyRare'];
    
    if (items.length === 0) {
        html += `<div class="text-muted" style="font-style: italic; padding: 12px 14px;">${_t('list_is_empty')}</div>`;
    } else {
        items.forEach((item, idx) => {
            const isItemDisabled = state.itemsData.items.some(it => 
                it && it.Id === item.Id && it.IsDisabledForSpawning === true
            );
            
            html += `
                <div class="spawner-item-editor-row ${isItemDisabled ? 'item-disabled' : ''}" style="display: flex; align-items: center; gap: 8px;">
                    <!-- Mini Icon -->
                    <img src="images/${item.Id}.webp" onerror="if(this.src.endsWith('.webp')){this.src=this.src.slice(0,-5)+'.png';}else{this.src='images/unknown.webp';}" class="item-mini-icon" style="width: 26px; height: 26px;">
                    
                    <!-- Rarity select -->
                    <div class="select-wrapper select-xs" style="width: 150px; flex-shrink: 0;">
                        <select onchange="updateSpawnerItemProperty(${idx}, 'Rarity', this.value)" class="rarity-${item.Rarity || 'Common'}">
                            ${rarities.map(r => `<option value="${r}" ${item.Rarity === r ? 'selected' : ''} class="rarity-${r}">${r}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- ID input -->
                    <div style="position: relative; flex-grow: 1; display: flex; align-items: center;">
                        <input type="text" value="${item.Id || ''}" class="spawner-input-item-id" 
                            list="items-datalist" placeholder="Введите ID предмета..."
                            onchange="updateSpawnerItemProperty(${idx}, 'Id', this.value)">
                        <button class="btn-select-item-search" onclick="openSelectItemModalForSpawner('Items', ${idx})" title="Выбрать из базы данных">🔍</button>
                    </div>
                    
                    <div class="spawner-item-db-indicator">
                        ${isItemDisabled 
                            ? `<span class="disabled-spawn-badge">СПАВН ВЫКЛ</span>` 
                            : `<span class="badge badge-default">${_t('badge_active')}</span>`}
                    </div>
                    
                    <button class="btn btn-danger btn-xs" onclick="deleteSpawnerItem(${idx})">&times; ${_t('btn_delete')}</button>
                </div>
            `;
        });
    }
    
    html += `</div>`;
    card.innerHTML = html;
    return card;
}

function renderNodesSection(nodes) {
    const card = document.createElement('div');
    card.className = 'card spawner-section-card section-nodes';
    
    const nodePaths = getUniqueNodePaths();
    
    let html = `
        <div class="card-header-flex" style="margin-bottom: 12px; padding-bottom: 8px;">
            <h3 style="font-size: 15px; color: var(--color-success); display: flex; align-items: center; gap: 8px;">
                ${_t('spawner_section_nodes')}
            </h3>
            <button class="btn btn-accent btn-xs" onclick="addSpawnerNode()">+ ${_t('btn_add_node')}</button>
        </div>
        <div class="spawner-section-items-list">
    `;
    
    const rarities = ['Abundant', 'Common', 'Uncommon', 'Rare', 'VeryRare', 'ExtremelyRare'];
    
    if (nodes.length === 0) {
        html += `<div class="text-muted" style="font-style: italic; padding: 12px 14px;">${_t('list_is_empty')}</div>`;
    } else {
        nodes.forEach((node, nodeIdx) => {
            html += `
                <div class="spawner-node-box" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); padding: 16px; margin-bottom: 12px; background-color: rgba(255,255,255,0.01);">
                    <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
                        <span style="font-weight: 700; color: var(--color-success); font-size: 12px;">${_t('node_label')} #${nodeIdx + 1}:</span>
                        
                        <div class="select-wrapper select-xs" style="width: 150px;">
                            <select onchange="updateSpawnerNodeRarity(${nodeIdx}, this.value)" class="rarity-${node.Rarity || 'Common'}">
                                ${rarities.map(r => `<option value="${r}" ${node.Rarity === r ? 'selected' : ''} class="rarity-${r}">${r}</option>`).join('')}
                            </select>
                        </div>
                        
                        <button class="btn btn-secondary btn-xs" onclick="addSpawnerNodeId(${nodeIdx})">+ ${_t('btn_add_connection')}</button>
                        <button class="btn btn-danger btn-xs" onclick="deleteSpawnerNode(${nodeIdx})" style="margin-left: auto;">${_t('btn_delete_node')}</button>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 8px;">
            `;
            
            const ids = node.Ids || [];
            if (ids.length === 0) {
                html += `<div class="text-muted" style="font-size: 11px; font-style: italic; padding-left: 12px;">${_t('no_connections')}</div>`;
            } else {
                ids.forEach((id, idIdx) => {
                    const isNode = (classifyNodePath(id) === 'node');
                    const isItemDisabled = !isNode && state.itemsData.items.some(it => 
                        it && it.Id === id && it.IsDisabledForSpawning === true
                    );
                    
                    html += `
                        <div class="spawner-item-editor-row ${isItemDisabled ? 'item-disabled' : ''}" style="padding: 6px 10px;">
                            <div style="position: relative; flex-grow: 1;">
                                <input type="text" value="${id || ''}" class="spawner-input-item-id" style="font-size: 12px;"
                                     list="spawner-nodes-paths-datalist" placeholder="Введите путь к ноде..."
                                     onchange="updateSpawnerNodeIdVal(${nodeIdx}, ${idIdx}, this.value)">
                                <button class="btn-select-item-search" onclick="openSelectItemModalForSpawner('Nodes', ${nodeIdx}, ${idIdx})" title="Выбрать из базы данных">🔍</button>
                            </div>
                            
                            <div class="spawner-item-db-indicator">
                                ${isNode 
                                    ? `<span class="badge" style="background-color: rgba(69, 162, 158, 0.15); color: #45a29e; border: 1px solid #45a29e; font-size: 9px; padding: 1px 4px;">${_t('node_badge')}</span>` 
                                    : isItemDisabled 
                                        ? `<span class="disabled-spawn-badge" style="font-size: 9px; height: auto; padding: 2px 6px;">СПАВН ВЫКЛ</span>`
                                        : `<span class="badge badge-default" style="font-size: 9px; padding: 1px 4px;">${_t('item_badge')}</span>`}
                            </div>
                            
                            <button class="btn btn-danger btn-xs" style="padding: 2px 6px;" onclick="deleteSpawnerNodeId(${nodeIdx}, ${idIdx})">&times;</button>
                        </div>
                    `;
                });
            }
            
            html += `
                    </div>
                </div>
            `;
        });
    }
    
    html += `
        </div>
        <datalist id="spawner-nodes-paths-datalist">
            ${nodePaths.map(p => `<option value="${p}"></option>`).join('')}
        </datalist>
    `;
    card.innerHTML = html;
    return card;
}


function renderSubpresetsSection(subpresets) {
    const card = document.createElement('div');
    card.className = 'card spawner-section-card section-subpresets';
    
    let html = `
        <div class="card-header-flex" style="margin-bottom: 12px; padding-bottom: 8px;">
            <h3 style="font-size: 15px; color: var(--color-warning); display: flex; align-items: center; gap: 8px;">
                ${_t('spawner_section_subpresets')}
            </h3>
            <button class="btn btn-accent btn-xs" onclick="addSpawnerSubpreset()">+ Добавить</button>
        </div>
        <div class="spawner-section-items-list">
    `;
    
    const rarities = ['Abundant', 'Common', 'Uncommon', 'Rare', 'VeryRare', 'ExtremelyRare'];
    
    if (subpresets.length === 0) {
        html += `<div class="text-muted" style="font-style: italic; padding: 12px 14px;">${_t('list_is_empty')}</div>`;
    } else {
        subpresets.forEach((sub, idx) => {
            const cleanId = (sub.Id || '').replace(/\.json$/i, '');
            html += `
                <div class="spawner-item-editor-row">
                    <!-- Rarity select -->
                    <div class="select-wrapper select-xs" style="width: 150px;">
                        <select onchange="updateSpawnerSubpresetProperty(${idx}, 'Rarity', this.value)" class="rarity-${sub.Rarity || 'Common'}">
                            ${rarities.map(r => `<option value="${r}" ${sub.Rarity === r ? 'selected' : ''} class="rarity-${r}">${r}</option>`).join('')}
                        </select>
                    </div>
                    
                    <!-- Presets Datalist search -->
                    <div style="flex-grow: 1;">
                        <input type="text" value="${cleanId}" class="spawner-input-item-id" 
                            list="spawner-presets-datalist" placeholder="Выберите дочерний spawner-файл..."
                            onchange="updateSpawnerSubpresetProperty(${idx}, 'Id', this.value)">
                    </div>
                    
                    <button class="btn btn-danger btn-xs" onclick="deleteSpawnerSubpreset(${idx})">&times; ${_t('btn_delete')}</button>
                </div>
            `;
        });
    }
    
    // Datalist of child spawner files autocompletes (without .json extensions)
    html += `
        </div>
        <datalist id="spawner-presets-datalist">
            ${state.spawnersData.defaultFiles.map(f => `<option value="${f.replace(/\.json$/i, '')}"></option>`).join('')}
        </datalist>
    `;
    card.innerHTML = html;
    return card;
}

function renderGeneralSettingsFields() {
    const grid = document.getElementById('spawner-settings-grid');
    const select = document.getElementById('spawner-add-field-select');
    if (!grid || !select) return;
    
    grid.innerHTML = '';
    const spawner = state.spawnersData.activeSpawner;
    const omittedFields = [];
    
    // Check validation issues: QuantityMin > QuantityMax
    const isQuantityError = ('QuantityMin' in spawner) && ('QuantityMax' in spawner) && (parseInt(spawner.QuantityMin) > parseInt(spawner.QuantityMax));
    
    // Check warnings: initial + random > 100
    const isDamageWarning = ('InitialDamage' in spawner) && ('RandomDamage' in spawner) && (parseInt(spawner.InitialDamage) + parseInt(spawner.RandomDamage) > 100);
    const isUsageWarning = ('InitialUsage' in spawner) && ('RandomUsage' in spawner) && (parseInt(spawner.InitialUsage) + parseInt(spawner.RandomUsage) > 100);
    
    Object.keys(GENERAL_FIELDS_METADATA).forEach(field => {
        if (!(field in spawner)) {
            omittedFields.push(field);
            return;
        }
        
        const meta = GENERAL_FIELDS_METADATA[field];
        const val = spawner[field];
        
        const card = document.createElement('div');
        card.className = 'spawner-setting-field-card';
        
        // Error highlighting for Quantity validation
        if (isQuantityError && (field === 'QuantityMin' || field === 'QuantityMax')) {
            card.style.borderColor = 'var(--color-danger)';
            card.style.boxShadow = '0 0 10px rgba(255, 23, 68, 0.15)';
        }
        
        // Warning highlighting for Damages
        if (isDamageWarning && (field === 'InitialDamage' || field === 'RandomDamage')) {
            card.style.borderColor = 'var(--color-warning)';
        }
        // Warning highlighting for Usages
        if (isUsageWarning && (field === 'InitialUsage' || field === 'RandomUsage')) {
            card.style.borderColor = 'var(--color-warning)';
        }
        
        let controlHtml = '';
        if (meta.type === 'number') {
            controlHtml = `
                <input type="number" min="${meta.min}" max="${meta.max}" value="${val}"
                    style="padding: 4px 8px; font-size: 12px; height: 28px;"
                    onchange="updateSpawnerGeneralFieldVal('${field}', parseInt(this.value) || 0, 'number')">
            `;
        } else if (meta.type === 'boolean') {
            controlHtml = `
                <label class="switch" style="margin: 0; height: 20px; width: 40px;">
                    <input type="checkbox" ${val ? 'checked' : ''}
                        onchange="updateSpawnerGeneralFieldVal('${field}', this.checked, 'boolean')">
                    <span class="slider round" style="border-radius: 20px;"></span>
                </label>
            `;
        } else if (meta.type === 'PostSpawnActions') {
            controlHtml = renderPostSpawnActionsChecklist(val || []);
        }
        
        const label = state.lang === 'ru' ? `${meta.labelRu} <span style="color: var(--color-text-muted); font-size: 9px; font-weight: normal;">[${field}]</span>` : meta.labelEn;
        const desc = state.lang === 'ru' ? meta.descRu : meta.descEn;
        
        card.innerHTML = `
            <div class="spawner-setting-header" title="${desc}" style="cursor: help;">
                <div class="spawner-setting-title" style="font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 85%;">
                    ${label}
                </div>
                <button class="btn-delete-spawner-field" onclick="deleteSpawnerGeneralField('${field}')" title="Удалить это поле из конфига" style="padding: 0 4px; font-size: 14px; line-height: 1;">&times;</button>
            </div>
            <div style="margin-top: 4px; display: flex; flex-direction: column;">
                ${controlHtml}
                ${isQuantityError && field === 'QuantityMin' ? `<span style="color: var(--color-danger); font-size: 9px; font-weight: 700; margin-top: 4px; display: block;">⚠️ ≤ Max!</span>` : ''}
                ${isQuantityError && field === 'QuantityMax' ? `<span style="color: var(--color-danger); font-size: 9px; font-weight: 700; margin-top: 4px; display: block;">⚠️ ≥ Min!</span>` : ''}
                ${isDamageWarning && (field === 'InitialDamage' || field === 'RandomDamage') ? `<span style="color: var(--color-warning); font-size: 9px; font-weight: 700; margin-top: 4px; display: block;">⚠️ Сумма > 100%!</span>` : ''}
                ${isUsageWarning && (field === 'InitialUsage' || field === 'RandomUsage') ? `<span style="color: var(--color-warning); font-size: 9px; font-weight: 700; margin-top: 4px; display: block;">⚠️ Сумма > 100%!</span>` : ''}
            </div>
        `;
        
        // Full width for PostSpawnActions block
        if (meta.type === 'PostSpawnActions') {
            card.style.gridColumn = '1 / -1';
        }
        
        grid.appendChild(card);
    });
    
    // Populate omitted fields in selection panel dropdown
    select.innerHTML = '';
    if (omittedFields.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = _t('all_fields_added');
        select.appendChild(opt);
    } else {
        omittedFields.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f;
            const labelStr = state.lang === 'ru' ? `${GENERAL_FIELDS_METADATA[f].labelRu} [${f}]` : GENERAL_FIELDS_METADATA[f].labelEn;
            opt.textContent = labelStr;
            select.appendChild(opt);
        });
    }
}

function renderPostSpawnActionsChecklist(activeActions) {
    const activeSet = new Set(activeActions);
    
    let html = `<div class="post-spawn-checklist-wrapper">`;
    
    POST_SPAWN_ACTIONS_CATALOGUE.forEach(cat => {
        const catTitle = state.lang === 'ru' ? cat.categoryRu : cat.categoryEn;
        html += `
            <div class="post-spawn-category">
                <div class="post-spawn-category-title">${catTitle}</div>
                <div class="post-spawn-checkboxes">
        `;
        
        cat.items.forEach(action => {
            const isChecked = activeSet.has(action.name);
            html += `
                <label class="checkbox-wrapper">
                    <input type="checkbox" ${isChecked ? 'checked' : ''}
                        onchange="togglePostSpawnAction('${action.name}', this.checked)">
                    <span class="checkbox-box"></span>
                    <div style="display: flex; flex-direction: column;">
                        <span class="checkbox-label" style="font-weight: 600; color: var(--color-text-main); font-size: 12px;">${action.name}</span>
                        <span style="font-size: 10px; color: var(--color-text-muted); font-style: italic;">${state.lang === 'ru' ? action.descRu : action.descEn}</span>
                    </div>
                </label>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    return html;
}

function togglePostSpawnAction(actionName, isChecked) {
    const spawner = state.spawnersData.activeSpawner;
    if (!spawner.PostSpawnActions) {
        spawner.PostSpawnActions = [];
    }
    
    if (isChecked) {
        if (!spawner.PostSpawnActions.includes(actionName)) {
            spawner.PostSpawnActions.push(actionName);
        }
    } else {
        spawner.PostSpawnActions = spawner.PostSpawnActions.filter(a => a !== actionName);
    }
    
    checkSpawnersDirty();
    renderGeneralSettingsFields();
}

function deleteSpawnerGeneralField(fieldName) {
    const spawner = state.spawnersData.activeSpawner;
    if (fieldName in spawner) {
        delete spawner[fieldName];
        showToast('Поле удалено', `Поле "${fieldName}" успешно удалено из JSON.`, 'info');
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function addSpawnerGeneralField() {
    const select = document.getElementById('spawner-add-field-select');
    const fieldName = select.value;
    if (!fieldName) return;
    
    const spawner = state.spawnersData.activeSpawner;
    const meta = GENERAL_FIELDS_METADATA[fieldName];
    
    spawner[fieldName] = JSON.parse(JSON.stringify(meta.def));
    showToast('Поле добавлено', `Поле "${fieldName}" успешно добавлено в конфигурацию.`, 'success');
    
    checkSpawnersDirty();
    renderSpawnerEditor();
}

function updateSpawnerGeneralFieldVal(fieldName, val, type) {
    const spawner = state.spawnersData.activeSpawner;
    spawner[fieldName] = val;
    checkSpawnersDirty();
    
    // Realtime update validations trigger re-render
    if (fieldName === 'QuantityMin' || fieldName === 'QuantityMax' || 
        fieldName === 'InitialDamage' || fieldName === 'RandomDamage' || 
        fieldName === 'InitialUsage' || fieldName === 'RandomUsage') {
        renderGeneralSettingsFields();
    }
}

function toggleSpawnerSettingsCollapse() {
    const body = document.getElementById('spawner-settings-body');
    const btn = document.getElementById('btn-toggle-spawner-settings');
    if (!body || !btn) return;
    
    const isCollapsed = body.classList.contains('hidden');
    if (isCollapsed) {
        body.classList.remove('hidden');
        btn.textContent = '[-] ' + _t('btn_collapse');
    } else {
        body.classList.add('hidden');
        btn.textContent = '[+] ' + _t('btn_expand');
    }
}

// Lists modifying actions
function addSpawnerFixedItem() {
    const spawner = state.spawnersData.activeSpawner;
    if (!spawner.FixedItems) {
        spawner.FixedItems = [];
    }
    spawner.FixedItems.push("Zombie_C4_1");
    checkSpawnersDirty();
    renderSpawnerEditor();
}

function deleteSpawnerFixedItem(idx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.FixedItems) {
        spawner.FixedItems.splice(idx, 1);
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function updateSpawnerFixedItem(idx, val) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.FixedItems) {
        spawner.FixedItems[idx] = val;
        checkSpawnersDirty();
        renderSpawnerEditor(); // update disabled status borders
    }
}

function addSpawnerItem() {
    const spawner = state.spawnersData.activeSpawner;
    if (!spawner.Items) {
        spawner.Items = [];
    }
    spawner.Items.push({ Rarity: "Common", Id: "Zombie_C4_1" });
    checkSpawnersDirty();
    renderSpawnerEditor();
}

function deleteSpawnerItem(idx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Items) {
        spawner.Items.splice(idx, 1);
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function updateSpawnerItemProperty(idx, prop, val) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Items && spawner.Items[idx]) {
        spawner.Items[idx][prop] = val;
        checkSpawnersDirty();
        if (prop === 'Id') {
            renderSpawnerEditor(); // update disabled status visual indicators
        }
    }
}

function addSpawnerNode() {
    const spawner = state.spawnersData.activeSpawner;
    if (!spawner.Nodes) {
        spawner.Nodes = [];
    }
    spawner.Nodes.push({ Rarity: "Common", Ids: ["ItemLootTreeNodes"] });
    checkSpawnersDirty();
    renderSpawnerEditor();
}

function deleteSpawnerNode(nodeIdx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Nodes) {
        spawner.Nodes.splice(nodeIdx, 1);
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function addSpawnerNodeId(nodeIdx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Nodes && spawner.Nodes[nodeIdx]) {
        if (!spawner.Nodes[nodeIdx].Ids) {
            spawner.Nodes[nodeIdx].Ids = [];
        }
        spawner.Nodes[nodeIdx].Ids.push("ItemLootTreeNodes");
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function deleteSpawnerNodeId(nodeIdx, idIdx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Nodes && spawner.Nodes[nodeIdx] && spawner.Nodes[nodeIdx].Ids) {
        spawner.Nodes[nodeIdx].Ids.splice(idIdx, 1);
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function updateSpawnerNodeRarity(nodeIdx, val) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Nodes && spawner.Nodes[nodeIdx]) {
        spawner.Nodes[nodeIdx].Rarity = val;
        checkSpawnersDirty();
    }
}

function updateSpawnerNodeIdVal(nodeIdx, idIdx, val) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Nodes && spawner.Nodes[nodeIdx] && spawner.Nodes[nodeIdx].Ids) {
        spawner.Nodes[nodeIdx].Ids[idIdx] = val;
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function addSpawnerSubpreset() {
    const spawner = state.spawnersData.activeSpawner;
    if (!spawner.Subpresets) {
        spawner.Subpresets = [];
    }
    spawner.Subpresets.push({ Rarity: "Common", Id: "" });
    checkSpawnersDirty();
    renderSpawnerEditor();
}

function deleteSpawnerSubpreset(idx) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Subpresets) {
        spawner.Subpresets.splice(idx, 1);
        checkSpawnersDirty();
        renderSpawnerEditor();
    }
}

function updateSpawnerSubpresetProperty(idx, prop, val) {
    const spawner = state.spawnersData.activeSpawner;
    if (spawner.Subpresets && spawner.Subpresets[idx]) {
        if (prop === 'Id' && typeof val === 'string') {
            val = val.replace(/\.json$/i, '');
        }
        spawner.Subpresets[idx][prop] = val;
        checkSpawnersDirty();
        if (prop === 'Id') {
            renderSpawnerEditor();
        }
    }
}

function checkSpawnersDirty() {
    const active = state.spawnersData.activeSpawner;
    const orig = state.spawnersData.originalSpawnerJson;
    
    state.spawnersData.dirty = (JSON.stringify(active) !== orig);
    updateDirtyStateIndicator();
}

// DB Select picker trigger for Spawners
function openSelectItemModalForSpawner(type, idx, subIdx = null) {
    state.spawnersData.activeSelectItemContext = { type, idx, subIdx };
    
    // Open select item modal
    document.getElementById('select-node-item-search').value = '';
    onSelectNodeItemSearch();
    document.getElementById('modal-select-node-item').classList.remove('hidden');
}

function selectSpawnerItemFromDb(itemId) {
    const ctx = state.spawnersData.activeSelectItemContext;
    if (!ctx) return;
    
    const spawner = state.spawnersData.activeSpawner;
    if (ctx.type === 'FixedItems' && spawner.FixedItems) {
        spawner.FixedItems[ctx.idx] = itemId;
    } else if (ctx.type === 'Items' && spawner.Items && spawner.Items[ctx.idx]) {
        spawner.Items[ctx.idx].Id = itemId;
    } else if (ctx.type === 'Nodes' && spawner.Nodes && spawner.Nodes[ctx.idx] && spawner.Nodes[ctx.idx].Ids) {
        spawner.Nodes[ctx.idx].Ids[ctx.subIdx] = itemId;
    }
    
    checkSpawnersDirty();
    renderSpawnerEditor();
    closeModal('modal-select-node-item');
    showToast('Предмет выбран', `Выбран предмет из базы: ${itemId}`, 'success');
}

// Triggers subfolder change when edited in header option select
function onSpawnerSubfolderChange() {
    const select = document.getElementById('spawner-override-subfolder-select');
    const folder = select.value || '_Global_misc';
    const fileName = state.spawnersData.activeFileName;
    
    state.spawnersData.activeSpawnerOverridePath = `${folder}/${fileName}`;
    checkSpawnersDirty();
    
    const hint = document.getElementById('spawner-override-path-hint');
    hint.textContent = `Путь: Override/${state.spawnersData.activeSpawnerOverridePath}`;
}

// Delete override file from Override directory
async function deleteActiveSpawnerOverride() {
    const fileName = state.spawnersData.activeFileName;
    const relPath = state.spawnersData.activeSpawnerOverridePath;
    if (!fileName || !relPath) return;
    
    const confirmMsg = _t('confirm_delete_spawner_override').replace('{relPath}', relPath);
    if (!confirm(confirmMsg)) {
        return;
    }
    
    try {
        const res = await fetch('/api/spawners/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileName, relativePath: relPath })
        });
        
        if (!res.ok) throw new Error('Server error deleting override file');
        
        showToast('Удалено', `Оверрайд ${relPath} успешно удален.`, 'success');
        
        // Reload spawners lists
        await fetchSpawners();
        state.spawnersData.activeFileName = '';
        state.spawnersData.activeSpawner = null;
        state.spawnersData.dirty = false;
        
        renderSpawnerTree();
        renderSpawnerEditor();
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка удаления', err.message, 'error');
    }
}

// Modal creating override template triggers
function openCreateSpawnerOverrideModal() {
    const modal = document.getElementById('modal-create-spawner');
    if (!modal) return;
    
    const fileName = state.spawnersData.activeFileName;
    document.getElementById('create-spawner-template-name').value = fileName;
    
    const datalist = document.getElementById('create-spawner-subfolders-datalist');
    datalist.innerHTML = '';
    state.spawnersData.overrideDirs.forEach(dir => {
        const opt = document.createElement('option');
        opt.value = dir;
        datalist.appendChild(opt);
    });
    // Guess default folder by prefix
    let bestFolder = '_Global_misc';
    if (fileName.startsWith('Buildings-Airfield_Hangar-')) bestFolder = 'Airfields';
    else if (fileName.startsWith('Buildings-Armory-Prison-')) bestFolder = '_Armed_NPC';
    else if (fileName.startsWith('Buildings-Armory-Secret_Bunker-')) bestFolder = '_Global_SB';
    else if (fileName.includes('World_Shelf')) bestFolder = '_Global_Shelf';
    else if (fileName.includes('CardBox')) bestFolder = '_Global_misc';
    else if (fileName.includes('Trash')) bestFolder = '_Global_misc';
    else if (fileName.includes('Crate')) bestFolder = '_Global_Crates';
    else if (fileName.includes('Military')) bestFolder = '_Global_Military';
    
    document.getElementById('create-spawner-subfolder-input').value = bestFolder;
    modal.classList.remove('hidden');
}

async function submitCreateSpawnerOverride() {
    const input = document.getElementById('create-spawner-subfolder-input');
    let folder = input.value.trim() || '_Global_misc';
    
    // Sanitize folder name
    folder = folder.replace(/[\\\/:\*\?"<>\|]/g, '_');
    
    const fileName = state.spawnersData.activeFileName;
    
    if (!fileName) return;
    
    const relPath = `${folder}/${fileName}`;
    
    // Sanitize Subpresets before saving
    const activeSpawner = state.spawnersData.activeSpawner;
    if (activeSpawner && activeSpawner.Subpresets && Array.isArray(activeSpawner.Subpresets)) {
        activeSpawner.Subpresets.forEach(sub => {
            if (sub && sub.Id && typeof sub.Id === 'string') {
                sub.Id = sub.Id.replace(/\.json$/i, '');
            }
        });
    }
    
    try {
        const res = await fetch('/api/spawners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName,
                relativePath: relPath,
                data: activeSpawner
            })
        });
        
        if (!res.ok) throw new Error('Server error creating override preset');
        showToast('Оверрайд создан', `Успешно создан оверрайд спавна ${relPath}!`, 'success');
        closeModal('modal-create-spawner');
        
        // Reset default filter since we now have an override and want to edit it
        if (state.spawnersData.filterDefault) {
            state.spawnersData.filterDefault = false;
            const btnD = document.getElementById('btn-filter-state-default');
            if (btnD) btnD.classList.remove('active');
        }
        
        // Reload all
        await fetchSpawners();
        state.spawnersData.activeFileName = fileName;
        state.spawnersData.activeSpawnerOverridePath = relPath;
        state.spawnersData.dirty = false;
        
        renderSpawnerTree();
        renderSpawnerEditor();
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка создания оверрайда', err.message, 'error');
    }
}

async function saveSpawner() {
    const fileName = state.spawnersData.activeFileName;
    const relPath = state.spawnersData.activeSpawnerOverridePath;
    const spawner = state.spawnersData.activeSpawner;
    if (!fileName || !spawner) return;
    
    if (state.spawnersData.jsonInvalid) {
        showToast('Ошибка сохранения', 'Невозможно сохранить файл, пока JSON содержит ошибки!', 'error');
        return;
    }
    
    // Front validation: QuantityMin <= QuantityMax
    if (('QuantityMin' in spawner) && ('QuantityMax' in spawner)) {
        if (parseInt(spawner.QuantityMin) > parseInt(spawner.QuantityMax)) {
            showToast('Ошибка валидации', 'Минимальное количество (QuantityMin) не может быть больше максимального (QuantityMax)!', 'error');
            return;
        }
    }
    
    // Probability boundaries
    if ('Probability' in spawner) {
        const prob = parseInt(spawner.Probability);
        if (prob < 0 || prob > 100) {
            showToast('Ошибка валидации', 'Вероятность спавна должна быть в пределах от 0 до 100%!', 'error');
            return;
        }
    }
    
    // If not overridden yet, prompt to create
    if (!relPath) {
        openCreateSpawnerOverrideModal();
        return;
    }
    
    // Sanitize Subpresets before saving
    if (spawner && spawner.Subpresets && Array.isArray(spawner.Subpresets)) {
        spawner.Subpresets.forEach(sub => {
            if (sub && sub.Id && typeof sub.Id === 'string') {
                sub.Id = sub.Id.replace(/\.json$/i, '');
            }
        });
    }
    
    try {
        const res = await fetch('/api/spawners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName,
                relativePath: relPath,
                data: spawner
            })
        });
        
        if (!res.ok) throw new Error('Server error saving spawner preset');
        
        state.spawnersData.originalSpawnerJson = JSON.stringify(spawner);
        state.spawnersData.dirty = false;
        
        showToast('Сохранено', `Пресет спавна ${relPath} успешно сохранен!`, 'success');
        updateDirtyStateIndicator();
    } catch (err) {
        showToast('Ошибка сохранения', err.message, 'error');
    }
}

// Toggle sidebar collapsed state and store preference
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    const isCollapsed = sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', isCollapsed ? 'true' : 'false');
}

// Toggle spawner search and filter panel collapse and store preference
function toggleSpawnerSearchCollapse() {
    const body = document.getElementById('spawner-search-body');
    const btn = document.getElementById('spawner-search-toggle-btn');
    if (!body || !btn) return;
    
    const isCollapsed = body.classList.toggle('hidden');
    btn.textContent = isCollapsed ? '[+] ' + _t('btn_expand') : '[-] ' + _t('btn_collapse');
    localStorage.setItem('spawner-search-collapsed', isCollapsed ? 'true' : 'false');
}

async function refreshLootData() {
    const btn = document.querySelector('.sidebar-loot-folder-card .btn-accent');
    let svg = null;
    if (btn) {
        svg = btn.querySelector('svg');
        if (svg) svg.style.animation = 'spin 0.8s linear infinite';
    }
    
    try {
        showToast('Обновление', 'Повторное чтение файлов с диска...', 'info');
        await loadAllData();
        showToast('Успех', 'Все данные успешно обновлены!', 'success');
    } catch (err) {
        showToast('Ошибка обновления', err.message, 'error');
    } finally {
        if (svg) svg.style.animation = '';
    }
}

// --- CUSTOM LOOT DIRECTORY MODAL ACTIONS ---

function openConfigureLootDirModal() {
    const input = document.getElementById('custom-loot-dir-input');
    if (input) {
        input.value = state.customLootDir || '';
    }
    document.getElementById('modal-configure-loot-dir').classList.remove('hidden');
}

async function submitConfigureLootDir() {
    const input = document.getElementById('custom-loot-dir-input');
    const pathValue = input ? input.value.trim() : '';
    
    try {
        const res = await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customLootDir: pathValue || null })
        });
        
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Ошибка сохранения директории');
        }
        
        state.customLootDir = data.customLootDir || null;
        renderCustomLootDirStatus();
        closeModal('modal-configure-loot-dir');
        showToast('Успех', data.message || 'Путь к директории Loot сохранен.', 'success');
        
        // Dynamic client-side reload of all items, cooldowns, nodes, and presets
        await loadAllData();
    } catch (err) {
        showToast('Ошибка настройки пути', err.message, 'error');
    }
}

async function resetLootDirToDefault() {
    try {
        const res = await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customLootDir: null })
        });
        
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Ошибка при сбросе директории');
        }
        
        state.customLootDir = null;
        renderCustomLootDirStatus();
        closeModal('modal-configure-loot-dir');
        showToast('Сброшено', 'Путь сброшен по умолчанию. Загружены стандартные файлы.', 'success');
        
        // Reload all data from original default workspace folders
        await loadAllData();
    } catch (err) {
        showToast('Ошибка сброса', err.message, 'error');
    }
}

// --- ZONE MODIFIERS LOGIC & RENDERING ---

const ZM_CENTER_X = -142798.922;
const ZM_CENTER_Y = -142780.359;
const ZM_SCALE_X = 0.0007086597262557765;
const ZM_SCALE_Y = -0.0007086778791895953;

function zmGameToPixel(gx, gy) {
    const deltaX = gx - ZM_CENTER_X;
    const deltaY = gy - ZM_CENTER_Y;
    const calculatedX = 540 + (deltaX * ZM_SCALE_X);
    const calculatedY = 540 + (deltaY * ZM_SCALE_Y);
    return { x: 1080 - calculatedX, y: calculatedY };
}

function zmPixelToGame(px, py) {
    const calculatedX = 1080 - px;
    const deltaX = (calculatedX - 540) / ZM_SCALE_X;
    const deltaY = (py - 540) / ZM_SCALE_Y;
    return { x: deltaX + ZM_CENTER_X, y: deltaY + ZM_CENTER_Y };
}

function parseCoordsString(str) {
    if (!str) return { x: 0, y: 0 };
    const matchX = str.match(/X=([-+]?\d+\.?\d*)/i);
    const matchY = str.match(/Y=([-+]?\d+\.?\d*)/i);
    return {
        x: matchX ? parseFloat(matchX[1]) : 0,
        y: matchY ? parseFloat(matchY[1]) : 0
    };
}

function formatCoordsString(x, y) {
    return `X=${x.toFixed(3)} Y=${y.toFixed(3)}`;
}

function getModifierColor(name) {
    const n = (name || '').toLowerCase();
    if (n.includes('safe')) return { fill: 'rgba(0, 230, 118, 0.22)', stroke: 'rgb(0, 230, 118)' };
    if (n.includes('low')) return { fill: 'rgba(255, 214, 0, 0.22)', stroke: 'rgb(255, 214, 0)' };
    if (n.includes('high')) return { fill: 'rgba(255, 107, 107, 0.22)', stroke: 'rgb(255, 107, 107)' };
    if (n.includes('off')) return { fill: 'rgba(255, 23, 68, 0.22)', stroke: 'rgb(255, 23, 68)' };
    if (n.includes('super')) return { fill: 'rgba(0, 229, 255, 0.22)', stroke: 'rgb(0, 229, 255)' };
    if (n.includes('coal')) return { fill: 'rgba(130, 146, 166, 0.22)', stroke: 'rgb(130, 146, 166)' };
    if (n.includes('resource')) return { fill: 'rgba(186, 104, 200, 0.22)', stroke: 'rgb(186, 104, 200)' };
    return { fill: 'rgba(0, 229, 255, 0.15)', stroke: 'rgb(0, 229, 255)' };
}

function getSpawnerFolderColor(name, idx) {
    const hue = (idx * 137.5) % 360; // golden angle distribution
    return {
        fill: `hsla(${hue}, 85%, 60%, 0.18)`,
        stroke: `hsl(${hue}, 85%, 60%)`
    };
}

async function fetchZoneModifiers() {
    try {
        const res = await fetch('/api/zone-modifiers');
        if (!res.ok) throw new Error('Failed to load zone modifiers');
        const data = await res.json();
        
        state.zoneModifiersData.modifiers = data.Modifiers || [];
        // Ensure every zone has a name for robust rendering
        state.zoneModifiersData.modifiers.forEach((mod) => {
            if (mod.Zones) {
                mod.Zones.forEach((zone, zIdx) => {
                    if (!zone.Name) {
                        zone.Name = `Zone_${zIdx + 1}`;
                    }
                });
            }
        });
        
        if (state.zoneModifiersData.modifiers.length > 0) {
            state.zoneModifiersData.activeModifierIndex = 0;
            state.zoneModifiersData.selectedZoneIndex = -1;
        } else {
            state.zoneModifiersData.activeModifierIndex = -1;
            state.zoneModifiersData.selectedZoneIndex = -1;
        }
        state.zoneModifiersData.dirty = false;
    } catch (err) {
        console.error('Error fetching zone modifiers:', err);
        showToast('Ошибка загрузки', 'Не удалось загрузить модификаторы зон', 'error');
    }
}

async function fetchSpawnerZones() {
    try {
        const res = await fetch('/api/spawner-zones');
        if (!res.ok) throw new Error('Failed to load spawner zones');
        const data = await res.json();
        
        state.zoneModifiersData.spawnersFolders = data.folders || [];
        // Ensure every zone in spawner folders has a name for robust rendering
        state.zoneModifiersData.spawnersFolders.forEach((folder) => {
            if (folder.zones) {
                folder.zones.forEach((zone, zIdx) => {
                    if (!zone.Name) {
                        zone.Name = `Zone_${zIdx + 1}`;
                    }
                });
            }
        });
        
        if (state.zoneModifiersData.spawnersFolders.length > 0) {
            state.zoneModifiersData.activeFolderIndex = 0;
        } else {
            state.zoneModifiersData.activeFolderIndex = -1;
        }
    } catch (err) {
        console.error('Error fetching spawner zones:', err);
        showToast('Ошибка загрузки', 'Не удалось загрузить зоны Spawners', 'error');
    }
}

async function saveZoneModifiers() {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) return;
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        try {
            const res = await fetch('/api/spawner-zones', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subfolder: folder.name,
                    data: { Zones: folder.zones }
                })
            });
            
            if (!res.ok) throw new Error(`Server failed to save zones for ${folder.name}`);
            
            state.zoneModifiersData.dirty = false;
            showToast('Успех', `Зоны для папки ${folder.name} успешно сохранены!`, 'success');
            updateDirtyStateIndicator();
            renderZoneModifiers();
            drawZmCanvas();
        } catch (err) {
            showToast('Ошибка сохранения', err.message, 'error');
        }
    } else {
        try {
            const res = await fetch('/api/zone-modifiers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Modifiers: state.zoneModifiersData.modifiers })
            });
            
            if (!res.ok) throw new Error('Server failed to save zone modifiers');
            
            state.zoneModifiersData.dirty = false;
            showToast('Успех', 'Модификаторы зон успешно сохранены в GeneralZoneModifiers.json', 'success');
            updateDirtyStateIndicator();
            renderZoneModifiers();
            drawZmCanvas();
        } catch (err) {
            showToast('Ошибка сохранения', err.message, 'error');
        }
    }
}

function renderZoneModifiers() {
    const listEl = document.getElementById('zm-modifiers-list');
    const titleEl = document.getElementById('zm-list-title');
    const addBtn = document.getElementById('zm-btn-add-modifier');
    const activeCard = document.getElementById('zm-active-card');
    
    if (!listEl) return;
    
    listEl.innerHTML = '';
    const isSp = state.zoneModifiersData.mode === 'spawners';
    
    if (isSp) {
        if (titleEl) titleEl.textContent = 'Папки Spawners';
        if (addBtn) addBtn.classList.add('hidden');
        
        const folders = state.zoneModifiersData.spawnersFolders || [];
        const activeFolderIdx = state.zoneModifiersData.activeFolderIndex;
        
        folders.forEach((folder, idx) => {
            const item = document.createElement('div');
            item.className = `zm-modifier-item ${idx === activeFolderIdx ? 'active' : ''}`;
            item.onclick = () => selectSpawnerFolder(idx);
            
            const isHidden = folder.hidden === true;
            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; flex-grow: 1;">
                    <button class="zm-visibility-btn ${isHidden ? 'hidden-state' : ''}" onclick="toggleFolderVisibility(${idx}, event)" title="${isHidden ? 'Показать зоны папки' : 'Скрыть зоны папки'}">
                        ${isHidden ? `
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                        ` : `
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        `}
                    </button>
                    <span class="zm-mod-name-label">${folder.name}</span>
                </div>
                <span class="zm-mod-zones-badge">${(folder.zones || []).length} ${_t('zones_count')}</span>
            `;
            listEl.appendChild(item);
        });
        
        if (activeFolderIdx >= 0 && activeFolderIdx < folders.length) {
            activeCard.classList.remove('hidden');
            const folder = folders[activeFolderIdx];
            
            document.getElementById('zm-active-title').textContent = `Зоны папки ${folder.name}`;
            document.getElementById('zm-btn-delete-modifier').classList.add('hidden');
            document.getElementById('zm-active-name-group').classList.add('hidden');
            document.getElementById('zm-multipliers-list-container').classList.add('hidden');
            
            renderZonesList(folder.zones || []);
        } else {
            activeCard.classList.add('hidden');
        }
        
    } else {
        if (titleEl) titleEl.textContent = _t('zm_modifiers_title');
        if (addBtn) addBtn.classList.remove('hidden');
        
        const mods = state.zoneModifiersData.modifiers;
        const activeIdx = state.zoneModifiersData.activeModifierIndex;
        
        mods.forEach((mod, idx) => {
            const item = document.createElement('div');
            item.className = `zm-modifier-item ${idx === activeIdx ? 'active' : ''}`;
            item.onclick = () => selectModifier(idx);
            
            const isHidden = mod.hidden === true;
            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; flex-grow: 1;">
                    <button class="zm-visibility-btn ${isHidden ? 'hidden-state' : ''}" onclick="toggleModifierVisibility(${idx}, event)" title="${isHidden ? 'Показать все зоны модификатора' : 'Скрыть все зоны модификатора'}">
                        ${isHidden ? `
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                <line x1="1" y1="1" x2="23" y2="23"></line>
                            </svg>
                        ` : `
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        `}
                    </button>
                    <span class="zm-mod-name-label">${mod.Name || _t('no_name')}</span>
                </div>
                <span class="zm-mod-zones-badge">${(mod.Zones || []).length} ${_t('zones_count')}</span>
            `;
            listEl.appendChild(item);
        });
        
        if (activeIdx >= 0 && activeIdx < mods.length) {
            activeCard.classList.remove('hidden');
            const activeMod = mods[activeIdx];
            
            document.getElementById('zm-active-title').textContent = _t('zm_active_title');
            document.getElementById('zm-btn-delete-modifier').classList.remove('hidden');
            document.getElementById('zm-active-name-group').classList.remove('hidden');
            document.getElementById('zm-multipliers-list-container').classList.remove('hidden');
            
            document.getElementById('zm-mod-name').value = activeMod.Name || '';
            
            // Multipliers
            document.getElementById('zm-mult-spawn-prob').value = activeMod.SpawnerProbabilityMultiplier !== undefined ? activeMod.SpawnerProbabilityMultiplier : '';
            document.getElementById('zm-mult-exam-prob').value = activeMod.ExamineSpawnerProbabilityMultiplier !== undefined ? activeMod.ExamineSpawnerProbabilityMultiplier : '';
            document.getElementById('zm-mult-exam-qty').value = activeMod.ExamineSpawnerQuantityMultiplier !== undefined ? activeMod.ExamineSpawnerQuantityMultiplier : '';
            document.getElementById('zm-mult-spawn-exp').value = activeMod.SpawnerExpirationTimeInMinutesMultiplier !== undefined ? activeMod.SpawnerExpirationTimeInMinutesMultiplier : '';
            document.getElementById('zm-mult-exam-exp').value = activeMod.ExamineSpawnerExpirationTimeMultiplier !== undefined ? activeMod.ExamineSpawnerExpirationTimeMultiplier : '';
            
            renderZonesList(activeMod.Zones || []);
        } else {
            activeCard.classList.add('hidden');
        }
    }
    
    // Update bottom status bar
    updateZmStatus();
}

function renderZonesList(zones) {
    const zonesListEl = document.getElementById('zm-zones-list');
    if (!zonesListEl) return;
    zonesListEl.innerHTML = '';
    
    if (zones.length === 0) {
        zonesListEl.innerHTML = `<div class="no-results font-secondary" style="padding: 10px; font-size:12px;">${_t('no_zones_message')}</div>`;
    } else {
        zones.forEach((zone, zIdx) => {
            const zItem = document.createElement('div');
            zItem.className = `zm-zone-item ${zIdx === state.zoneModifiersData.selectedZoneIndex ? 'selected' : ''}`;
            zItem.onclick = (e) => {
                if (e.target.tagName === 'INPUT' || e.target.closest('button')) return;
                selectZone(zIdx);
            };
            
            const isZoneHidden = zone.hidden === true;
            zItem.innerHTML = `
                <div class="zm-zone-header" style="display: flex; align-items: center; gap: 8px;">
                    <input type="text" class="zm-zone-name-input" value="${zone.Name || ''}" 
                        placeholder="${_t('placeholder_zone_name')}" onchange="updateZoneName(${zIdx}, this.value)" style="flex-grow: 1; min-width: 0;">
                    <div class="zm-zone-actions" style="display: flex; gap: 6px; align-items: center; flex-shrink: 0;">
                        <button class="zm-visibility-btn ${isZoneHidden ? 'hidden-state' : ''}" onclick="toggleZoneVisibility(${zIdx}, event)" title="${isZoneHidden ? _t('tooltip_show_zone_on_map') : _t('tooltip_hide_zone_from_map')}" style="padding: 4px;">
                            ${isZoneHidden ? `
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                            ` : `
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            `}
                        </button>
                        <button class="btn btn-danger btn-xs" onclick="deleteZone(${zIdx})" style="padding: 4px 8px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center;" title="${_t('tooltip_delete_zone')}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="margin-right: 4px;">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                            ${_t('btn_delete')}
                        </button>
                    </div>
                </div>
                <div class="zm-zone-coords-row">
                    <div class="zm-zone-coords-col">
                        <span>TopLeft:</span>
                        <input type="text" class="zm-zone-coord-input" value="${zone.TopLeft || ''}" 
                            onchange="updateZoneCoordinate(${zIdx}, 'TopLeft', this.value)">
                    </div>
                    <div class="zm-zone-coords-col">
                        <span>BottomRight:</span>
                        <input type="text" class="zm-zone-coord-input" value="${zone.BottomRight || ''}" 
                            onchange="updateZoneCoordinate(${zIdx}, 'BottomRight', this.value)">
                    </div>
                </div>
            `;
            zonesListEl.appendChild(zItem);
        });
    }
}

function selectModifier(idx) {
    state.zoneModifiersData.activeModifierIndex = idx;
    state.zoneModifiersData.selectedZoneIndex = -1; // Reset zone selection
    renderZoneModifiers();
    drawZmCanvas();
}

function selectSpawnerFolder(idx) {
    state.zoneModifiersData.activeFolderIndex = idx;
    state.zoneModifiersData.selectedZoneIndex = -1; // Reset zone selection
    renderZoneModifiers();
    drawZmCanvas();
}

function selectZone(idx) {
    state.zoneModifiersData.selectedZoneIndex = idx;
    renderZoneModifiers();
    drawZmCanvas();
    
    // Auto-scroll the map to center the selected zone
    centerMapOnZone(idx);
}

function centerMapOnZone(idx) {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    let zone = null;
    if (isSp) {
        const activeFolderIdx = state.zoneModifiersData.activeFolderIndex;
        const folder = state.zoneModifiersData.spawnersFolders[activeFolderIdx];
        if (!folder || !folder.zones || !folder.zones[idx]) return;
        zone = folder.zones[idx];
    } else {
        const activeIdx = state.zoneModifiersData.activeModifierIndex;
        const mod = state.zoneModifiersData.modifiers[activeIdx];
        if (!mod || !mod.Zones || !mod.Zones[idx]) return;
        zone = mod.Zones[idx];
    }
    
    const tl = parseCoordsString(zone.TopLeft);
    const br = parseCoordsString(zone.BottomRight);
    
    const tlPixel = zmGameToPixel(tl.x, tl.y);
    const brPixel = zmGameToPixel(br.x, br.y);
    
    const centerRawX = (tlPixel.x + brPixel.x) / 2;
    const centerRawY = (tlPixel.y + brPixel.y) / 2;
    
    const img = document.getElementById('zm-map-image');
    const container = document.getElementById('zm-map-container');
    if (!img || !container) return;
    
    // Scale raw map position to container scroll width/height
    const ratioX = img.clientWidth / 1080;
    const ratioY = img.clientHeight / 1080;
    
    const scrollX = centerRawX * ratioX - container.clientWidth / 2;
    const scrollY = centerRawY * ratioY - container.clientHeight / 2;
    
    container.scrollTo({
        left: Math.max(0, scrollX),
        top: Math.max(0, scrollY),
        behavior: 'smooth'
    });
}

function addNewModifier() {
    const Counter = state.zoneModifiersData.modifiers.length + 1;
    state.zoneModifiersData.modifiers.push({
        Name: `CustomModifier_${Counter}`,
        Zones: [],
        SpawnerProbabilityMultiplier: 1.0,
        ExamineSpawnerProbabilityMultiplier: 1.0,
        ExamineSpawnerQuantityMultiplier: 1.0,
        SpawnerExpirationTimeInMinutesMultiplier: 1.0,
        ExamineSpawnerExpirationTimeMultiplier: 1.0
    });
    
    state.zoneModifiersData.activeModifierIndex = state.zoneModifiersData.modifiers.length - 1;
    state.zoneModifiersData.selectedZoneIndex = -1;
    state.zoneModifiersData.dirty = true;
    
    showToast('Успех', 'Добавлен новый модификатор. Задайте его параметры.', 'success');
    updateDirtyStateIndicator();
    renderZoneModifiers();
    drawZmCanvas();
}

function deleteActiveModifier() {
    const idx = state.zoneModifiersData.activeModifierIndex;
    if (idx < 0) return;
    
    state.zoneModifiersData.modifiers.splice(idx, 1);
    
    if (state.zoneModifiersData.modifiers.length > 0) {
        state.zoneModifiersData.activeModifierIndex = 0;
    } else {
        state.zoneModifiersData.activeModifierIndex = -1;
    }
    
    state.zoneModifiersData.selectedZoneIndex = -1;
    state.zoneModifiersData.dirty = true;
    
    showToast('Удалено', 'Модификатор удален.', 'warning');
    updateDirtyStateIndicator();
    renderZoneModifiers();
    drawZmCanvas();
}

function onActiveModifierNameChange(val) {
    const idx = state.zoneModifiersData.activeModifierIndex;
    if (idx < 0) return;
    
    state.zoneModifiersData.modifiers[idx].Name = val;
    state.zoneModifiersData.dirty = true;
    
    // Throttle list label update to avoid constant re-rendering
    const items = document.querySelectorAll('.zm-modifier-item');
    if (items[idx]) {
        const label = items[idx].querySelector('.zm-mod-name-label');
        if (label) label.textContent = val || _t('no_name');
    }
    
    updateDirtyStateIndicator();
    updateZmStatus();
}

function onMultiplierChange(property, val) {
    const idx = state.zoneModifiersData.activeModifierIndex;
    if (idx < 0) return;
    
    const parsedVal = val === '' ? undefined : parseFloat(val);
    state.zoneModifiersData.modifiers[idx][property] = parsedVal;
    state.zoneModifiersData.dirty = true;
    
    updateDirtyStateIndicator();
    updateZmStatus();
}

function addNewZoneToActiveModifier() {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) return;
        
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        if (!folder.zones) folder.zones = [];
        
        const Counter = folder.zones.length + 1;
        folder.zones.push({
            Name: `Zone_${Counter}`,
            TopLeft: 'X=0.000 Y=0.000',
            BottomRight: 'X=0.000 Y=0.000'
        });
        
        state.zoneModifiersData.selectedZoneIndex = folder.zones.length - 1;
        state.zoneModifiersData.dirty = true;
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        if (idx < 0) return;
        
        const mod = state.zoneModifiersData.modifiers[idx];
        if (!mod.Zones) mod.Zones = [];
        
        const Counter = mod.Zones.length + 1;
        mod.Zones.push({
            Name: `Zone_${Counter}`,
            TopLeft: 'X=0.000 Y=0.000',
            BottomRight: 'X=0.000 Y=0.000'
        });
        
        state.zoneModifiersData.selectedZoneIndex = mod.Zones.length - 1;
        state.zoneModifiersData.dirty = true;
    }
    
    showToast('Добавлено', 'Добавлена новая зона. Вы можете нарисовать ее на карте или ввести координаты вручную.', 'success');
    updateDirtyStateIndicator();
    renderZoneModifiers();
    drawZmCanvas();
}

function deleteZone(zIdx) {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) return;
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        if (!folder || !folder.zones) return;
        
        folder.zones.splice(zIdx, 1);
        state.zoneModifiersData.selectedZoneIndex = -1;
        state.zoneModifiersData.dirty = true;
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        if (idx < 0) return;
        
        const mod = state.zoneModifiersData.modifiers[idx];
        if (!mod || !mod.Zones) return;
        
        mod.Zones.splice(zIdx, 1);
        state.zoneModifiersData.selectedZoneIndex = -1;
        state.zoneModifiersData.dirty = true;
    }
    
    showToast('Удалено', 'Зона удалена.', 'warning');
    updateDirtyStateIndicator();
    renderZoneModifiers();
    drawZmCanvas();
}

// Keep explicit window exposure for key UI actions
window.deleteZone = deleteZone;

function updateZoneName(zIdx, val) {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) return;
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        if (folder && folder.zones && folder.zones[zIdx]) {
            folder.zones[zIdx].Name = val;
            state.zoneModifiersData.dirty = true;
            updateDirtyStateIndicator();
            drawZmCanvas();
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        if (idx < 0) return;
        
        const mod = state.zoneModifiersData.modifiers[idx];
        if (mod && mod.Zones && mod.Zones[zIdx]) {
            mod.Zones[zIdx].Name = val;
            state.zoneModifiersData.dirty = true;
            updateDirtyStateIndicator();
            drawZmCanvas();
        }
    }
    updateZmStatus();
}

function updateZoneCoordinate(zIdx, property, val) {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) return;
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        if (folder && folder.zones && folder.zones[zIdx]) {
            folder.zones[zIdx][property] = val;
            state.zoneModifiersData.dirty = true;
            updateDirtyStateIndicator();
            drawZmCanvas();
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        if (idx < 0) return;
        
        const mod = state.zoneModifiersData.modifiers[idx];
        if (mod && mod.Zones && mod.Zones[zIdx]) {
            mod.Zones[zIdx][property] = val;
            state.zoneModifiersData.dirty = true;
            updateDirtyStateIndicator();
            drawZmCanvas();
        }
    }
    updateZmStatus();
}

function toggleModifierVisibility(idx, event) {
    if (event) event.stopPropagation();
    const mod = state.zoneModifiersData.modifiers[idx];
    if (mod) {
        mod.hidden = !mod.hidden;
        renderZoneModifiers();
        drawZmCanvas();
    }
}

function toggleFolderVisibility(idx, event) {
    if (event) event.stopPropagation();
    const folder = state.zoneModifiersData.spawnersFolders[idx];
    if (folder) {
        folder.hidden = !folder.hidden;
        renderZoneModifiers();
        drawZmCanvas();
    }
}

function toggleZoneVisibility(zIdx, event) {
    if (event) event.stopPropagation();
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        const folder = state.zoneModifiersData.spawnersFolders[idx];
        if (folder && folder.zones && folder.zones[zIdx]) {
            folder.zones[zIdx].hidden = !folder.zones[zIdx].hidden;
            renderZoneModifiers();
            drawZmCanvas();
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        const mod = state.zoneModifiersData.modifiers[idx];
        if (mod && mod.Zones && mod.Zones[zIdx]) {
            mod.Zones[zIdx].hidden = !mod.Zones[zIdx].hidden;
            renderZoneModifiers();
            drawZmCanvas();
        }
    }
}

function setZoneModifiersMode(mode) {
    state.zoneModifiersData.mode = mode;
    
    const btnGen = document.getElementById('zm-btn-mode-general');
    const btnSp = document.getElementById('zm-btn-mode-spawners');
    
    if (mode === 'general') {
        if (btnGen) {
            btnGen.classList.add('active');
            btnGen.style.backgroundColor = 'var(--color-primary-glow)';
            btnGen.style.borderColor = 'var(--color-primary)';
            btnGen.style.color = '#fff';
        }
        if (btnSp) {
            btnSp.classList.remove('active');
            btnSp.style.backgroundColor = '';
            btnSp.style.borderColor = '';
            btnSp.style.color = '';
        }
    } else {
        if (btnSp) {
            btnSp.classList.add('active');
            btnSp.style.backgroundColor = 'var(--color-primary-glow)';
            btnSp.style.borderColor = 'var(--color-primary)';
            btnSp.style.color = '#fff';
        }
        if (btnGen) {
            btnGen.classList.remove('active');
            btnGen.style.backgroundColor = '';
            btnGen.style.borderColor = '';
            btnGen.style.color = '';
        }
    }
    
    state.zoneModifiersData.selectedZoneIndex = -1;
    
    renderZoneModifiers();
    drawZmCanvas();
    updateDirtyStateIndicator();
}

// --- INTERACTIVE MAP CANVAS ENGINE ---

let zmMapInitialized = false;

function initZoneModifiersMap() {
    if (zmMapInitialized) {
        resizeZmCanvas();
        return;
    }
    
    const canvas = document.getElementById('zm-map-canvas');
    const img = document.getElementById('zm-map-image');
    const container = document.getElementById('zm-map-container');
    const coordsEl = document.getElementById('zm-map-coordinates');
    
    if (!canvas || !img || !container) return;
    
    // Sync sizes
    img.addEventListener('load', () => {
        state.zoneModifiersData.baseWidth = 0;
        state.zoneModifiersData.baseHeight = 0;
        state.zoneModifiersData.zoomScale = 1.0;
        const badge = document.getElementById('zm-zoom-badge');
        if (badge) badge.textContent = '100%';
        resizeZmCanvas();
    });
    window.addEventListener('resize', () => {
        state.zoneModifiersData.baseWidth = 0;
        state.zoneModifiersData.baseHeight = 0;
        if (state.zoneModifiersData.zoomScale === 1.0) {
            resizeZmCanvas();
        } else {
            applyZoom(state.zoneModifiersData.zoomScale);
        }
    });

    // Mouse wheel zoom
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.1 : -0.1;
        changeZoom(delta);
    }, { passive: false });
    
    // Set initial cursor state
    updateCursor();
 
    // Mouse interaction events
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        // Convert client offset to raw map coordinates (0-1080)
        const rx = (offsetX / canvas.width) * 1080;
        const ry = (offsetY / canvas.height) * 1080;
        
        // Convert raw map position to game coordinates
        const gameCoords = zmPixelToGame(rx, ry);
        if (coordsEl) {
            coordsEl.textContent = `X: ${gameCoords.x.toFixed(1)}, Y: ${gameCoords.y.toFixed(1)}`;
        }
        
        // Handle map panning drag
        if (state.zoneModifiersData.isPanning && state.zoneModifiersData.panStartMouse) {
            const dx = e.clientX - state.zoneModifiersData.panStartMouse.x;
            const dy = e.clientY - state.zoneModifiersData.panStartMouse.y;
            
            container.scrollLeft = state.zoneModifiersData.panStartScroll.left - dx;
            container.scrollTop = state.zoneModifiersData.panStartScroll.top - dy;
            return;
        }
        
        // Handle active drawing dragging
        if (state.zoneModifiersData.isDrawing && state.zoneModifiersData.isDragging) {
            state.zoneModifiersData.drawingEnd = { x: offsetX, y: offsetY };
            drawZmCanvas();
        }
    });
    
    canvas.addEventListener('mouseleave', () => {
        if (coordsEl) coordsEl.textContent = 'X: ---, Y: ---';
        
        if (state.zoneModifiersData.isPanning) {
            state.zoneModifiersData.isPanning = false;
            state.zoneModifiersData.panStartMouse = null;
            state.zoneModifiersData.panStartScroll = null;
            updateCursor();
        }
    });
    
    canvas.addEventListener('mousedown', (e) => {
        if (!state.zoneModifiersData.isDrawing) {
            e.preventDefault(); // Prevents browser default drag-and-drop and text selection interference
            // Not in drawing mode -> Start map panning!
            state.zoneModifiersData.isPanning = true;
            state.zoneModifiersData.panStartMouse = { x: e.clientX, y: e.clientY };
            state.zoneModifiersData.panStartScroll = {
                left: container.scrollLeft,
                top: container.scrollTop
            };
            updateCursor();
            return;
        }
        
        const rect = canvas.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        state.zoneModifiersData.isDragging = true;
        state.zoneModifiersData.drawingStart = { x: offsetX, y: offsetY };
        state.zoneModifiersData.drawingEnd = { x: offsetX, y: offsetY };
        
        drawZmCanvas();
    });
    
    canvas.addEventListener('mouseup', (e) => {
        if (state.zoneModifiersData.isPanning) {
            state.zoneModifiersData.isPanning = false;
            state.zoneModifiersData.panStartMouse = null;
            state.zoneModifiersData.panStartScroll = null;
            updateCursor();
            return;
        }
        
        if (!state.zoneModifiersData.isDrawing || !state.zoneModifiersData.isDragging) return;
        
        state.zoneModifiersData.isDragging = false;
        
        const rect = canvas.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        state.zoneModifiersData.drawingEnd = { x: offsetX, y: offsetY };
        
        // Stop drawing mode visually
        cancelDrawingZone();
        
        // Perform calculation
        const start = state.zoneModifiersData.drawingStart;
        const end = state.zoneModifiersData.drawingEnd;
        
        // Calculate size in raw pixels (0-1080)
        const startRaw = {
            x: (start.x / canvas.width) * 1080,
            y: (start.y / canvas.height) * 1080
        };
        const endRaw = {
            x: (end.x / canvas.width) * 1080,
            y: (end.y / canvas.height) * 1080
        };
        
        const minRawX = Math.min(startRaw.x, endRaw.x);
        const minRawY = Math.min(startRaw.y, endRaw.y);
        const maxRawX = Math.max(startRaw.x, endRaw.x);
        const maxRawY = Math.max(startRaw.y, endRaw.y);
        
        // Prevent registering simple single click as zone
        if (Math.abs(maxRawX - minRawX) < 2 && Math.abs(maxRawY - minRawY) < 2) {
            drawZmCanvas();
            return;
        }
        
        // Convert to Game Units
        const gameTL = zmPixelToGame(minRawX, minRawY);
        const gameBR = zmPixelToGame(maxRawX, maxRawY);
        
        const tlStr = formatCoordsString(gameTL.x, gameTL.y);
        const brStr = formatCoordsString(gameBR.x, gameBR.y);
        
        const isSp = state.zoneModifiersData.mode === 'spawners';
        if (isSp) {
            const activeFolderIdx = state.zoneModifiersData.activeFolderIndex;
            const folder = state.zoneModifiersData.spawnersFolders[activeFolderIdx];
            if (activeFolderIdx < 0 || !folder) {
                showToast('Внимание', 'Сначала выберите папку Spawners в списке слева.', 'warning');
                return;
            }
            
            let activeZIdx = state.zoneModifiersData.selectedZoneIndex;
            if (activeZIdx >= 0 && folder.zones && folder.zones[activeZIdx]) {
                const zone = folder.zones[activeZIdx];
                zone.TopLeft = tlStr;
                zone.BottomRight = brStr;
                state.zoneModifiersData.dirty = true;
                showToast('Успех', `Координаты зоны "${zone.Name}" успешно обновлены!`, 'success');
            } else {
                if (!folder.zones) folder.zones = [];
                const zNum = folder.zones.length + 1;
                const newZone = {
                    Name: `Zone_${zNum}`,
                    TopLeft: tlStr,
                    BottomRight: brStr
                };
                folder.zones.push(newZone);
                state.zoneModifiersData.selectedZoneIndex = folder.zones.length - 1;
                state.zoneModifiersData.dirty = true;
                showToast('Успех', `Нарисована и добавлена новая зона "${newZone.Name}"`, 'success');
            }
        } else {
            const activeModIdx = state.zoneModifiersData.activeModifierIndex;
            const activeMod = state.zoneModifiersData.modifiers[activeModIdx];
            
            if (activeModIdx < 0 || !activeMod) {
                showToast('Внимание', 'Сначала выберите или создайте модификатор в списке слева.', 'warning');
                return;
            }
            
            let activeZIdx = state.zoneModifiersData.selectedZoneIndex;
            
            if (activeZIdx >= 0 && activeMod.Zones && activeMod.Zones[activeZIdx]) {
                const zone = activeMod.Zones[activeZIdx];
                zone.TopLeft = tlStr;
                zone.BottomRight = brStr;
                state.zoneModifiersData.dirty = true;
                showToast('Успех', `Координаты зоны "${zone.Name}" успешно обновлены!`, 'success');
            } else {
                if (!activeMod.Zones) activeMod.Zones = [];
                const zNum = activeMod.Zones.length + 1;
                const newZone = {
                    Name: `Zone_${zNum}`,
                    TopLeft: tlStr,
                    BottomRight: brStr
                };
                activeMod.Zones.push(newZone);
                state.zoneModifiersData.selectedZoneIndex = activeMod.Zones.length - 1;
                state.zoneModifiersData.dirty = true;
                showToast('Успех', `Нарисована и добавлена новая зона "${newZone.Name}"`, 'success');
            }
        }
        
        updateDirtyStateIndicator();
        renderZoneModifiers();
        drawZmCanvas();
    });

    // Keyboard arrow keys scrolling navigation
    window.addEventListener('keydown', (e) => {
        if (state.activeTab !== 'zonemodifiers') return;
        
        // Ignore if focus is in an input or textarea
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable) {
            return;
        }
        
        const scrollStep = 55; // Pixels to scroll per arrow key press
        
        if (e.key === 'ArrowLeft' || e.key === 'Left') {
            e.preventDefault();
            container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight' || e.key === 'Right') {
            e.preventDefault();
            container.scrollBy({ left: scrollStep, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'Up') {
            e.preventDefault();
            container.scrollBy({ top: -scrollStep, behavior: 'smooth' });
        } else if (e.key === 'ArrowDown' || e.key === 'Down') {
            e.preventDefault();
            container.scrollBy({ top: scrollStep, behavior: 'smooth' });
        }
    });
    
    zmMapInitialized = true;
    resizeZmCanvas();
}

function resizeZmCanvas() {
    const img = document.getElementById('zm-map-image');
    const canvas = document.getElementById('zm-map-canvas');
    if (!img || !canvas) return;
    
    // Canvas dimensions should strictly match the rendered client size of image
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
    
    drawZmCanvas();
}

function drawZmCanvas() {
    const canvas = document.getElementById('zm-map-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const ratioX = canvas.width / 1080;
    const ratioY = canvas.height / 1080;
    
    const mods = state.zoneModifiersData.modifiers;
    const activeModIdx = state.zoneModifiersData.activeModifierIndex;
    const selectedZoneIdx = state.zoneModifiersData.selectedZoneIndex;
    
    // 1. Draw all zones of all modifiers (if enabled)
    if (state.zoneModifiersData.showZones !== false) {
        const isSp = state.zoneModifiersData.mode === 'spawners';
        if (isSp) {
            const folders = state.zoneModifiersData.spawnersFolders || [];
            const activeFolderIdx = state.zoneModifiersData.activeFolderIndex;
            
            folders.forEach((folder, fIdx) => {
                if (folder.hidden === true) return;
                const color = getSpawnerFolderColor(folder.name, fIdx);
                const zones = folder.zones || [];
                const isActiveFolder = fIdx === activeFolderIdx;
                
                zones.forEach((zone, zIdx) => {
                    if (zone.hidden === true) return;
                    const tl = parseCoordsString(zone.TopLeft);
                    const br = parseCoordsString(zone.BottomRight);
                    
                    const tlPixel = zmGameToPixel(tl.x, tl.y);
                    const brPixel = zmGameToPixel(br.x, br.y);
                    
                    const cx = tlPixel.x * ratioX;
                    const cy = tlPixel.y * ratioY;
                    const cw = (brPixel.x - tlPixel.x) * ratioX;
                    const ch = (brPixel.y - tlPixel.y) * ratioY;
                    
                    const isSelectedZone = isActiveFolder && zIdx === selectedZoneIdx;
                    
                    ctx.fillStyle = color.fill;
                    ctx.fillRect(cx, cy, cw, ch);
                    
                    ctx.strokeStyle = color.stroke;
                    ctx.lineWidth = isSelectedZone ? 3 : 1;
                    
                    if (isSelectedZone) {
                        ctx.setLineDash([5, 3]);
                        ctx.strokeRect(cx, cy, cw, ch);
                        ctx.setLineDash([]);
                        
                        ctx.shadowColor = color.stroke;
                        ctx.shadowBlur = 8;
                        ctx.strokeStyle = 'white';
                        ctx.strokeRect(cx, cy, cw, ch);
                        ctx.shadowBlur = 0;
                    } else {
                        ctx.strokeRect(cx, cy, cw, ch);
                    }
                    
                    if (Math.abs(cw) > 50 && Math.abs(ch) > 20) {
                        ctx.fillStyle = 'rgba(11, 12, 16, 0.75)';
                        ctx.fillRect(cx + 4, cy + 4, ctx.measureText(zone.Name).width + 8, 14);
                        
                        ctx.fillStyle = isSelectedZone ? 'var(--color-accent)' : 'white';
                        ctx.font = 'bold 9px monospace';
                        ctx.fillText(zone.Name, cx + 8, cy + 14);
                    }
                });
            });
        } else {
            mods.forEach((mod, modIdx) => {
                if (mod.hidden === true) return; // Skip drawing modifier zones if hidden
                const color = getModifierColor(mod.Name);
                const zones = mod.Zones || [];
                const isActiveMod = modIdx === activeModIdx;
                
                zones.forEach((zone, zIdx) => {
                    if (zone.hidden === true) return; // Skip drawing individual zone if hidden
                    const tl = parseCoordsString(zone.TopLeft);
                    const br = parseCoordsString(zone.BottomRight);
                    
                    const tlPixel = zmGameToPixel(tl.x, tl.y);
                    const brPixel = zmGameToPixel(br.x, br.y);
                    
                    const cx = tlPixel.x * ratioX;
                    const cy = tlPixel.y * ratioY;
                    const cw = (brPixel.x - tlPixel.x) * ratioX;
                    const ch = (brPixel.y - tlPixel.y) * ratioY;
                    
                    const isSelectedZone = isActiveMod && zIdx === selectedZoneIdx;
                    
                    ctx.fillStyle = color.fill;
                    ctx.fillRect(cx, cy, cw, ch);
                    
                    ctx.strokeStyle = color.stroke;
                    ctx.lineWidth = isSelectedZone ? 3 : 1;
                    
                    // Draw active zone border styled specially
                    if (isSelectedZone) {
                        ctx.setLineDash([5, 3]);
                        ctx.strokeRect(cx, cy, cw, ch);
                        ctx.setLineDash([]);
                        
                        // Draw a small neon glow highlight for selection
                        ctx.shadowColor = color.stroke;
                        ctx.shadowBlur = 8;
                        ctx.strokeStyle = 'white';
                        ctx.strokeRect(cx, cy, cw, ch);
                        ctx.shadowBlur = 0; // reset
                    } else {
                        ctx.strokeRect(cx, cy, cw, ch);
                    }
                    
                    // Draw label for the zone if it fits
                    if (Math.abs(cw) > 50 && Math.abs(ch) > 20) {
                        ctx.fillStyle = 'rgba(11, 12, 16, 0.75)';
                        ctx.fillRect(cx + 4, cy + 4, ctx.measureText(zone.Name).width + 8, 14);
                        
                        ctx.fillStyle = isSelectedZone ? 'var(--color-accent)' : 'white';
                        ctx.font = 'bold 9px monospace';
                        ctx.fillText(zone.Name, cx + 8, cy + 14);
                    }
                });
            });
        }
    }
    
    // 2. Draw temporary rectangle if in drawing mode and dragging
    if (state.zoneModifiersData.isDrawing && state.zoneModifiersData.isDragging) {
        const start = state.zoneModifiersData.drawingStart;
        const end = state.zoneModifiersData.drawingEnd;
        
        ctx.fillStyle = 'rgba(0, 229, 255, 0.12)';
        ctx.fillRect(start.x, start.y, end.x - start.x, end.y - start.y);
        
        ctx.strokeStyle = 'var(--color-accent)';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
        ctx.setLineDash([]);
        
        ctx.shadowColor = 'var(--color-accent)';
        ctx.shadowBlur = 10;
        ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
        ctx.shadowBlur = 0;
    }
}

function startDrawingZone() {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        if (idx < 0) {
            showToast('Внимание', 'Сначала выберите папку Spawners в списке.', 'warning');
            return;
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        if (idx < 0) {
            showToast('Внимание', 'Сначала создайте или выберите модификатор в списке.', 'warning');
            return;
        }
    }
    
    state.zoneModifiersData.isDrawing = true;
    updateCursor();
    
    const overlay = document.getElementById('zm-drawing-overlay');
    if (overlay) overlay.classList.remove('hidden');
    
    const btn = document.getElementById('btn-draw-zone-toggle');
    if (btn) {
        btn.textContent = 'Рисование активно...';
        btn.classList.remove('btn-accent');
        btn.classList.add('btn-secondary');
    }
}

function cancelDrawingZone() {
    state.zoneModifiersData.isDrawing = false;
    state.zoneModifiersData.isDragging = false;
    updateCursor();
    
    const overlay = document.getElementById('zm-drawing-overlay');
    if (overlay) overlay.classList.add('hidden');
    
    const btn = document.getElementById('btn-draw-zone-toggle');
    if (btn) {
        btn.textContent = 'Нарисовать на карте';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-accent');
    }
    
    drawZmCanvas();
}

function updateCursor() {
    const canvas = document.getElementById('zm-map-canvas');
    if (!canvas) return;
    if (state.zoneModifiersData.isDrawing) {
        canvas.style.cursor = 'crosshair';
    } else if (state.zoneModifiersData.isPanning) {
        canvas.style.cursor = 'grabbing';
    } else {
        canvas.style.cursor = 'grab';
    }
}

function changeZoom(delta) {
    let scale = (state.zoneModifiersData.zoomScale || 1.0) + delta;
    scale = Math.max(0.5, Math.min(4.0, scale)); // constrain between 50% and 400%
    applyZoom(scale);
}

function resetZoom() {
    applyZoom(1.0);
}

function applyZoom(scale) {
    state.zoneModifiersData.zoomScale = scale;
    
    const img = document.getElementById('zm-map-image');
    const wrapper = document.getElementById('zm-map-wrapper');
    const badge = document.getElementById('zm-zoom-badge');
    if (!img) return;
    
    if (badge) {
        badge.textContent = `${Math.round(scale * 100)}%`;
    }
    
    if (scale === 1.0) {
        img.style.maxWidth = '100%';
        img.style.maxHeight = 'calc(100vh - 170px)';
        img.style.width = 'auto';
        img.style.height = 'auto';
        if (wrapper) {
            wrapper.style.maxWidth = '100%';
            wrapper.style.maxHeight = '100%';
        }
    } else {
        if (!state.zoneModifiersData.baseWidth || !state.zoneModifiersData.baseHeight) {
            // Capture base dimensions when we first scale away from 1.0
            img.style.maxWidth = '100%';
            img.style.maxHeight = 'calc(100vh - 170px)';
            img.style.width = 'auto';
            img.style.height = 'auto';
            state.zoneModifiersData.baseWidth = img.clientWidth;
            state.zoneModifiersData.baseHeight = img.clientHeight;
        }
        
        img.style.maxWidth = 'none';
        img.style.maxHeight = 'none';
        img.style.width = (state.zoneModifiersData.baseWidth * scale) + 'px';
        img.style.height = (state.zoneModifiersData.baseHeight * scale) + 'px';
        if (wrapper) {
            wrapper.style.maxWidth = 'none';
            wrapper.style.maxHeight = 'none';
        }
    }
    
    resizeZmCanvas();
}

function toggleZonesVisibility(visible) {
    state.zoneModifiersData.showZones = visible;
    drawZmCanvas();
}

function setZmViewMode(viewMode) {
    state.zoneModifiersData.viewMode = viewMode || 'map'; // 'map' or 'json'
    
    const btnMap = document.getElementById('btn-zm-view-map');
    const btnJson = document.getElementById('btn-zm-view-json');
    if (btnMap) btnMap.classList.toggle('active', viewMode === 'map');
    if (btnJson) btnJson.classList.toggle('active', viewMode === 'json');
    
    const mapContainer = document.getElementById('zm-map-container');
    const jsonWrapper = document.getElementById('zm-json-wrapper');
    
    if (viewMode === 'json') {
        if (mapContainer) mapContainer.classList.add('hidden');
        if (jsonWrapper) jsonWrapper.classList.remove('hidden');
        
        // Hide overlay instructions in json mode
        const overlay = document.getElementById('zm-drawing-overlay');
        if (overlay) overlay.classList.add('hidden');
        
        // Populate the json textarea
        renderZmJsonTextarea();
    } else {
        if (mapContainer) mapContainer.classList.remove('hidden');
        if (jsonWrapper) jsonWrapper.classList.add('hidden');
        
        // Restore overlay instructions if drawing is active
        const overlay = document.getElementById('zm-drawing-overlay');
        if (overlay && state.zoneModifiersData.isDrawing) {
            overlay.classList.remove('hidden');
        }
        
        // Trigger redrawing and resizing of the canvas
        resizeZmCanvas();
    }
}

function renderZmJsonTextarea() {
    const textarea = document.getElementById('zm-json-textarea');
    if (!textarea) return;
    
    const isSp = state.zoneModifiersData.mode === 'spawners';
    let rawData = null;
    let filePath = '';
    
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        const folders = state.zoneModifiersData.spawnersFolders || [];
        if (idx >= 0 && idx < folders.length) {
            const folder = folders[idx];
            rawData = { Zones: folder.zones || [] };
            filePath = `Loot/Spawners/Presets/Override/${folder.name}/Zones.json`;
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        const mods = state.zoneModifiersData.modifiers || [];
        if (idx >= 0 && idx < mods.length) {
            const mod = mods[idx];
            // Format to match GeneralZoneModifiers structure
            rawData = {
                Name: mod.Name,
                SpawnerProbabilityMultiplier: mod.SpawnerProbabilityMultiplier,
                ExamineSpawnerProbabilityMultiplier: mod.ExamineSpawnerProbabilityMultiplier,
                ExamineSpawnerQuantityMultiplier: mod.ExamineSpawnerQuantityMultiplier,
                SpawnerExpirationTimeInMinutesMultiplier: mod.SpawnerExpirationTimeInMinutesMultiplier,
                ExamineSpawnerExpirationTimeMultiplier: mod.ExamineSpawnerExpirationTimeMultiplier,
                Zones: mod.Zones || []
            };
            filePath = `Loot/GeneralZoneModifiers.json`;
        }
    }
    
    if (rawData) {
        // Deep copy and strip helper keys like hidden
        const cleanData = JSON.parse(JSON.stringify(rawData));
        if (cleanData.Zones) {
            cleanData.Zones = cleanData.Zones.map(z => {
                const { hidden, ...rest } = z;
                return rest;
            });
        }
        textarea.value = JSON.stringify(cleanData, null, 4);
        
        // Also sync the json wrapper file path display
        const pathSpan = document.getElementById('zm-json-file-path');
        if (pathSpan) {
            pathSpan.textContent = filePath;
        }
    } else {
        textarea.value = 'Нет данных для отображения.';
    }
}

function updateZmStatus() {
    const isSp = state.zoneModifiersData.mode === 'spawners';
    let filePath = '---';
    let zonesCount = 0;
    
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        const folders = state.zoneModifiersData.spawnersFolders || [];
        if (idx >= 0 && idx < folders.length) {
            const folder = folders[idx];
            filePath = `Loot/Spawners/Presets/Override/${folder.name}/Zones.json`;
            zonesCount = (folder.zones || []).length;
        }
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        const mods = state.zoneModifiersData.modifiers || [];
        if (idx >= 0 && idx < mods.length) {
            const mod = mods[idx];
            filePath = `Loot/GeneralZoneModifiers.json [${_t('modifier_label')}: ${mod.Name || _t('no_name')}]`;
            zonesCount = (mod.Zones || []).length;
        }
    }
    
    const pathEl = document.getElementById('zm-status-file-path');
    const countEl = document.getElementById('zm-status-zones-count');
    
    if (pathEl) pathEl.textContent = filePath;
    if (countEl) countEl.textContent = zonesCount;
    
    // Also if JSON view is currently active, refresh its textarea value
    if (state.zoneModifiersData.viewMode === 'json') {
        renderZmJsonTextarea();
    }
}

function toggleZmJsonEditing(editable) {
    const textarea = document.getElementById('zm-json-textarea');
    const saveBtn = document.getElementById('btn-zm-json-save');
    const errorBadge = document.getElementById('zm-json-error-badge');
    
    if (!textarea) return;
    
    if (editable) {
        textarea.removeAttribute('readonly');
        textarea.style.borderColor = 'var(--color-accent)';
        textarea.style.boxShadow = '0 0 10px var(--color-accent-glow)';
        textarea.style.cursor = 'text';
        if (saveBtn) {
            saveBtn.removeAttribute('disabled');
            saveBtn.style.opacity = '1';
            saveBtn.style.pointerEvents = 'auto';
        }
    } else {
        textarea.setAttribute('readonly', 'true');
        textarea.style.borderColor = '';
        textarea.style.boxShadow = '';
        textarea.style.cursor = 'default';
        if (saveBtn) {
            saveBtn.setAttribute('disabled', 'true');
            saveBtn.style.opacity = '0.5';
            saveBtn.style.pointerEvents = 'none';
        }
        if (errorBadge) errorBadge.classList.add('hidden');
        
        // Restore original JSON representation
        renderZmJsonTextarea();
    }
}

function onZmJsonInput() {
    const textarea = document.getElementById('zm-json-textarea');
    const saveBtn = document.getElementById('btn-zm-json-save');
    const errorBadge = document.getElementById('zm-json-error-badge');
    if (!textarea) return;
    
    const value = textarea.value.trim();
    try {
        JSON.parse(value);
        if (errorBadge) errorBadge.classList.add('hidden');
        if (saveBtn) {
            saveBtn.removeAttribute('disabled');
            saveBtn.style.opacity = '1';
            saveBtn.style.pointerEvents = 'auto';
        }
        textarea.style.borderColor = 'var(--color-accent)';
    } catch (err) {
        if (errorBadge) {
            errorBadge.classList.remove('hidden');
            errorBadge.textContent = `⚠️ Ошибка JSON: ${err.message}`;
        }
        if (saveBtn) {
            saveBtn.setAttribute('disabled', 'true');
            saveBtn.style.opacity = '0.5';
            saveBtn.style.pointerEvents = 'none';
        }
        textarea.style.borderColor = 'var(--color-danger)';
    }
}

async function saveZmJson() {
    const textarea = document.getElementById('zm-json-textarea');
    if (!textarea) return;
    
    const value = textarea.value.trim();
    let parsed = null;
    try {
        parsed = JSON.parse(value);
    } catch (err) {
        showToast('Ошибка валидации', 'Некорректный JSON код. Пожалуйста, исправьте ошибки.', 'error');
        return;
    }
    
    const isSp = state.zoneModifiersData.mode === 'spawners';
    
    if (isSp) {
        const idx = state.zoneModifiersData.activeFolderIndex;
        const folders = state.zoneModifiersData.spawnersFolders || [];
        if (idx < 0 || idx >= folders.length) return;
        
        if (!parsed.Zones || !Array.isArray(parsed.Zones)) {
            showToast('Ошибка валидации', 'Конфигурация Spawners Zones должна содержать массив "Zones".', 'error');
            return;
        }
        
        // Re-inject the fallback name check
        parsed.Zones.forEach((zone, zIdx) => {
            if (!zone.Name) {
                zone.Name = `Zone_${zIdx + 1}`;
            }
        });
        
        folders[idx].zones = parsed.Zones;
    } else {
        const idx = state.zoneModifiersData.activeModifierIndex;
        const mods = state.zoneModifiersData.modifiers || [];
        if (idx < 0 || idx >= mods.length) return;
        
        if (!parsed.Zones || !Array.isArray(parsed.Zones)) {
            showToast('Ошибка валидации', 'Конфигурация GeneralZoneModifiers должна содержать массив "Zones".', 'error');
            return;
        }
        
        // Re-inject the fallback name check
        parsed.Zones.forEach((zone, zIdx) => {
            if (!zone.Name) {
                zone.Name = `Zone_${zIdx + 1}`;
            }
        });
        
        // Update active modifier object properties
        const mod = mods[idx];
        if (parsed.Name) mod.Name = parsed.Name;
        if (parsed.SpawnerProbabilityMultiplier !== undefined) mod.SpawnerProbabilityMultiplier = parsed.SpawnerProbabilityMultiplier;
        if (parsed.ExamineSpawnerProbabilityMultiplier !== undefined) mod.ExamineSpawnerProbabilityMultiplier = parsed.ExamineSpawnerProbabilityMultiplier;
        if (parsed.ExamineSpawnerQuantityMultiplier !== undefined) mod.ExamineSpawnerQuantityMultiplier = parsed.ExamineSpawnerQuantityMultiplier;
        if (parsed.SpawnerExpirationTimeInMinutesMultiplier !== undefined) mod.SpawnerExpirationTimeInMinutesMultiplier = parsed.SpawnerExpirationTimeInMinutesMultiplier;
        if (parsed.ExamineSpawnerExpirationTimeMultiplier !== undefined) mod.ExamineSpawnerExpirationTimeMultiplier = parsed.ExamineSpawnerExpirationTimeMultiplier;
        mod.Zones = parsed.Zones;
    }
    
    // Mark dirty
    state.zoneModifiersData.dirty = true;
    updateDirtyStateIndicator();
    
    // Save to server immediately via API
    await saveZoneModifiers();
    
    // Turn off editing mode visually
    const toggle = document.getElementById('zm-json-edit-toggle');
    if (toggle) {
        toggle.checked = false;
        toggleZmJsonEditing(false);
    }
}

window.setZoneModifiersMode = setZoneModifiersMode;
window.toggleFolderVisibility = toggleFolderVisibility;
window.selectSpawnerFolder = selectSpawnerFolder;
window.cancelDrawingZone = cancelDrawingZone;
window.startDrawingZone = startDrawingZone;
window.addNewZoneToActiveModifier = addNewZoneToActiveModifier;
window.toggleZoneVisibility = toggleZoneVisibility;
window.toggleZonesVisibility = toggleZonesVisibility;
window.setZmViewMode = setZmViewMode;
window.toggleZmJsonEditing = toggleZmJsonEditing;
window.onZmJsonInput = onZmJsonInput;
window.saveZmJson = saveZmJson;
window.filterDefaultNodesList = filterDefaultNodesList;
window.copyToClipboard = copyToClipboard;


