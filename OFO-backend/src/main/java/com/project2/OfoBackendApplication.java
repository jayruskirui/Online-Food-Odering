package com.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EntityScan("model")
@EnableJpaRepositories("com.project2.repository")
@SpringBootApplication

public class OfoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OfoBackendApplication.class, args);
	}

}
