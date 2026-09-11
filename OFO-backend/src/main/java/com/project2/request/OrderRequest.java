package com.project2.request;


import lombok.Data;
import model.Address;

@Data
public class OrderRequest {

    private Long restaurantId;
    private Address deliveryAddress;

}
