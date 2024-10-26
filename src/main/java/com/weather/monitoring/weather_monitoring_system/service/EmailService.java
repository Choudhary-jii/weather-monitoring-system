////
////package com.weather.monitoring.weather_monitoring_system.service;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.beans.factory.annotation.Value;
////import org.springframework.mail.SimpleMailMessage;
////import org.springframework.mail.javamail.JavaMailSender;
////import org.springframework.stereotype.Service;
////
////@Service
////public class EmailService {
////
////    @Autowired
////    private JavaMailSender mailSender;
////
////    @Value("${spring.mail.username}")
////    private String senderEmail;
////
////    @Value("${app.alert.email.recipient}")
////    private String recipientEmail;
////
////    public void sendAlertEmail(String subject, String message) {
////        SimpleMailMessage email = new SimpleMailMessage();
////        email.setFrom(senderEmail);
////        email.setTo(recipientEmail);
////        email.setSubject(subject);
////        email.setText(message);
////
////        mailSender.send(email);
////    }
////}
//package com.weather.monitoring.weather_monitoring_system.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
////@Service
////public class EmailService {
////
////    @Autowired
////    private JavaMailSender mailSender;
////
////    public void sendAlertEmail(String subject, String message, String recipientEmail) {
////        SimpleMailMessage email = new SimpleMailMessage();
////        email.setFrom("your-email@gmail.com"); // The sender email
////        email.setTo(recipientEmail);
////        email.setSubject(subject);
////        email.setText(message);
////
////        mailSender.send(email);
////    }
////}
//
//@Service
//public class EmailService {
//
//    @Autowired
//    private JavaMailSender mailSender;
//
//    @Value("${spring.mail.username}")  // Fetch the sender's email from properties
//    private String senderEmail;
//
//    public void sendAlertEmail(String subject, String message, String recipientEmail) {
//
//        if (recipientEmail == null || recipientEmail.isEmpty()) {
//            throw new IllegalArgumentException("Recipient email must not be null or empty");
//        }
//
//        SimpleMailMessage email = new SimpleMailMessage();
//        email.setFrom(senderEmail);  // Use the configured sender's email
//        email.setTo(recipientEmail);
//        email.setSubject(subject);
//        email.setText(message);
//
//        mailSender.send(email);
//    }
//}
package com.weather.monitoring.weather_monitoring_system.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    final private JavaMailSender mailSender;

    @Value("${spring.mail.username}")  // Fetch the sender's email from properties
    private String senderEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendAlertEmail(String subject, String message, String recipientEmail) {
        if (recipientEmail == null || recipientEmail.isEmpty()) {
            throw new IllegalArgumentException("Recipient email must not be null or empty");
        }

        SimpleMailMessage email = new SimpleMailMessage();

        email.setFrom("test.java9926@yahoo.com");
        email.setTo(recipientEmail);
        email.setSubject(subject);
        email.setText(message);

        mailSender.send(email);
    }
}
