define([],
function() {
    
    /*
    var dummy_config = {
        entity_name : 
        //string = key of this object in all_config, name of objectstore in IDB
        //for - accessing this object 
        
        'rest_api_url': '/coco/api/v2/village/',
        //string - the rest url for this entity
    
        'dashboard_display': {
            listing: false,         //whether to provide listing option for this entity on dashboard
            add: false              //whether to provide add option for this entity on dashboard
        },
    
        -----------------------------------Listing configs---------------------------------
        page_header: 'Village',  
        //string = The name that needs to shown in headers 

        list_table_header_template: 'village_table_template',  
        //HTML template - The id of template used as coloumn headers in list page

        list_table_row_template: 'village_list_item_template',  
        //HTML template - The id of template used to create rows of list table. 
        //This template is passed the model json.
        -----------------------------------------------------------------------------------
    
        ----------------------------------Form configs-------------------------------------
        foreign_entities: {
            f_entity_name:{         //the entity_name of foreign element
                attribute_name:{    //the attribute name of this foreign element in json
                    
                    'placeholder': 'string - the id of element in form's html where the dropdown of this f_entity is inserted',
                    
                    'name_field': 'string - the attribute name in f_entity's json which needs to be shown in its dropdown',
                    
                    'dependency': [{    // whether this elements's dropdown depends on value of other form elements
                        'source_form_element': 'village',   // attribute name of source element in json
                        'dep_attr': 'village'   //the attribute name in json of dependent f_entity which refers to source f_entity
                        'src_attr' : //to compare dep_attr of dependent element with a particular attribute in source f_entity
                    }],
                    
                    'filter': { //whether to filter the objects of foreign entity before rendering into dropdown
                        attr: 'group',  //the attribute name in f_entity's json to filter on
                        value: null     //desired value of the attr
                    },
    
                    id_field: "person_id", // the name of id field for this f_entity in denormalised json                         
                }
            },
    
            f_entity_name:{         //the entity_name of foreign element
                attribute_name:{    //the attribute name of this foreign element in json
                    
                    'dependency': [{    // whether this elements's dropdown depends on value of other form elements
                        'source_form_element': 'village',   // attribute name of source element in json
                        'dep_attr': 'village'   //the attribute name in json of dependent f_entity which refers to source f_entity
                    }],

                    id_field: "person_id", // the name of id field for this f_entity in denormalised json     

                    //would not use options template to render its objects - would use the specfied template    
                    // won't be denormalised, wud be converted offline to online, 
                    //any field to be denormalised or converted offline to online can be declared - 
                    //this shd be clubbed and put as foreign entity of expanded.   
                    'expanded': { 
                        template: 'person_pma_template', // the template to use instead of options
                        placeholder: 'pmas',    // the id of placeholder in form's HTML
                        TODO: the following two should be merged and converted to same format as foreign_entities
                        denormalize: { // any field in expanded template to be denormalised     
                            "expressed_adoption_video": {
                                name_field: 'title' //used as key for name in denormalised object
                            }
                        },
                        foreign_fields: { // any more field in expanded template for offline to online conv
                            "expressed_adoption_video": {
                                entity_name: "video"  //the entity_name for this f_entity element
                            }
                        },
                        extra_fields: ["expressed_question", "interested", "expressed_adoption_video"]
                    }
                }
            }
        },    
        //object - describes the foreign keys in the json of this entity's model.
        //To convert between online offline namespaces, denormalize-normalize json    
    
        inline: {
            'entity': 'person',     //entity name of inline
    
            'default_num_rows': 10,         //default num of rows to show
    
            "template": "person_inline",    //id of template used to render inline
            //Include any jquery validation desired inside html of rows 
            //TODO: need to explain the <%index%> tags required in inlines
    
            "foreign_attribute": {
                'host_attribute': ["id", "group_name"],
                'inline_attribute': "group"
            },
            "header": "person_inline_header",
            'borrow_attributes': [{
                'host_attribute': 'village',
                'inline_attribute': 'village'
            }]
        },      
        //object - describes inlines to be included in this entity's form

        bulk:{},     
        //object - if multiple objects of this entity type can be saved through its add form, describe configs of object 
        ------------------------------------------------------------------------------------
    }
    */
    
    // //This template would be passed the json of inline model and shall produce the desired row
//     TODO: maybe instead of relying on users to use templating lang we should fill the rows ourselves in js code, like we are doing in form!

        var example_village_configs = {
        'page_header': 'Village',
        'list_elements':[{'element':'id'},{'element':'name','header':'Name'},{'element':'block_name','header':'Block Name'},{'element':'district_name','header':'District Name'},{'element':'state_name','header':'State Name'}], 
        'add_template_name': 'example_village_add_edit_template',
        'edit_template_name': 'example_village_add_edit_template',
        'rest_api_url': '/coco/exampleapp/api/v1/village/',
        'entity_name': 'examplevillage',
        'dashboard_display': {
            listing: true,
            add: true
        },
        'sort_field': 'name'
    };

    var example_group_configs = {
        'page_header': 'Group',
        'list_elements':[{'element':'id'},{'element':'name','header':'Name'},{'element':'village.name','header':'Village Name'}] ,
        'add_template_name': 'example_group_add_edit_template',
        'edit_template_name': 'example_group_add_edit_template',
        'rest_api_url': '/coco/exampleapp/api/v1/group/',
        'entity_name': 'examplegroup',
        'foreign_entities':{
            'examplevillage':{
                "village":{
                    'placeholder':'id_village',
                    'name_field':'name'
                },
            },
        },
        'dashboard_display': {
            listing: true,
            add: true
        },
        'sort_field' : 'name'
        
    };

    var example_person_configs = {
        'page_header': 'Person',
        'list_elements': [{'element':'id'},{'element':'name','header':'Name'},{'element':'group.name','header':'Group Name'},{'element':'village.name','header':'Village Name'}],
        'add_template_name': 'example_person_add_edit_template',
        'edit_template_name': 'example_person_add_edit_template',
        'rest_api_url': '/coco/exampleapp/api/v1/person/',
        'entity_name': 'exampleperson',
        'foreign_entities':{
            'examplegroup':{
                "group":{
                    'placeholder':'id_group',
                    'name_field':'name'
                },
            },
            'examplevillage':{
                "village":{
                    'placeholder':'id_village',
                    'name_field':'name'
                },
            },
        },
        'dashboard_display': {
            listing: true,
            add: true
        }
    };



    var misc = {
        download_chunk_size: 2000,
        background_download_interval: 5 * 60 * 1000,
        inc_download_url: "/get_log/",
        afterFullDownload: function(start_time, download_status){
            return saveTimeTaken();
            function saveTimeTaken(){
                var record_endpoint = "/coco/record_full_download_time/"; 
                return $.post(record_endpoint, {
                    start_time : start_time,
                    end_time : new Date().toJSON().replace("Z", "")
                })    
            }
        },
        onLogin: function(Offline, Auth){
            getLastDownloadTimestamp()
                .done(function(timestamp){
                    askServer(timestamp);
                });
            var that = this;    
            function askServer(timestamp){
                $.get(that.reset_database_check_url,{
                    lastdownloadtimestamp: timestamp
                })
                    .done(function(resp){
                        if(resp=="1")
                            Offline.reset_database();
                    });
            }   
            function getLastDownloadTimestamp()
            {
                var dfd = new $.Deferred();
                Offline.fetch_object("meta_data", "key", "last_full_download_start")
                    .done(function(model){
                        dfd.resolve(model.get("timestamp"));
                    })
                    .fail(function(model, error){
                    
                    });
                return dfd;    
            } 
        },
        reset_database_check_url: '/coco/reset_database_check/',
    };



    return {
        example_village: example_village_configs,
        example_group:example_group_configs,
        exampleperson:example_person_configs,
        misc : misc
    }
});