package com.genuinecoder.springserver.service;

import com.genuinecoder.springserver.domain.User;
import com.genuinecoder.springserver.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public boolean authenticate(String email, String password) {
        if (userRepository.countAllByEmailAndPassword(email, password) == 1) {
            return true;
        }
        return false;
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}
