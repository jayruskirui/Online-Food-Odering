package com.project2.request;


import lombok.Data;

@Data
public class IngredientRequest {

    private String name;
    private Long categoryId;
    private Long restaurantId;

}
