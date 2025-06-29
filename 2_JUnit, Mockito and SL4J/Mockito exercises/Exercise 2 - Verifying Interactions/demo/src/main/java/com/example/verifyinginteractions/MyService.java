package com.example.verifyinginteractions;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData() {
        api.getData(); // This method call is what we want to verify
    }
}
