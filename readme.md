# Package Monitoring API

## Summary

The Package Monitoring API offers the capability to fetch comprehensive data regarding the historical and present status of a package's tracking.

## EndPoint

POST https://localhost:8080/monitor

## Request

### ❎ Invalid Request:

```json
{
  "orderNumber": "CN333"
}
```

### ✅ valid Request:

```json
{
  "orderNumber": "04-10144-80286"
}
```

## Reponse

Upon Reponse, the API sends back a JSON structure with the package's tracking details. The primary information is encapsulated within the `data` segment, showcasing the subsequent details:

### Sample Response

```json
{
  "data": [
    {
      "id": "9a73b452e03c2c724414f3859fad1c2c",
      "tracking_number": "TBA308626148196",
      "courier_code": "amazon",
      "order_number": "114-0292795-2405840",
      "order_date": null,
      "created_at": "2023-10-25T07:02:52+00:00",
      "update_at": "2023-10-25T07:02:53+00:00",
      "delivery_status": "notfound",
      "archived": "tracking",
      "updating": true,
      "source": "API",
      "destination_country": null,
      "destination_state": null,
      "destination_city": null,
      "origin_country": null,
      "origin_state": null,
      "origin_city": null,
      "tracking_postal_code": null,
      "tracking_ship_date": null,
      "tracking_destination_country": null,
      "tracking_origin_country": null,
      "tracking_key": null,
      "tracking_courier_account": null,
      "customer_name": null,
      "customer_email": null,
      "customer_sms": null,
      "order_id": null,
      "title": null,
      "logistics_channel": null,
      "note": null,
      "signed_by": null,
      "service_code": null,
      "weight": null,
      "weight_kg": null,
      "product_type": null,
      "pieces": null,
      "dimension": null,
      "previously": null,
      "destination_track_number": null,
      "exchange_number": null,
      "scheduled_delivery_date": null,
      "scheduled_address": null,
      "substatus": "notfound002",
      "status_info": null,
      "latest_event": null,
      "latest_checkpoint_time": null,
      "transit_time": 0,
      "origin_info": {
        "courier_code": "amazon",
        "courier_phone": null,
        "weblink": "https://logistics.amazon.com/",
        "reference_number": null,
        "milestone_date": {
          "inforeceived_date": null,
          "pickup_date": null,
          "outfordelivery_date": null,
          "delivery_date": null,
          "returning_date": null,
          "returned_date": null
        },
        "pickup_date": null,
        "departed_airport_date": null,
        "arrived_abroad_date": null,
        "customs_received_date": null,
        "trackinfo": []
      },
      "destination_info": {
        "courier_code": null,
        "courier_phone": null,
        "weblink": null,
        "reference_number": null,
        "milestone_date": {
          "inforeceived_date": null,
          "pickup_date": null,
          "outfordelivery_date": null,
          "delivery_date": null,
          "returning_date": null,
          "returned_date": null
        },
        "pickup_date": null,
        "departed_airport_date": null,
        "arrived_abroad_date": null,
        "customs_received_date": null,
        "trackinfo": []
      }
    }
  ],
  "status": {
    "code": 200,
    "message": "Request response is successful"
  }
}
```
