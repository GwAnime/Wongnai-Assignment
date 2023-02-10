const supertest = require('supertest');
import {app} from "../index";



describe('API Gateway', () => {
    describe('check the restaurant existence', () => {
        describe('given the restaurant does not exist', () => {
            it('should return 500', async () => {
                const restaurantId = '12332';

                await supertest(app).get(`/restaurant/${restaurantId}`).expect(500);
            });
        });

        describe('given the restaurant 227018 exists', () => {
            it('should return 200', async () => {
                const restaurantId = '227018';

                await supertest(app).get(`/restaurant/${restaurantId}`).expect(200);
            });
        });
        
        describe('given the restaurant 567051 exists', () => {
            it('should return 200', async () => {
                const restaurantId = '567051';

                await supertest(app).get(`/restaurant/${restaurantId}`).expect(200);
            });
        });
    });

    describe('receives a JSON response in the correct format', () => {
        test('receives from Restaurant endpoint in the correct format', async () => {
            const response = await supertest(app).get('/restaurant/567051');
    
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        
    
    
            const data = response.body;
            expect(data).toHaveProperty('name');
            expect(typeof data.name).toBe('string');
    
            expect(data).toHaveProperty('id');
            expect(typeof data.id).toBe('number');
    
            expect(data).toHaveProperty('coverImage');
            expect(typeof data.coverImage).toBe('string');
    
            expect(data).toHaveProperty('menus');
            expect(Array.isArray(data.menus)).toBe(true);
            expect(data.menus.length).toBeGreaterThan(0);
            
            expect(data).toHaveProperty('activeTimePeriod.open');
            expect(data).toHaveProperty('activeTimePeriod.close');
    
        });
    
        test('receives from Restaurant Short-Menu endpoint in the correct format', async () => {
    
            const encodedUrl = encodeURI('/restaurant/567051/menus/ข้าวผัดปลาทู/short');
            const response = await supertest(app).get(encodedUrl);
    
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    
            const data = response.body;
            expect(data).toHaveProperty('name');
            expect(typeof data.name).toBe('string');
    
            expect(data).toHaveProperty('id');
            expect(typeof data.id).toBe('string');
    
            expect(typeof data.thumbnailImage).toBe('string');
    
            expect(data).toHaveProperty('fullPrice');
            expect(typeof data.fullPrice).toBe('number');
    
            expect(data).toHaveProperty('discountedPercent');
            expect(typeof data.discountedPercent).toBe('number');
    
            expect(data).toHaveProperty('sold');
            expect(typeof data.sold).toBe('number');
            
            expect(data).toHaveProperty('totalInStock');
            expect(typeof data.totalInStock).toBe('number');
    
    
        });
    
        test('receives from Restaurant Full-Menu endpoint in the correct format', async () => {
    
            const encodedUrl = encodeURI('/restaurant/567051/menus/ข้าวผัดปลาทู/full');
            const response = await supertest(app).get(encodedUrl);
    
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    
            const data = response.body;
            expect(data).toHaveProperty('name');
            expect(typeof data.name).toBe('string');
    
            expect(data).toHaveProperty('id');
            expect(typeof data.id).toBe('string');
    
            expect(typeof data.thumbnailImage).toBe('string');
    
            expect(data).toHaveProperty('fullPrice');
            expect(typeof data.fullPrice).toBe('number');
    
            expect(data).toHaveProperty('discountedPercent');
            expect(typeof data.discountedPercent).toBe('number');
    
            expect(data).toHaveProperty('sold');
            expect(typeof data.sold).toBe('number');
            
            expect(data).toHaveProperty('totalInStock');
            expect(typeof data.totalInStock).toBe('number');
                
            expect(typeof data.largeImage).toBe('string');
    
            expect(data).toHaveProperty('options');
            expect(Array.isArray(data.options)).toBe(true);
            expect(data.options.length).toBeGreaterThan(0);
        });
    });
    
});

