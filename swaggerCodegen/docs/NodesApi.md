# TestApplicationApi.NodesApi

All URIs are relative to *https://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodes**](NodesApi.md#getNodes) | **GET** /nodes | Get nodes by parent node id
[**postNodes**](NodesApi.md#postNodes) | **POST** /nodes | Add a new node


<a name="getNodes"></a>
# **getNodes**
> [Node] getNodes(opts)

Get nodes by parent node id

### Example
```javascript
var TestApplicationApi = require('test_application_api');

var apiInstance = new TestApplicationApi.NodesApi();

var opts = { 
  'parentId': "parentId_example" // String | Parent node id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNodes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| Parent node id | [optional] 

### Return type

[**[Node]**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postNodes"></a>
# **postNodes**
> Node postNodes(body)

Add a new node

### Example
```javascript
var TestApplicationApi = require('test_application_api');

var apiInstance = new TestApplicationApi.NodesApi();

var body = new TestApplicationApi.NewNode(); // NewNode | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postNodes(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewNode**](NewNode.md)|  | 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

